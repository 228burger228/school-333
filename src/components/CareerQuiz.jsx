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
import { fieldCategories } from '../data/universities';

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
      medicine: 0,
      design: 0,
      social: 0
    };

    careerQuizQuestions.forEach((q, qIndex) => {
      const chosenOptIndex = selectedAnswers[qIndex];
      if (chosenOptIndex !== undefined) {
        const option = q.options[chosenOptIndex];
        if (option && option.field) {
          fieldCounts[option.field] = (fieldCounts[option.field] || 0) + 1;
        }
      }
    });

    const sortedFields = Object.entries(fieldCounts).sort((a, b) => b[1] - a[1]);
    const topFieldId = sortedFields[0][0];
    const secondaryFieldId = sortedFields[1][0];

    const primaryData = careerFieldDescriptions[topFieldId];
    const secondaryData = careerFieldDescriptions[secondaryFieldId];

    const finalResult = {
      topFieldId,
      primaryData,
      secondaryFieldId,
      secondaryData
    };

    setResults(finalResult);

    try {
      localStorage.setItem('euro_career_quiz_result', JSON.stringify(finalResult));
    } catch (e) {
      // ignore
    }

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
    const { topFieldId, primaryData, secondaryFieldId, secondaryData } = results;

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn text-left">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Ваш образовательный профиль определен
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Рекомендованное направление обучения
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Ваши сильные стороны и предпочтения указывают на высокий потенциал в следующей области:
          </p>
        </div>

        {/* Primary Field Card */}
        <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-lg mb-6 ring-2 ring-emerald-500/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-emerald-100">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl">{primaryData.icon}</span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Главный фокус
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {primaryData.title}
                </h3>
              </div>
            </div>

            <button
              onClick={() => onSelectFieldForCatalog(topFieldId)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all shrink-0"
            >
              <span>Смотреть университеты</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            {primaryData.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
              <span className="text-slate-400 font-bold block mb-1 uppercase tracking-wider">
                Ориентировочная зарплата выпускника:
              </span>
              <span className="font-bold text-slate-900 text-sm">
                {primaryData.salary}
              </span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-emerald-100 shadow-2xs">
              <span className="text-slate-400 font-bold block mb-1 uppercase tracking-wider">
                Популярные роли в индустрии:
              </span>
              <span className="font-bold text-slate-800">
                {primaryData.topRoles.join(' • ')}
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Alternative Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{secondaryData.icon}</span>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Смежное альтернативное направление:
              </span>
              <h4 className="text-base font-bold text-slate-900">
                {secondaryData.title}
              </h4>
            </div>
          </div>

          <button
            onClick={() => onSelectFieldForCatalog(secondaryFieldId)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors shrink-0"
          >
            <span>Изучить программы</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти тест заново</span>
          </button>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
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
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <Briefcase className="w-4 h-4" />
              Профориентационный тест
            </span>
            <span>
              Вопрос {currentStep + 1} из {careerQuizQuestions.length}
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((currentStep + 1) / careerQuizQuestions.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
            {question.question}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
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
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-1 ring-emerald-500'
                    : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {opt.text}
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-slate-300'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Step Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              currentStep === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all ${
              isAnswered
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25'
                : 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500'
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
