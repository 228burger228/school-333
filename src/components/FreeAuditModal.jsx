import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, ShieldCheck, Mail, User, Building2 } from 'lucide-react';

export default function FreeAuditModal({
  isOpen,
  onClose,
  preselectedUniversity = null,
  preselectedCountry = null
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsLoading(true);

    // Save lead locally to simulate real CRM lead generation
    const newLead = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
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
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 overflow-hidden my-6 text-left"
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
            Бесплатный аудит шансов
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Оценка шансов на поступление
          </h2>
          <p className="text-xs text-[#EFE0CD]/90 mt-1 leading-relaxed">
            Без навязчивых звонков. Методист проверит соответствие требованиям и отправит разбор на почту.
          </p>

          {preselectedUniversity && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/35 text-xs text-[#EFE0CD] font-bold border border-white/10">
              <Building2 className="w-3.5 h-3.5" />
              <span>Целевой ВУЗ: {preselectedUniversity.name}</span>
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
                  Заявка принята, {name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#2D1810]/80 max-w-sm mx-auto leading-relaxed font-medium">
                  Мы получили ваши вводные данные. Методист по поступлению проверит требования для {preselectedUniversity ? preselectedUniversity.name : 'выбранных программ'} и вышлет разбор на <strong>{email}</strong> в течение 24 часов.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#EFE0CD]/60 border border-[#8B0000]/20 text-xs text-[#8B0000] font-bold max-w-sm mx-auto flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Памятка по стипендиям и дедлайнам уже отправлена на вашу почту.</span>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#8B0000] text-[#EFE0CD] font-black text-xs sm:text-sm hover:bg-[#630000] transition-colors cursor-pointer"
              >
                <span>Закрыть окно</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#8B0000] mb-1.5">
                  Ваше имя
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
                    placeholder="Например, Анна"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8B0000]/20 text-xs sm:text-sm text-[#2D1810] placeholder-[#2D1810]/40 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#8B0000] mb-1.5">
                  Электронная почта (Email)
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
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8B0000]/20 text-xs sm:text-sm text-[#2D1810] placeholder-[#2D1810]/40 focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]"
                  />
                </div>
              </div>

              {/* Lightweight Assurance */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#EFE0CD]/50 border border-[#8B0000]/15 text-[11px] text-[#2D1810]/75">
                <ShieldCheck className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                <span>
                  Конфиденциально. Мы не звоним со спамом и не передаем данные третьим лицам.
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
                    <span>Отправка заявки...</span>
                  ) : (
                    <>
                      <span>Получить бесплатный расчет шансов</span>
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
