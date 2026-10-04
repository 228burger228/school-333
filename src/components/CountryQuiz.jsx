import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import { countryQuizQuestions } from '../data/quizData';
import { countries } from '../data/countries';

export default function CountryQuiz({ onSelectCountryForCatalog, onNavigateHome }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState(null);

  const question = countryQuizQuestions[currentStep];

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStep]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentStep < countryQuizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    const scores = {};
    countries.forEach((c) => {
      scores[c.id] = 0;
    });

    countryQuizQuestions.forEach((q, qIndex) => {
      const chosenOptIndex = selectedAnswers[qIndex];
      if (chosenOptIndex !== undefined) {
        const option = q.options[chosenOptIndex];
        if (option && option.weights) {
          Object.keys(option.weights).forEach((countryId) => {
            scores[countryId] = (scores[countryId] || 0) + (option.weights[countryId] || 0);
          });
        }
      }
    });

    const sorted = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    const maxScore = sorted[0][1] || 1;

    const topCountries = sorted.map(([id, score], index) => {
      const countryData = countries.find((c) => c.id === id) || countries[0];
      const percentage = Math.min(98, Math.max(68, Math.round((score / maxScore) * 96) - index * 5));
      return {
        ...countryData,
        score,
        percentage
      };
    });

    setResults(topCountries);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setResults(null);
  };

  if (results) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn text-left">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#EFE0CD]" />
            Ваш персональный маршрут готов
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#8B0000] tracking-tight">
            Страны, которые идеально подходят вам
          </h2>
          <p className="text-[#2D1810]/80 text-sm sm:text-base mt-2 max-w-xl mx-auto font-medium">
            На основе ваших ответов по бюджету, языку, климату и карьерным целям мы подобрали 3 лучших направления.
          </p>
        </div>

        {/* Top 3 Result Cards */}
        <div className="space-y-4 mb-8">
          {results.map((rc, idx) => (
            <div
              key={rc.id}
              className={`p-6 rounded-3xl border-2 transition-all ${
                idx === 0
                  ? 'bg-[#FAF5EE] border-[#8B0000] shadow-md ring-2 ring-[#8B0000]/20'
                  : 'bg-white border-[#8B0000]/20 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{rc.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-[#8B0000]">{rc.name}</h3>
                      {idx === 0 && (
                        <span className="text-xs font-bold bg-[#8B0000] text-[#EFE0CD] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          Топ выбор
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#2D1810]/70 mt-0.5">
                      {rc.landmark} ({rc.landmarkCity}) • {rc.vibe}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#8B0000]">
                      {rc.percentage}%
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-[#8B0000]/70">
                      Совместимость
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectCountryForCatalog(rc.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-xs transition-all"
                  >
                    <span>Выбрать {rc.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-[#8B0000]/10 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#2D1810]">
                <div>
                  <span className="text-[#8B0000]/70 block font-bold text-[10px] uppercase">Обучение:</span>
                  <span className="font-extrabold">{rc.tuitionSummary}</span>
                </div>
                <div>
                  <span className="text-[#8B0000]/70 block font-bold text-[10px] uppercase">Жизнь:</span>
                  <span className="font-extrabold">{rc.avgLivingCost}</span>
                </div>
                <div>
                  <span className="text-[#8B0000]/70 block font-bold text-[10px] uppercase">Виза после учебы:</span>
                  <span className="font-extrabold">{rc.postStudyVisa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#8B0000]/25 text-[#8B0000] bg-white hover:bg-[#FAF5EE] text-xs sm:text-sm font-bold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти тест заново</span>
          </button>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            <span>На главную страницу</span>
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn text-left">
      <div className="bg-[#FAF5EE] rounded-3xl border-2 border-[#8B0000]/20 shadow-lg p-6 sm:p-8">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-bold text-[#8B0000] uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Тест: Какая страна тебе подходит?
            </span>
            <span>
              Вопрос {currentStep + 1} из {countryQuizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-[#EFE0CD] h-2.5 rounded-full overflow-hidden border border-[#8B0000]/15">
            <div
              className="bg-[#8B0000] h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentStep + 1) / countryQuizQuestions.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] tracking-tight mb-1">
            {question.question}
          </h3>
          <p className="text-xs sm:text-sm text-[#2D1810]/70 font-medium">
            {question.subtitle}
          </p>
        </div>

        {/* Option Cards */}
        <div className="space-y-3 mb-8">
          {question.options.map((opt, oIdx) => {
            const isSelected = selectedAnswers[currentStep] === oIdx;
            return (
              <div
                key={oIdx}
                onClick={() => handleSelectOption(oIdx)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-[#8B0000] bg-[#EFE0CD] shadow-xs'
                    : 'border-[#8B0000]/15 bg-white hover:border-[#8B0000]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#2D1810]">
                    {opt.text}
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-[#8B0000] bg-[#8B0000] text-[#EFE0CD]'
                      : 'border-[#8B0000]/30'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Step Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#8B0000]/15">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              currentStep === 0
                ? 'opacity-40 cursor-not-allowed text-[#2D1810]/40'
                : 'text-[#8B0000] hover:bg-[#8B0000]/10'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black shadow-md transition-all ${
              isAnswered
                ? 'bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD]'
                : 'opacity-50 cursor-not-allowed bg-[#8B0000]/20 text-[#8B0000]/50'
            }`}
          >
            <span>
              {currentStep === countryQuizQuestions.length - 1
                ? 'Узнать результат'
                : 'Следующий вопрос'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
