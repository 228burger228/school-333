import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight, TrendingUp, HelpCircle } from 'lucide-react';

export default function ChanceEstimator({ onApplyFilters, onOpenAudit }) {
  const [gpa, setGpa] = useState(4.3);
  const [languageLevel, setLanguageLevel] = useState('b2'); // 'a2' | 'b1' | 'b2' | 'c1' | 'noTest'
  const [budget, setBudget] = useState('free'); // 'free' | 'low' | 'any'

  const evaluation = useMemo(() => {
    let score = 50;

    // GPA score impact
    if (gpa >= 4.7) score += 30;
    else if (gpa >= 4.2) score += 22;
    else if (gpa >= 3.8) score += 14;
    else score += 5;

    // Language level impact
    if (languageLevel === 'c1') score += 18;
    else if (languageLevel === 'b2') score += 14;
    else if (languageLevel === 'b1') score += 6;
    else score += 2;

    // Final percentage capped at 96%
    const finalScore = Math.min(96, Math.max(45, score));

    let verdict = 'Высокие шансы на прямое зачисление и стипендию!';
    let recommendation = 'Вы проходите по конкурсу большинства европейских госвузов. Рекомендуем обратить внимание на Германию (0 €) и Италию со стипендией DSU.';
    let suggestedCountry = 'Германия, Италия, Австрия';

    if (finalScore < 65) {
      verdict = 'Хорошие шансы при выборе программ с внутренним тестом или Foundation.';
      recommendation = 'Рекомендуется рассмотреть подготовительные отделения (Studienkolleg / Prep Year) или страны с лояльным порогом (Чехия, Испания).';
      suggestedCountry = 'Чехия, Испания, Польша';
    } else if (finalScore < 80) {
      verdict = 'Уверенные шансы на поступление в большинство университетов ЕС.';
      recommendation = 'Ваш профиль конкурентоспособен. Главный фокус — сильное мотивационное письмо (SOP) и своевременная подача документов.';
      suggestedCountry = 'Италия, Испания, Франция';
    }

    return {
      score: finalScore,
      verdict,
      recommendation,
      suggestedCountry
    };
  }, [gpa, languageLevel, budget]);

  const handleAction = () => {
    if (onApplyFilters) {
      onApplyFilters({
        fundingOption: budget,
        selectedLanguage: 'en',
        selectedExam: languageLevel === 'noTest' ? 'Пока не сдавал' : 'IELTS'
      });
    }
  };

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#8B0000]/15 shadow-sm max-w-5xl mx-auto my-12 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#8B0000]/15">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Интерактивный диагностический калькулятор</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] tracking-tight">
            Оцените шансы зачисления и стипендии за 30 секунд
          </h3>
          <p className="text-xs sm:text-sm text-[#2D1810]/75 font-medium mt-1">
            Настройте средний балл (GPA) и текущий уровень языка, чтобы рассчитать вероятность поступления.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* GPA Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-extrabold text-[#2D1810]">
                Средний балл аттестата / диплома (GPA):
              </label>
              <span className="px-3 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] font-black text-sm">
                {gpa.toFixed(1)} / 5.0
              </span>
            </div>
            <input
              type="range"
              min="3.0"
              max="5.0"
              step="0.1"
              value={gpa}
              onChange={(e) => setGpa(parseFloat(e.target.value))}
              className="w-full accent-[#8B0000] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#2D1810]/60 mt-1 font-bold">
              <span>3.0 (Минимум)</span>
              <span>4.0 (Хорошо)</span>
              <span>4.5 (Отлично)</span>
              <span>5.0 (Максимум)</span>
            </div>
          </div>

          {/* Language Level Selector */}
          <div>
            <label className="block text-xs sm:text-sm font-extrabold text-[#2D1810] mb-2">
              Уровень владения английским или европейским языком:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'b1', label: 'B1 (Средний)' },
                { id: 'b2', label: 'B2 (IELTS 6.0)' },
                { id: 'c1', label: 'C1 (IELTS 7.0+)' },
                { id: 'noTest', label: 'Без экзамена' }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setLanguageLevel(lvl.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    languageLevel === lvl.id
                      ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000] shadow-xs'
                      : 'bg-white hover:bg-[#EFE0CD]/50 text-[#2D1810] border-[#8B0000]/20'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selector */}
          <div>
            <label className="block text-xs sm:text-sm font-extrabold text-[#2D1810] mb-2">
              Планируемый бюджет на оплату обучения в год:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'free', label: '0 € (Бесплатные ВУЗы)' },
                { id: 'low', label: 'до 3 000 € / год' },
                { id: 'any', label: 'Любой бюджет' }
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBudget(b.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    budget === b.id
                      ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000] shadow-xs'
                      : 'bg-white hover:bg-[#EFE0CD]/50 text-[#2D1810] border-[#8B0000]/20'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculation Result Card */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border-2 border-[#8B0000]/20 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#8B0000]">
                Индекс готовности профиля
              </span>
              <span className="text-2xl font-black text-[#8B0000]">
                {evaluation.score}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#EFE0CD] h-2.5 rounded-full overflow-hidden mb-4">
              <div
                className="bg-[#8B0000] h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${evaluation.score}%` }}
              />
            </div>

            <h4 className="text-sm font-black text-[#2D1810] mb-1.5 leading-snug">
              {evaluation.verdict}
            </h4>

            <p className="text-xs text-[#2D1810]/75 font-medium leading-relaxed mb-4">
              {evaluation.recommendation}
            </p>

            <div className="p-3 bg-[#FAF5EE] rounded-xl border border-[#8B0000]/15 text-xs mb-4">
              <span className="font-extrabold text-[#8B0000] block mb-0.5">Оптимальные страны:</span>
              <span className="font-bold text-[#2D1810]">{evaluation.suggestedCountry}</span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={handleAction}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs font-black shadow-md transition-all cursor-pointer"
            >
              <span>Показать подходящие программы</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onOpenAudit && (
              <button
                onClick={onOpenAudit}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-[#8B0000] hover:bg-[#8B0000]/10 text-[11px] font-bold rounded-lg transition-colors cursor-pointer"
              >
                <span>Запросить индивидуальный аудит шансов</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
