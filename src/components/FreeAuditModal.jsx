import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Sparkles, ShieldCheck, Mail, User, Building2, AlertCircle } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { checkRateLimit, recordRateLimitAttempt, sanitizeText, isValidEmail } from '../utils/security';

export default function FreeAuditModal({
  isOpen,
  onClose,
  preselectedUniversity = null,
  preselectedCountry = null,
  currentLang = 'ru'
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [botHoneypot, setBotHoneypot] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = getTranslation(currentLang);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Anti-bot Honeypot trap: bots fill invisible fields automatically
    if (botHoneypot.trim()) {
      // Silently succeed to fool bots without processing
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSubmitted(true);
      }, 500);
      return;
    }

    // 2. Input Sanitization
    const cleanName = sanitizeText(name);
    const cleanEmail = sanitizeText(email);

    if (!cleanName || !cleanEmail) return;

    // 3. Email syntax verification
    if (!isValidEmail(cleanEmail)) {
      setErrorMessage(t.audit.invalidEmail || 'Пожалуйста, укажите корректный адрес электронной почты.');
      return;
    }

    // 4. Rate Limiting verification (Max 3 requests / 10 min, 30s cooldown between submits)
    const rateCheck = checkRateLimit('free_audit', {
      maxAttempts: 3,
      windowMs: 10 * 60 * 1000,
      cooldownMs: 30 * 1000
    });

    if (!rateCheck.allowed) {
      if (rateCheck.reason === 'cooldown') {
        const msg = (t.audit.rateLimitCooldown || 'Пожалуйста, подождите {sec} сек перед следующей отправкой.')
          .replace('{sec}', rateCheck.remainingSeconds);
        setErrorMessage(msg);
      } else {
        const msg = (t.audit.rateLimitExceeded || 'Превышен лимит запросов. Попробуйте через {sec} сек.')
          .replace('{sec}', rateCheck.remainingSeconds);
        setErrorMessage(msg);
      }
      return;
    }

    setIsLoading(true);

    // 5. Record attempt for rate limiter
    recordRateLimitAttempt('free_audit');

    // Save sanitized lead locally to simulate real CRM lead generation
    const newLead = {
      id: Date.now(),
      name: cleanName,
      email: cleanEmail,
      university: preselectedUniversity ? preselectedUniversity.name : null,
      country: preselectedCountry || (preselectedUniversity ? preselectedUniversity.countryName : null),
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('euro_audit_leads') || '[]');
      localStorage.setItem('euro_audit_leads', JSON.stringify([newLead, ...existing]));
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setBotHoneypot('');
    setErrorMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 overflow-hidden my-3 sm:my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#8B0000] via-[#700000] to-[#500000] p-6 text-white relative">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#EFE0CD]" />
            {t.audit.badge}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {t.audit.title}
          </h2>
          <p className="text-xs text-[#EFE0CD]/90 mt-1 leading-relaxed">
            {t.audit.subtitle}
          </p>

          {preselectedUniversity && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/35 text-xs text-[#EFE0CD] font-bold border border-white/10">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.audit.targetUni} {preselectedUniversity.name}</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#8B0000] mb-1">
                  {t.audit.successTitle}{name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#2D1810]/80 max-w-sm mx-auto leading-relaxed font-medium">
                  {t.audit.successDesc}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#EFE0CD]/60 border border-[#8B0000]/20 text-xs text-[#8B0000] font-bold max-w-sm mx-auto flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>{t.audit.memoNotice}</span>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#8B0000] text-[#EFE0CD] font-black text-xs sm:text-sm hover:bg-[#630000] transition-colors cursor-pointer"
              >
                <span>{t.audit.closeBtn}</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-bot Honeypot trap (hidden from humans, traps automated scrapers) */}
              <div style={{ position: 'absolute', opacity: 0, zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }} aria-hidden="true">
                <input
                  type="text"
                  name="user_organization_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botHoneypot}
                  onChange={(e) => setBotHoneypot(e.target.value)}
                />
              </div>

              {/* Security Rate Limit & Validation Alert */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-300/80 text-xs font-bold text-red-900 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#8B0000] mb-1.5">
                  {t.audit.nameLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8B0000]/60">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.audit.namePlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8B0000]/20 text-[16px] sm:text-xs md:text-sm text-[#2D1810] placeholder-[#2D1810]/40 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#8B0000] mb-1.5">
                  {t.audit.emailLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8B0000]/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.audit.emailPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8B0000]/20 text-[16px] sm:text-xs md:text-sm text-[#2D1810] placeholder-[#2D1810]/40 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>
              </div>

              {/* Lightweight Assurance */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#EFE0CD]/50 border border-[#8B0000]/15 text-[11px] text-[#2D1810]/75">
                <ShieldCheck className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>
                  {t.audit.reassurance}
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading || !name.trim() || !email.trim()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#8B0000] hover:bg-[#630000] disabled:opacity-50 text-[#EFE0CD] font-black text-sm shadow-md transition-all cursor-pointer"
                >
                  {isLoading ? (
                    <span>{t.audit.sending}</span>
                  ) : (
                    <>
                      <span>{t.audit.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
