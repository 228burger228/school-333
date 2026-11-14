import React from 'react';
import {
  Compass,
  Briefcase,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { countries } from '../data/countries';
import ProgramAggregator from './ProgramAggregator';
import PathwayTimeline from './PathwayTimeline';
import ChanceEstimator from './ChanceEstimator';
import SuccessStories from './SuccessStories';
import FaqSection from './FaqSection';
import { getTranslation } from '../data/translations';

export default function Hero({
  onOpenCountries,
  onStartSearch,
  onStartCountryQuiz,
  onStartCareerQuiz,
  onOpenGuide,
  onAggregate,
  onOpenAudit,
  currentLang = 'ru'
}) {
  const t = getTranslation(currentLang);

  return (
    <section className="relative overflow-hidden pt-4 pb-20 sm:pt-8 sm:pb-24 text-center bg-[#EFE0CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. TOP BENTO SPLIT HERO (Вдохновлено Horizon Global Ed с Behance) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 sm:my-8 items-stretch text-left">
          
          {/* LEFT BENTO CARD (Brand Burgundy Offer & Interactive Roadmap Stepper) */}
          <div className="lg:col-span-7 bg-[#8B0000] text-[#EFE0CD] rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-[#8B0000]/30 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Background Gradient Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Pills: Tag Formats */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-[#EFE0CD]">
                  <span>•</span>
                  <span>0 € Государственные ВУЗы</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-[#EFE0CD]">
                  <span>•</span>
                  <span>Бакалавриат • Магистратура • PhD</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#EFE0CD]/80">
                  Интейки 2026/2027
                </span>
              </div>

              {/* Main Headline H1 */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
                Поступление в Европу — <span className="text-[#EFE0CD] underline decoration-white/30 underline-offset-4">понятно на каждом шаге</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#EFE0CD]/90 max-w-xl leading-relaxed font-medium mb-6">
                Вместо десятка вкладок и хаоса в требованиях — единая интерактивная база 30+ ведущих университетов, грантов, визовых правил и стоимости жизни в 13 странах ЕС без посредников и переплат.
              </p>

              {/* Integrated 4-Step Pathway Mini-Tracker */}
              <div className="p-3.5 bg-black/20 rounded-2xl border border-white/15 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#EFE0CD]/80 mb-2 flex items-center justify-between">
                  <span>Дорожная карта абитуриента:</span>
                  <span className="text-[10px] text-white/70">4 ключевых шага</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                  <div className="p-2 rounded-xl bg-white/20 text-white border border-white/30">
                    <span className="block text-[#EFE0CD] text-[9px]">Шаг 1</span>
                    Диагностика
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 text-[#EFE0CD]/90">
                    <span className="block text-[#EFE0CD]/70 text-[9px]">Шаг 2</span>
                    Подбор ВУЗов
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 text-[#EFE0CD]/90">
                    <span className="block text-[#EFE0CD]/70 text-[9px]">Шаг 3</span>
                    Документы
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 text-[#EFE0CD]/90">
                    <span className="block text-[#EFE0CD]/70 text-[9px]">Шаг 4</span>
                    Оффер & Виза
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons in Pill Shape */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenCountries}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF5EE] hover:bg-white text-[#8B0000] text-xs sm:text-sm font-black rounded-full shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span className="tracking-widest font-black text-base">⋯</span>
                <span>Выбрать страну (13 стран)</span>
                <ArrowRight className="w-4 h-4 text-[#8B0000] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onStartCountryQuiz}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#EFE0CD]" />
                <span>Тест: какая страна мне подходит?</span>
              </button>
            </div>
          </div>

          {/* RIGHT BENTO CARD (Visual Campus Atmosphere & Trust Proofs) */}
          <div className="lg:col-span-5 bg-[#FAF5EE] rounded-3xl border-2 border-[#8B0000]/20 overflow-hidden flex flex-col justify-between shadow-lg relative min-h-[380px]">
            {/* Campus Background Image with Gradient Overlay */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="images/hero_campus.jpg"
                alt="European University Campus Students"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EE] via-black/20 to-transparent" />

              {/* Floating Glassmorphism Trust Badge */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md">
                  <GraduationCap className="w-4 h-4 text-[#EFE0CD]" />
                  <span>Поступили сами и поможем вам</span>
                </div>
              </div>
            </div>

            {/* Bottom Proof Metrics Grid */}
            <div className="p-5 sm:p-6 bg-[#FAF5EE] relative z-10 -mt-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-2xl border border-[#8B0000]/15">
                  <div className="text-xl sm:text-2xl font-black text-[#8B0000]">30+</div>
                  <div className="text-[11px] font-bold text-[#2D1810]/70">топ-университетов ЕС</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#8B0000]/15">
                  <div className="text-xl sm:text-2xl font-black text-[#8B0000]">0 €</div>
                  <div className="text-[11px] font-bold text-[#2D1810]/70">плата за учебу в госвузах</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#8B0000]/15">
                  <div className="text-xl sm:text-2xl font-black text-[#8B0000]">20 ч</div>
                  <div className="text-[11px] font-bold text-[#2D1810]/70">официальная подработка</div>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#8B0000]/15">
                  <div className="text-xl sm:text-2xl font-black text-[#8B0000]">100%</div>
                  <div className="text-[11px] font-bold text-[#2D1810]/70">актуальные правила 2026</div>
                </div>
              </div>

              {/* Quick Secondary Action */}
              <button
                onClick={onStartCareerQuiz}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#EFE0CD] hover:bg-[#8B0000] text-[#8B0000] hover:text-[#EFE0CD] text-xs font-bold transition-all border border-[#8B0000]/20 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Пройти тест на профориентацию</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. PROGRAM AGGREGATOR MODULE */}
        <ProgramAggregator onAggregate={onAggregate} currentLang={currentLang} />

        {/* 3. COUNTRIES PREVIEW PILLS BAR */}
        <div className="bg-[#FAF5EE] rounded-3xl p-5 sm:p-6 border-2 border-[#8B0000]/15 max-w-5xl mx-auto my-8 shadow-xs text-left">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B0000] flex items-center gap-1.5">
              <span>⋯</span>
              <span>13 доступных направлений Европы:</span>
            </span>
            <button
              onClick={onOpenCountries}
              className="text-xs font-bold text-[#8B0000] hover:underline cursor-pointer"
            >
              Смотреть все страны →
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c.id}
                onClick={onOpenCountries}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFE0CD] hover:bg-[#8B0000] hover:text-[#EFE0CD] text-xs font-bold text-[#8B0000] border border-[#8B0000]/20 transition-all hover:scale-105 cursor-pointer"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. INTERACTIVE PATHWAY TIMELINE (ДОРОЖНАЯ КАРТА 4 ЭТАПОВ) */}
        <PathwayTimeline onOpenGuide={onOpenGuide} onOpenAudit={onOpenAudit} />

        {/* 5. INTERACTIVE CHANCE ESTIMATOR WIDGET (ДИАГНОСТИКА ШАНСОВ) */}
        <ChanceEstimator onApplyFilters={onAggregate} onOpenAudit={onOpenAudit} />

        {/* 6. SUCCESS STORIES & REAL PROOFS (СТЕНА ДОВЕРИЯ И КЕЙСОВ) */}
        <SuccessStories onOpenDetails={onStartSearch} onStartSearch={onStartSearch} />

        {/* 7. WHY CHOOSE EU EDUCATION (4 BENTO FEATURE CARDS) */}
        <div className="max-w-6xl mx-auto my-14 text-left">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B0000] block mb-1">
              Европейские стандарты
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#8B0000] tracking-tight">
              Почему абитуриенты выбирают высшее образование в Европе?
            </h2>
            <p className="text-xs sm:text-sm text-[#2D1810]/75 mt-1 font-medium">
              Международно признанный диплом, высокий уровень жизни и прозрачные правила легализации.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                0 €
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                Гранты и бесплатная учеба
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                Германия, Чехия и Словакия без оплаты за обучение. Стипендии DSU в Италии до 8 000 €/год с бесплатным общежитием.
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                ✓
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                Без скрытых требований
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                Пошаговые чек-листы документов: апостиль, омологация UNEDasiss, дедлайны и минимальные баллы языковых сертификатов.
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                💼
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                Студенческая подработка
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                Право легально работать до 20 часов в неделю во время семестра с оплатой от 12 до 16 €/час, покрывая расходы на жизнь.
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                🇪🇺
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                Визы и старт карьеры
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                От 12 до 24 месяцев визы на поиск работы в Европе после окончания ВУЗа и международное признание полученного диплома.
              </p>
            </div>
          </div>
        </div>

        {/* 8. PREMIER FAQ ACCORDION IN PILL SHAPE */}
        <FaqSection onOpenAudit={onOpenAudit} />

      </div>
    </section>
  );
}
