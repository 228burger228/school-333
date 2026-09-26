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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          Добро пожаловать в Европу
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Выберите язык платформы
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-md mb-6">
          Листайте карточки с приветствиями на европейских языках и выберите удобный для вас язык обучения и интерфейса.
        </p>

        {/* Interactive 3D Flip Card Container */}
        <div className="w-full max-w-sm h-64 perspective-1000 mb-6 cursor-pointer" onClick={() => setFlipped(!flipped)}>
          <div
            className={`relative w-full h-full duration-500 transform-style-3d rounded-2xl shadow-xl transition-all ${
              flipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of Card */}
            <div className="absolute inset-0 backface-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 text-white flex flex-col justify-between items-center shadow-lg border border-white/10">
              <div className="w-full flex justify-between items-center text-white/80">
                <span className="text-3xl">{current.flag}</span>
                <span className="text-xs tracking-wider uppercase font-semibold bg-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {current.name}
                </span>
                <span className="text-xs text-white/60">
                  {currentIndex + 1} / {languages.length}
                </span>
              </div>

              <div className="my-auto py-2">
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight drop-shadow-sm mb-2">
                  «{current.greeting}»
                </p>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-snug px-2">
                  {current.subtext}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-blue-200/80">
                <span>Нажмите, чтобы перевернуть</span>
                <Globe className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Back of Card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl p-6 bg-slate-900 text-white flex flex-col justify-between items-center shadow-lg border border-slate-700">
              <div className="w-full flex justify-between items-center text-slate-300">
                <span className="text-2xl">{current.flag}</span>
                <span className="text-xs uppercase font-semibold text-amber-400">Языковые возможности</span>
              </div>

              <div className="text-center px-2">
                <p className="text-base font-semibold text-slate-100 mb-2">{current.name}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {current.hint}. Большинство программ магистратуры и бакалавриата в ЕС доступны на английском и национальных языках.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLang(current.code);
                    handleConfirm(current.code);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Выбрать {current.name}
                </button>
              </div>

              <div className="text-[11px] text-slate-400">Нажмите, чтобы вернуться</div>
            </div>
          </div>
        </div>

        {/* Card Navigation Controls */}
        <div className="flex items-center justify-center gap-3 w-full mb-6">
          <button
            onClick={handlePrev}
            className="px-3.5 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
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
                  i === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                title={l.name}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="px-3.5 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            Следующий →
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={() => handleConfirm('ru')}
            className="text-xs text-slate-500 hover:text-slate-700 font-medium py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Оставить Русский по умолчанию
          </button>

          <button
            onClick={() => handleConfirm(current.code)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Продолжить</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
