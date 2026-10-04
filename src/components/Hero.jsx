import React from 'react';
import {
  Compass,
  Briefcase,
  ArrowRight,
  Sparkles,
  MapPin,
  Search,
  MoreHorizontal
} from 'lucide-react';
import { countries } from '../data/countries';

export default function Hero({
  onOpenCountries,
  onStartSearch,
  onStartCountryQuiz,
  onStartCareerQuiz
}) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 text-center bg-[#EFE0CD]">
      {/* Background soft ornamentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/25 text-[#8B0000] text-xs sm:text-sm font-bold tracking-wide mb-6">
          <Sparkles className="w-4 h-4 text-[#8B0000]" />
          <span>Образование в Европе без стресса и десятков официальных вкладок</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#8B0000] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Поступление в Европу —{' '}
          <span className="underline decoration-[#8B0000]/40 decoration-wavy decoration-2">
            проще, ближе и понятнее
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-[#2D1810]/85 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
          Превращаем самостоятельное исследование десятков сайтов в ясный пошаговый маршрут: от выбора страны и направления до конкретного университета и стипендии.
        </p>

        {/* PRIMARY ACTION BUTTONS: Featuring the «⋯» button! */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
          {/* THE PROMINENT «⋯» BUTTON */}
          <button
            onClick={onOpenCountries}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-sm sm:text-base font-black rounded-2xl shadow-xl shadow-[#8B0000]/25 hover:-translate-y-0.5 transition-all group"
          >
            <span className="text-xl font-black tracking-widest group-hover:scale-125 transition-transform">⋯</span>
            <span>Выбрать страну (13 стран)</span>
            <ArrowRight className="w-4 h-4 text-[#EFE0CD]" />
          </button>

          <button
            onClick={onStartCountryQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FAF5EE] hover:bg-white text-[#8B0000] border-2 border-[#8B0000]/30 hover:border-[#8B0000] text-sm sm:text-base font-bold rounded-2xl shadow-sm hover:shadow-md transition-all"
          >
            <Compass className="w-5 h-5 text-[#8B0000]" />
            <span>Тест: Какая страна подходит?</span>
          </button>
        </div>

        {/* Countries Preview Pills */}
        <div className="bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/15 max-w-4xl mx-auto mb-12 shadow-sm text-left">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#8B0000] flex items-center gap-1.5">
              <span>⋯</span>
              <span>13 доступных направлений Европы:</span>
            </span>
            <button
              onClick={onOpenCountries}
              className="text-xs font-bold text-[#8B0000] hover:underline"
            >
              Смотреть все →
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c.id}
                onClick={onOpenCountries}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EFE0CD] hover:bg-[#8B0000] hover:text-[#EFE0CD] text-xs font-bold text-[#8B0000] border border-[#8B0000]/20 transition-all hover:scale-105"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10 text-left">
          <div
            onClick={onOpenCountries}
            className="bg-[#FAF5EE] p-5 rounded-3xl border-2 border-[#8B0000]/15 hover:border-[#8B0000] cursor-pointer transition-all hover:shadow-md group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-black text-lg mb-3">
              ⋯
            </div>
            <h3 className="text-base font-black text-[#8B0000] mb-1">
              1. Страны и культура
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              13 стран с атмосферой, стикерами, стоимостью жизни и доступными визами.
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
              2. 10 направлений обучения
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              IT, медицина, инженерия, бизнес, право, архитектура и другие профили.
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
              3. 3D-карточки ВУЗов
            </h3>
            <p className="text-xs text-[#2D1810]/75 leading-relaxed font-medium">
              Фотография на лицевой стороне, а при перевороте — гранты, языки и стоимость.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
