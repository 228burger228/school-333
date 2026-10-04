import React, { useState } from 'react';
import { studyDirections } from '../data/directions';
import { ArrowLeft, Sparkles, MapPin, Check, ArrowRight, Layers } from 'lucide-react';

export default function DirectionsScreen({
  country,
  onSelectDirection,
  onBackToCountries,
  onShowAllInCountry
}) {
  const [selectedStickerTab, setSelectedStickerTab] = useState(0);

  const handleCardClick = (direction, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    onSelectDirection(direction, origin);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left animate-fadeIn">
      {/* Top Back & Step indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#8B0000]/15">
        <button
          onClick={onBackToCountries}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B0000]/10 hover:bg-[#8B0000]/15 text-[#8B0000] text-xs sm:text-sm font-bold transition-all border border-[#8B0000]/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>К списку стран</span>
        </button>

        <div className="text-left sm:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000]/80 block">
            Шаг 2 из 3 • Направления обучения
          </span>
          <span className="text-xs text-[#2D1810]/70">
            Страна: <strong>{country.name}</strong> {country.flag}
          </span>
        </div>
      </div>

      {/* Country Hero Banner with Stickers & Aesthetics */}
      <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#8B0000]/20 shadow-md mb-10 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3">
              <span>{country.flag}</span>
              <span>Выбранная страна</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#8B0000] tracking-tight">
              {country.name}
            </h1>
            <p className="text-sm sm:text-base text-[#2D1810]/85 font-medium mt-2 max-w-xl leading-relaxed">
              {country.vibe}
            </p>

            {/* Cultural Stickers Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {country.stickers.map((st, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-[#EFE0CD] border border-[#8B0000]/25 text-xs font-bold text-[#8B0000] shadow-2xs hover:scale-105 transition-transform"
                >
                  <span className="text-base">{st.icon}</span>
                  <span>{st.text}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onShowAllInCountry}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <span>Все университеты в {country.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Spain Special Collage Showcase (from user attached images) */}
          {country.stickerImages && country.stickerImages.length > 0 && (
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-[#EFE0CD] p-3 rounded-2xl border border-[#8B0000]/20 shadow-xs text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B0000] block mb-2">
                  ✨ Атмосферные стикеры {country.name}
                </span>
                <div className="relative h-44 rounded-xl overflow-hidden border border-[#8B0000]/20 bg-white">
                  <img
                    src={country.stickerImages[selectedStickerTab]}
                    alt={`Стикеры ${country.name}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex justify-center gap-2 mt-2">
                  {country.stickerImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedStickerTab(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        selectedStickerTab === i ? 'bg-[#8B0000] w-6' : 'bg-[#8B0000]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Directions Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#8B0000] tracking-tight">
          Выберите направление обучения
        </h2>
        <p className="text-xs sm:text-sm text-[#2D1810]/70 mt-1">
          Нажмите на интересующее направление — акварельная анимация откроет подходящие университеты.
        </p>
      </div>

      {/* 10 Study Directions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
        {studyDirections.map((dir) => (
          <div
            key={dir.id}
            onClick={(e) => handleCardClick(dir, e)}
            className="group relative bg-[#FAF5EE] rounded-3xl p-5 sm:p-6 border-2 border-[#8B0000]/15 hover:border-[#8B0000] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex items-start justify-between gap-4 overflow-hidden hover:-translate-y-1"
          >
            {/* Left content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[#8B0000] group-hover:text-[#EFE0CD] transition-all duration-300 shrink-0">
                {dir.icon}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black text-[#8B0000] group-hover:text-[#630000] transition-colors">
                  {dir.title}
                </h3>
                <p className="text-xs text-[#2D1810]/80 mt-1 leading-relaxed">
                  {dir.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {dir.popularCareers.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] bg-[#EFE0CD] text-[#8B0000] px-2 py-0.5 rounded-md font-semibold border border-[#8B0000]/15"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow indicator */}
            <div className="w-9 h-9 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-[#EFE0CD] transition-all shrink-0 mt-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
