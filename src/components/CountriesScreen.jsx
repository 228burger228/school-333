import React from 'react';
import { countries } from '../data/countries';
import { ArrowLeft, ArrowRight, Sparkles, MapPin, Globe } from 'lucide-react';

export default function CountriesScreen({ onSelectCountry, onBack }) {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left animate-fadeIn">
      {/* Top Back & Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#8B0000]/15">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B0000]/10 hover:bg-[#8B0000]/15 text-[#8B0000] text-xs sm:text-sm font-bold transition-all border border-[#8B0000]/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На главную</span>
        </button>

        <div className="text-left sm:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000]/80 block">
            Шаг 1 из 3 • Каталог стран
          </span>
          <span className="text-xs text-[#2D1810]/70">
            Доступно 13 европейских государств
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          Выберите страну для поступления
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8B0000] tracking-tight">
          Где вы хотите учиться?
        </h1>
        <p className="text-sm sm:text-base text-[#2D1810]/80 max-w-2xl mt-2 leading-relaxed">
          Выберите страну, чтобы изучить доступные направления, национальные особенности кампусов и университеты с программами и стипендиями.
        </p>
      </div>

      {/* 13 Countries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {countries.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelectCountry(c)}
            className="group relative bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/15 hover:border-[#8B0000] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden hover:-translate-y-1"
          >
            {/* Background subtle badge */}
            <div className="absolute -top-3 -right-3 text-7xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none">
              {c.flag}
            </div>

            <div>
              {/* Header with Flag and Name */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl drop-shadow-sm">{c.flag}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#8B0000] group-hover:text-[#630000] transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-xs text-[#2D1810]/60 flex items-center gap-1 font-medium">
                      <MapPin className="w-3 h-3 text-[#8B0000]" />
                      {c.landmarkCity}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-[#EFE0CD] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Landmark & Vibe description */}
              <p className="text-xs sm:text-sm text-[#2D1810]/85 font-medium leading-relaxed mb-3">
                {c.vibe}
              </p>

              {/* Sticker Collage Preview Thumbnail */}
              {c.stickerImages && c.stickerImages.length > 0 && (
                <div className="mb-3 h-28 rounded-2xl overflow-hidden border border-[#8B0000]/15 bg-[#EFE0CD] relative group-hover:shadow-inner">
                  <img
                    src={c.stickerImages[0]}
                    alt={`Стикеры ${c.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1.5 right-2 px-2 py-0.5 rounded-md bg-[#FAF5EE]/90 text-[10px] font-bold text-[#8B0000] border border-[#8B0000]/20 backdrop-blur-xs">
                    Атмосфера {c.flag}
                  </div>
                </div>
              )}

              {/* Cultural Stickers Collage Pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {c.stickers.slice(0, 4).map((st, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#EFE0CD] border border-[#8B0000]/20 text-[11px] font-semibold text-[#8B0000]"
                  >
                    <span>{st.icon}</span>
                    <span>{st.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Tuition & Living Cost Row */}
            <div className="pt-3 border-t border-[#8B0000]/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8B0000]/70 block">Обучение</span>
                <span className="font-extrabold text-[#2D1810]">{c.tuitionSummary}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-[#8B0000]/70 block">Жизнь в мес.</span>
                <span className="font-extrabold text-[#8B0000]">{c.avgLivingCost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
