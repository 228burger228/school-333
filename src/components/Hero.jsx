import React from 'react';
import {
  Compass,
  Briefcase,
  ArrowRight,
  MapPin,
  Search,
  BookOpen,
  Award,
  MoreHorizontal
} from 'lucide-react';
import { countries } from '../data/countries';
import ProgramAggregator from './ProgramAggregator';
import { getTranslation } from '../data/translations';

export default function Hero({
  onOpenCountries,
  onStartSearch,
  onStartCountryQuiz,
  onStartCareerQuiz,
  onOpenGuide,
  onAggregate,
  currentLang = 'ru'
}) {
  const t = getTranslation(currentLang);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 text-center bg-[#EFE0CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/25 text-[#8B0000] text-xs sm:text-sm font-bold tracking-wide mb-6">
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#8B0000] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-5 sm:mb-6">
          {t.hero.titleMain} <span>{t.hero.titleAccent}</span> {t.hero.titleEnd}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-[#2D1810]/85 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
          {t.hero.subtitle}
        </p>

        {/* PRIMARY ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
          {/* THE PROMINENT «⋯» BUTTON */}
          <button
            onClick={onOpenCountries}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-sm sm:text-base font-black rounded-2xl shadow-xl shadow-[#8B0000]/25 hover:-translate-y-0.5 transition-all group cursor-pointer"
          >
            <span className="text-xl font-black tracking-widest group-hover:scale-125 transition-transform">⋯</span>
            <span>{t.hero.btnChooseCountry}</span>
            <ArrowRight className="w-4 h-4 text-[#EFE0CD]" />
          </button>

          <button
            onClick={onStartCountryQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FAF5EE] hover:bg-white text-[#8B0000] border-2 border-[#8B0000]/30 hover:border-[#8B0000] text-sm sm:text-base font-bold rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#8B0000]" />
            <span>{t.hero.btnMatchCountry}</span>
          </button>
        </div>

        {/* АГРЕГАТОР ПРОГРАММ (Прил. 4) */}
        <ProgramAggregator onAggregate={onAggregate} currentLang={currentLang} />

        {/* Плашка: Свобода выбора международное признание и гранты (Прил. 3) */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl p-6 sm:p-8 bg-[#FAF5EE] border-2 border-[#8B0000]/25 shadow-md text-center">
          <h3 className="text-xl sm:text-3xl font-black text-[#8B0000] tracking-tight">
            {t.hero.bannerTitle}
          </h3>
        </div>

        {/* Countries Preview Pills */}
        <div className="bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/15 max-w-4xl mx-auto mb-12 shadow-sm text-left">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B0000] flex items-center gap-1.5">
              <span>⋯</span>
              <span>{t.hero.availableDirections}</span>
            </span>
            <button
              onClick={onOpenCountries}
              className="text-xs font-bold text-[#8B0000] hover:underline cursor-pointer"
            >
              {t.hero.seeAll}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c.id}
                onClick={onOpenCountries}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EFE0CD] hover:bg-[#8B0000] hover:text-[#EFE0CD] text-xs font-bold text-[#8B0000] border border-[#8B0000]/20 transition-all hover:scale-105 cursor-pointer"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Секция: Почему стоит воспользоваться Maybe abroad? */}
        <div className="max-w-6xl mx-auto mb-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B0000] block mb-1">
              {t.hero.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#8B0000] tracking-tight">
              {t.hero.whyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#2D1810]/75 mt-2 font-medium">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                0€
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                {t.hero.why1Title}
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                {t.hero.why1Desc}
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                ✓
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                {t.hero.why2Title}
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                {t.hero.why2Desc}
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                ⚡
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                {t.hero.why3Title}
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                {t.hero.why3Desc}
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center font-black text-sm mb-3">
                EU
              </div>
              <h3 className="text-sm font-black text-[#8B0000] mb-1.5">
                {t.hero.why4Title}
              </h3>
              <p className="text-xs text-[#2D1810]/80 leading-relaxed font-medium">
                {t.hero.why4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Разграничитель и заголовок навигации/предложений */}
        <div className="relative my-12 max-w-5xl mx-auto">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2 border-[#8B0000]/15" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#EFE0CD] px-5 py-1 rounded-full border border-[#8B0000]/20 text-xs font-black uppercase tracking-widest text-[#8B0000] shadow-2xs">
              {t.hero.navDivider}
            </span>
          </div>
        </div>

        {/* 4 Roadmap & Feature Cards (Прил. 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10 text-left">
          <div
            onClick={onOpenCountries}
            className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 hover:border-[#8B0000] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-black text-lg mb-3">
              ⋯
            </div>
            <h3 className="text-base font-black text-[#8B0000] mb-1">
              {t.hero.card1Title}
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              {t.hero.card1Desc}
            </p>
          </div>

          <div
            onClick={onStartCareerQuiz}
            className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 hover:border-[#8B0000] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-bold mb-3">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#8B0000] mb-1">
              {t.hero.card2Title}
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              {t.hero.card2Desc}
            </p>
          </div>

          <div
            onClick={onStartSearch}
            className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 hover:border-[#8B0000] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-bold mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#8B0000] mb-1">
              {t.hero.card3Title}
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              {t.hero.card3Desc}
            </p>
          </div>

          <div
            onClick={onOpenGuide}
            className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 hover:border-[#8B0000] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-bold mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#8B0000] mb-1">
              {t.hero.card4Title}
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              {t.hero.card4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
