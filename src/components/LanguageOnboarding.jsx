import React, { useState } from 'react';
import { languages } from '../data/languages';
import { Globe, ArrowRight, Check, Sparkles, X } from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function LanguageOnboarding({ onSelectLanguage, onClose, currentLang = 'ru' }) {
  const initialIndex = Math.max(0, languages.findIndex((l) => l.code === currentLang));
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedLang, setSelectedLang] = useState(currentLang);
  const [flipped, setFlipped] = useState(false);

  const t = getTranslation(selectedLang);
  const current = languages[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    const nextIdx = (currentIndex + 1) % languages.length;
    setCurrentIndex(nextIdx);
    setSelectedLang(languages[nextIdx].code);
  };

  const handlePrev = () => {
    setFlipped(false);
    const prevIdx = (currentIndex - 1 + languages.length) % languages.length;
    setCurrentIndex(prevIdx);
    setSelectedLang(languages[prevIdx].code);
  };

  const handleConfirm = (code) => {
    const langToSet = code || selectedLang;
    localStorage.setItem('euro_lang', langToSet);
    if (onSelectLanguage) {
      onSelectLanguage(langToSet);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 p-5 sm:p-8 flex flex-col items-center text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#2D1810] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#EFE0CD]" />
          {t.onboarding.badge}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#8B0000] tracking-tight mb-1.5">
          {t.onboarding.title}
        </h2>
        <p className="text-xs sm:text-sm text-[#2D1810]/75 max-w-md mb-4 font-medium">
          {t.onboarding.subtitle}
        </p>

        {/* Quick Language Selector Grid (Direct 1-Click Access) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-lg mb-5">
          {languages.map((l, i) => {
            const isSelected = selectedLang === l.code;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setSelectedLang(l.code);
                  setCurrentIndex(i);
                  setFlipped(false);
                }}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000] shadow-sm scale-102 ring-2 ring-[#8B0000]/30'
                    : 'bg-white text-[#2D1810] border-[#8B0000]/20 hover:bg-[#FAF5EE]'
                }`}
              >
                <span className="text-sm">{l.flag}</span>
                <span>{l.name}</span>
                {isSelected && <Check className="w-3 h-3 text-[#EFE0CD] ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Interactive 3D Flip Card Container */}
        <div
          className="w-full max-w-sm h-52 perspective-1000 mb-5 cursor-pointer"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative w-full h-full duration-500 transform-style-3d rounded-2xl shadow-xl transition-all ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden rounded-2xl p-5 bg-gradient-to-br from-[#8B0000] via-[#750000] to-[#500000] text-[#EFE0CD] flex flex-col justify-between items-center shadow-lg border border-[#EFE0CD]/20">
              <div className="w-full flex justify-between items-center text-[#EFE0CD]/85">
                <span className="text-2xl">{current.flag}</span>
                <span className="text-[11px] tracking-wider uppercase font-bold bg-[#FAF5EE]/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {current.name}
                </span>
                <span className="text-xs text-[#EFE0CD]/60 font-medium">
                  {currentIndex + 1} / {languages.length}
                </span>
              </div>

              <div className="my-auto py-1">
                <p className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm mb-1 text-[#EFE0CD]">
                  «{current.greeting}»
                </p>
                <p className="text-xs text-[#FAF5EE]/90 font-medium leading-snug px-2">
                  {current.subtext}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#EFE0CD]/80 font-semibold">
                <span>Нажмите для подсказки</span>
                <Globe className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-5 bg-[#2D1810] text-[#EFE0CD] flex flex-col justify-between items-center shadow-lg border border-[#8B0000]/40">
              <div className="w-full flex justify-between items-center text-[#EFE0CD]/80">
                <span className="text-2xl">{current.flag}</span>
                <span className="text-xs uppercase font-bold text-[#EFE0CD]">Языковой режим</span>
              </div>

              <div className="text-center px-2">
                <p className="text-sm font-black text-[#EFE0CD] mb-1">{current.name}</p>
                <p className="text-[11px] text-[#EFE0CD]/80 leading-relaxed font-medium">
                  {current.hint}. Все разделы платформы адаптируются под выбранную локаль.
                </p>
              </div>

              <div className="text-[11px] text-[#EFE0CD]/60 font-medium">Нажмите, чтобы перевернуть</div>
            </div>
          </div>
        </div>

        {/* Card Navigation Controls */}
        <div className="flex items-center justify-center gap-3 w-full mb-5">
          <button
            onClick={handlePrev}
            className="px-3 py-1.5 text-xs font-bold text-[#8B0000] bg-[#EFE0CD] hover:bg-[#8B0000]/15 rounded-xl transition-colors cursor-pointer"
          >
            ← Предыдущий
          </button>
          <div className="flex gap-1.5">
            {languages.map((l, i) => (
              <button
                key={l.code}
                onClick={() => {
                  setCurrentIndex(i);
                  setSelectedLang(l.code);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'w-5 bg-[#8B0000]' : 'w-2 bg-[#8B0000]/20 hover:bg-[#8B0000]/40'
                }`}
                title={l.name}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="px-3 py-1.5 text-xs font-bold text-[#8B0000] bg-[#EFE0CD] hover:bg-[#8B0000]/15 rounded-xl transition-colors cursor-pointer"
          >
            Следующий →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#8B0000]/15">
          <button
            onClick={() => handleConfirm('ru')}
            className="text-xs text-[#8B0000] hover:underline font-bold py-1.5 px-2 rounded-lg transition-colors cursor-pointer"
          >
            {t.onboarding.keepDefault}
          </button>

          <button
            onClick={() => handleConfirm(selectedLang)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>{t.onboarding.applyBtn} ({languages.find((l) => l.code === selectedLang)?.name})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
