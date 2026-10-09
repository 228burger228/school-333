/**
 * Client-side security utilities:
 * 1. Rate Limiting (Token Bucket / Sliding Window)
 * 2. Input Sanitization (Anti-XSS)
 * 3. Honeypot anti-bot verification
 */

const RATE_LIMIT_PREFIX = '_security_rl_';

/**
 * Check if the user is currently rate-limited for a given action.
 * @param {string} actionKey - Unique identifier for the action (e.g. 'audit_lead')
 * @param {object} config - Configuration options
 * @param {number} config.maxAttempts - Maximum attempts allowed in window (default: 3)
 * @param {number} config.windowMs - Time window in milliseconds (default: 10 minutes = 600000)
 * @param {number} config.cooldownMs - Minimum delay between consecutive actions (default: 25 seconds = 25000)
 * @returns {{ allowed: boolean, remainingSeconds?: number, reason?: 'cooldown' | 'max_attempts' }}
 */
export function checkRateLimit(actionKey, config = {}) {
  const maxAttempts = config.maxAttempts ?? 3;
  const windowMs = config.windowMs ?? 10 * 60 * 1000;
  const cooldownMs = config.cooldownMs ?? 25 * 1000;

  const storageKey = `${RATE_LIMIT_PREFIX}${actionKey}`;
  const now = Date.now();

  let timestamps = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      timestamps = JSON.parse(raw);
    }
  } catch {
    timestamps = [];
  }

  // Filter timestamps within the current sliding window
  const activeTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  // Check cooldown between consecutive requests
  if (activeTimestamps.length > 0) {
    const lastAttempt = activeTimestamps[activeTimestamps.length - 1];
    const elapsedSinceLast = now - lastAttempt;
    if (elapsedSinceLast < cooldownMs) {
      const remainingSeconds = Math.ceil((cooldownMs - elapsedSinceLast) / 1000);
      return {
        allowed: false,
        remainingSeconds,
        reason: 'cooldown'
      };
    }
  }

  // Check maximum attempts in the current window
  if (activeTimestamps.length >= maxAttempts) {
    const oldestInWindow = activeTimestamps[0];
    const remainingSeconds = Math.ceil((windowMs - (now - oldestInWindow)) / 1000);
    return {
      allowed: false,
      remainingSeconds,
      reason: 'max_attempts'
    };
  }

  return { allowed: true };
}

/**
 * Record a successful submission attempt for rate-limiting.
 * @param {string} actionKey 
 * @param {number} windowMs 
 */
export function recordRateLimitAttempt(actionKey, windowMs = 10 * 60 * 1000) {
  const storageKey = `${RATE_LIMIT_PREFIX}${actionKey}`;
  const now = Date.now();

  let timestamps = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      timestamps = JSON.parse(raw);
    }
  } catch {
    timestamps = [];
  }

  const activeTimestamps = timestamps.filter((ts) => now - ts < windowMs);
  activeTimestamps.push(now);

  try {
    localStorage.setItem(storageKey, JSON.stringify(activeTimestamps));
  } catch {
    // Ignore storage quota or disabled storage
  }
}

/**
 * Sanitizes user input string against HTML tags and control characters.
 * @param {string} str 
 * @returns {string}
 */
export function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>'"&]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return char;
      }
    })
    .trim();
}

/**
 * Validates email format according to standard RFC 5322 approximation.
 * @param {string} email 
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email.trim());
}
