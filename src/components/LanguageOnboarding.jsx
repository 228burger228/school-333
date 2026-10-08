import React, { useState } from 'react';
import { languages } from '../data/languages';
import { Globe, ArrowRight, Check, Sparkles, Volume2 } from 'lucide-react';

export default function LanguageOnboarding({ onSelectLanguage, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState('ru');
  const [flipped, setFlipped] = useState(false);

  const current = languages[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % languages.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + languages.length) % languages.length);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden">
        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#EFE0CD]" />
          Добро пожаловать в Европу
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#8B0000] tracking-tight mb-2">
          Выберите язык платформы
        </h2>
        <p className="text-xs sm:text-sm text-[#2D1810]/75 max-w-md mb-6 font-medium">
          Листайте карточки с приветствиями и выберите удобный для вас язык интерфейса.
        </p>

        {/* Interactive 3D Flip Card Container */}
        <div className="w-full max-w-sm h-64 perspective-1000 mb-6 cursor-pointer" onClick={() => setFlipped(!flipped)}>
          <div
            className={`relative w-full h-full duration-500 transform-style-3d rounded-2xl shadow-xl transition-all ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-[#8B0000] via-[#750000] to-[#500000] text-[#EFE0CD] flex flex-col justify-between items-center shadow-lg border border-[#EFE0CD]/20">
              <div className="w-full flex justify-between items-center text-[#EFE0CD]/85">
                <span className="text-3xl">{current.flag}</span>
                <span className="text-xs tracking-wider uppercase font-bold bg-[#FAF5EE]/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {current.name}
                </span>
                <span className="text-xs text-[#EFE0CD]/60 font-medium">
                  {currentIndex + 1} / {languages.length}
                </span>
              </div>

              <div className="my-auto py-2">
                <p className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm mb-2 text-[#EFE0CD]">
                  «{current.greeting}»
                </p>
                <p className="text-xs sm:text-sm text-[#FAF5EE]/90 font-medium leading-snug px-2">
                  {current.subtext}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#EFE0CD]/80 font-semibold">
                <span>Нажмите, чтобы перевернуть</span>
                <Globe className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 bg-[#2D1810] text-[#EFE0CD] flex flex-col justify-between items-center shadow-lg border border-[#8B0000]/40">
              <div className="w-full flex justify-between items-center text-[#EFE0CD]/80">
                <span className="text-2xl">{current.flag}</span>
                <span className="text-xs uppercase font-bold text-[#EFE0CD]">Языковые возможности</span>
              </div>

              <div className="text-center px-2">
                <p className="text-base font-black text-[#EFE0CD] mb-2">{current.name}</p>
                <p className="text-xs text-[#EFE0CD]/80 leading-relaxed mb-4 font-medium">
                  {current.hint}. Большинство программ магистратуры и бакалавриата в ЕС доступны на английском и национальных языках.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLang(current.code);
                    handleConfirm(current.code);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs font-bold rounded-xl shadow-md transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Выбрать {current.name}
                </button>
              </div>

              <div className="text-[11px] text-[#EFE0CD]/60 font-medium">Нажмите, чтобы вернуться</div>
            </div>
          </div>
        </div>

        {/* Card Navigation Controls */}
        <div className="flex items-center justify-center gap-3 w-full mb-6">
          <button
            onClick={handlePrev}
            className="px-3.5 py-2 text-xs font-bold text-[#8B0000] bg-[#EFE0CD] hover:bg-[#8B0000]/15 rounded-xl transition-colors"
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
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-[#8B0000]' : 'w-2 bg-[#8B0000]/20 hover:bg-[#8B0000]/40'
                }`}
                title={l.name}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="px-3.5 py-2 text-xs font-bold text-[#8B0000] bg-[#EFE0CD] hover:bg-[#8B0000]/15 rounded-xl transition-colors"
          >
            Следующий →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#8B0000]/15">
          <button
            onClick={() => handleConfirm('ru')}
            className="text-xs text-[#8B0000] hover:underline font-bold py-2 px-3 rounded-lg transition-colors"
          >
            Оставить Русский по умолчанию
          </button>

          <button
            onClick={() => handleConfirm(current.code)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Продолжить</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
