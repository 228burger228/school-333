import React from 'react';
import {
  Search,
  Compass,
  Briefcase,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Euro,
  GraduationCap,
  Globe2
} from 'lucide-react';

export default function Hero({ onStartSearch, onStartCountryQuiz, onStartCareerQuiz }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs mb-6 animate-pulse-subtle">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Европейское образование без стресса и десятков вкладок</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Поступление в Европу —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
            проще, ближе и понятнее
          </span>
        </h1>

        {/* Subtitle / USP */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Не просто каталог университетов. Мы помогаем пройти путь от неопределенности к конкретному университету, стипендии и пошаговому плану поступления.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-12">
          <button
            onClick={onStartSearch}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm sm:text-base font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
          >
            <Search className="w-5 h-5" />
            <span>Начать поиск университетов</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onStartCountryQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-800 hover:text-indigo-700 text-sm sm:text-base font-bold rounded-2xl shadow-xs hover:shadow-md transition-all"
          >
            <Compass className="w-5 h-5 text-indigo-600" />
            <span>Какая страна подходит мне?</span>
          </button>
        </div>

        {/* Quick Route Cards: 3 Steps from Confusion to Enrollment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12 text-left">
          <div
            onClick={onStartCountryQuiz}
            className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
              1. Не знаете, какую страну выбрать?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Пройдите тест на 3 минуты: сопоставим ваш бюджет, климат, язык и карьерные цели с 9 странами Европы.
            </p>
          </div>

          <div
            onClick={onStartCareerQuiz}
            className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
              2. Не определились с профессией?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Профориентационный тест подскажет перспективные направления обучения и специальности в ЕС.
            </p>
          </div>

          <div
            onClick={onStartSearch}
            className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              3. Ищете программы и стипендии?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Умный поиск с фильтрами: бесплатные программы, стипендии DSU и DAAD, поступление без IELTS.
            </p>
          </div>
        </div>

        {/* Statistical Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-slate-200 text-slate-600 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-slate-900">0 €</span>
            <span>стоимость учебы в госвузах Германии и Чехии</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-blue-600">100%</span>
            <span>покрытие по стипендиям DSU, Eiffel и DAAD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-indigo-600">9 стран</span>
            <span>с подробными требованиями и дедлайнами</span>
          </div>
        </div>
      </div>
    </section>
  );
}
