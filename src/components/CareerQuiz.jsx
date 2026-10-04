import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Briefcase,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';
import { careerQuizQuestions, careerFieldDescriptions } from '../data/quizData';
import { studyDirections } from '../data/directions';

export default function CareerQuiz({ onSelectFieldForCatalog, onNavigateHome }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState(null);

  const question = careerQuizQuestions[currentStep];

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStep]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentStep < careerQuizQuestions.length - 1) {
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
    const fieldCounts = {
      it: 0,
      business: 0,
      engineering: 0,
      biomedicine: 0,
      design: 0,
      humanities: 0,
      law: 0,
      health: 0,
      natural_sciences: 0,
      politics: 0
    };

    careerQuizQuestions.forEach((q, qIndex) => {
      const chosenOptIndex = selectedAnswers[qIndex];
      if (chosenOptIndex !== undefined) {
        const option = q.options[chosenOptIndex];
        if (option && option.field) {
          const mappedField = option.field === 'social' ? 'humanities' : option.field === 'medicine' ? 'biomedicine' : option.field;
          fieldCounts[mappedField] = (fieldCounts[mappedField] || 0) + 1;
        }
      }
    });

    const sortedFields = Object.entries(fieldCounts).sort((a, b) => b[1] - a[1]);
    const topFieldId = sortedFields[0][0];
    const secondaryFieldId = sortedFields[1][0];

    const dir1 = studyDirections.find((d) => d.id === topFieldId) || studyDirections[0];
    const dir2 = studyDirections.find((d) => d.id === secondaryFieldId) || studyDirections[1];

    const finalResult = {
      topFieldId,
      dir1,
      secondaryFieldId,
      dir2
    };

    setResults(finalResult);

    try {
      confetti({
        particleCount: 80,
        spread: 75,
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
    const { topFieldId, dir1, secondaryFieldId, dir2 } = results;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn text-left">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#EFE0CD]" />
            Ваш образовательный профиль определен
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#8B0000] tracking-tight">
            Рекомендованное направление обучения
          </h2>
          <p className="text-[#2D1810]/80 text-sm sm:text-base mt-2 max-w-xl mx-auto font-medium">
            Ваши сильные стороны и предпочтения указывают на высокий потенциал в следующей области:
          </p>
        </div>

        {/* Primary Field Card */}
        <div className="bg-[#FAF5EE] border-2 border-[#8B0000] rounded-3xl p-6 sm:p-8 shadow-lg mb-6 ring-2 ring-[#8B0000]/15">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#8B0000]/15">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">{dir1.icon}</span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000] bg-[#8B0000]/10 px-2.5 py-0.5 rounded-full">
                  Главный фокус
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] mt-1">
                  {dir1.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectFieldForCatalog(topFieldId)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-md transition-all shrink-0"
            >
              <span>Смотреть университеты</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-[#2D1810]/85 font-medium leading-relaxed mb-5">
            {dir1.description}
          </p>

          <div className="p-3.5 bg-[#EFE0CD] rounded-2xl border border-[#8B0000]/20 text-xs">
            <span className="text-[#8B0000] font-bold block mb-1 uppercase tracking-wider text-[10px]">
              Востребованные профессии в Европе:
            </span>
            <span className="font-extrabold text-[#2D1810]">
              {dir1.popularCareers.join(' • ')}
            </span>
          </div>
        </div>

        {/* Secondary Alternative Card */}
        <div className="bg-white border-2 border-[#8B0000]/20 rounded-3xl p-6 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{dir2.icon}</span>
            <div>
              <span className="text-[10px] font-bold text-[#8B0000] uppercase tracking-wider block">
                Смежное альтернативное направление:
              </span>
              <h4 className="text-base font-black text-[#2D1810]">
                {dir2.title}
              </h4>
            </div>
          </div>

          <button
            onClick={() => onSelectFieldForCatalog(secondaryFieldId)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF5EE] hover:bg-[#EFE0CD] text-[#8B0000] border border-[#8B0000]/25 text-xs font-bold rounded-xl transition-colors shrink-0"
          >
            <span>Изучить программы</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
              <Briefcase className="w-4 h-4" />
              Профориентационный тест
            </span>
            <span>
              Вопрос {currentStep + 1} из {careerQuizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-[#EFE0CD] h-2.5 rounded-full overflow-hidden border border-[#8B0000]/15">
            <div
              className="bg-[#8B0000] h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentStep + 1) / careerQuizQuestions.length) * 100}%`
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
              {currentStep === careerQuizQuestions.length - 1
                ? 'Показать мое направление'
                : 'Следующий вопрос'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
