import React, { useState } from 'react';
import { countries } from '../data/countries';
import { Compass, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export default function CountryLandmarkPreview({ onSelectCountry, selectedCountryId }) {
  const [activeCountry, setActiveCountry] = useState(
    countries.find((c) => c.id === selectedCountryId) || countries[0]
  );
  const [animateLandmark, setAnimateLandmark] = useState(false);

  const handleCountryClick = (country) => {
    setActiveCountry(country);
    setAnimateLandmark(true);
    setTimeout(() => setAnimateLandmark(false), 800);
    if (onSelectCountry) {
      onSelectCountry(country.id);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between relative z-10">
          {/* Left Info Column */}
          <div className="flex-1 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Интерактивный атлас стран
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white">
              Исследуйте страны и их культуру
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              Нажмите на любую европейскую страну ниже, чтобы увидеть её символ, стоимость жизни, стипендии и атмосферу студенческой жизни.
            </p>

            {/* Country Pill Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {countries.map((c) => {
                const isSelected = activeCountry.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleCountryClick(c)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105 ring-2 ring-white/30'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200 border border-white/5'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Country Details Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-semibold">Обучение</span>
                <span className="text-sm font-semibold text-emerald-400">{activeCountry.tuitionSummary}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-semibold">Жизнь в месяц</span>
                <span className="text-sm font-semibold text-amber-300">{activeCountry.avgLivingCost}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-semibold">Виза после учебы</span>
                <span className="text-sm font-semibold text-blue-300">{activeCountry.postStudyVisa}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onSelectCountry && onSelectCountry(activeCountry.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-all"
              >
                <span>Университеты в стране: {activeCountry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Landmark Visual Column with Animation */}
          <div className="w-full lg:w-96 flex flex-col items-center justify-center">
            <div
              className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-6 bg-gradient-to-br ${activeCountry.accentColor} flex flex-col items-center justify-between shadow-2xl border-4 border-white/20 transition-all duration-700 ${
                animateLandmark ? 'scale-105 rotate-1 ring-4 ring-amber-400' : 'animate-float'
              }`}
            >
              {/* Landmark Header */}
              <div className="w-full flex justify-between items-center text-white/90">
                <span className="text-2xl drop-shadow-md">{activeCountry.flag}</span>
                <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  {activeCountry.landmarkCity}
                </span>
              </div>

              {/* Landmark Graphic Representation */}
              <div className="flex flex-col items-center justify-center my-auto text-center">
                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-5xl shadow-inner mb-3">
                  {activeCountry.symbol}
                </div>
                <h4 className="text-xl font-black text-white drop-shadow-md">
                  {activeCountry.landmark}
                </h4>
                <p className="text-xs text-white/90 font-medium max-w-[220px] mt-1 line-clamp-2">
                  {activeCountry.vibe}
                </p>
              </div>

              {/* Landmark Footer badge */}
              <div className="w-full text-center">
                <span className="text-[11px] font-semibold text-white/80 bg-black/25 px-3 py-1 rounded-full">
                  ✨ Узнаваемый образ: {activeCountry.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
