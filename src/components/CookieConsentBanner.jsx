import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export default function CookieConsentBanner({ onOpenLegal, currentLang = 'ru' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('euro_cookie_consent');
      if (!consent) {
        // Small delay for gentle appearance after initial page render
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('euro_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Уведомление об использовании cookies и хранилища"
      className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-45 max-w-sm w-[calc(100%-1.5rem)] animate-fadeIn select-none text-left"
    >
      <div className="bg-[#FAF5EE]/95 backdrop-blur-md border-2 border-[#8B0000]/30 rounded-2xl p-4 shadow-2xl shadow-[#8B0000]/20 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-black text-[#8B0000] block leading-tight">
                {currentLang === 'en' ? 'Cookies & Storage (16+)' : 'Файлы Cookies и хранилище (16+)'}
              </span>
              <span className="text-[10px] text-[#2D1810]/60 font-semibold">
                {currentLang === 'en' ? 'GDPR & 152-FZ Compliance' : 'Комплаенс 152-ФЗ и GDPR'}
              </span>
            </div>
          </div>
          <button
            onClick={handleAccept}
            className="p-1 text-[#2D1810]/40 hover:text-[#8B0000] transition-colors rounded-lg cursor-pointer"
            aria-label="Закрыть уведомление"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] sm:text-xs text-[#2D1810]/80 leading-relaxed font-medium">
          {currentLang === 'en'
            ? 'We use local storage and cookies to remember your favorite universities, language settings, and filter preferences.'
            : 'Мы используем локальное хранилище и cookies для сохранения избранных вузов, языковых настроек и фильтров. Сервис 16+.'}
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-3 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs font-black transition-colors shadow-xs cursor-pointer text-center"
          >
            {currentLang === 'en' ? 'Accept' : 'Принять'}
          </button>
          <button
            onClick={() => onOpenLegal('cookies')}
            className="py-2 px-3 rounded-xl bg-[#8B0000]/10 hover:bg-[#8B0000]/20 text-[#8B0000] text-xs font-bold transition-colors cursor-pointer text-center"
          >
            {currentLang === 'en' ? 'Policy' : 'Условия'}
          </button>
        </div>
      </div>
    </aside>
  );
}
