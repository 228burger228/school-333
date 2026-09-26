import React from 'react';
import { Heart, MapPin, Award, Calendar, Euro, Sparkles, ArrowRight } from 'lucide-react';

export default function UniversityCard({
  university,
  isFavorite,
  onToggleFavorite,
  onSelectUniversity
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left">
      {/* Top Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={university.photo}
          alt={university.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* QS Rank Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>{university.qsRank}</span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(university.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-md scale-110'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500 shadow-xs'
          }`}
          title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Country & City Badge on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <span>{university.flag}</span>
            <span>
              {university.countryName}, {university.city}
            </span>
          </div>
          <span className="text-[11px] bg-blue-600/90 px-2 py-0.5 rounded-md font-medium">
            {university.intakeSeason || 'Прием 2026/2027'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* University Name */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-0.5">
            {university.name}
          </h3>
          <p className="text-xs text-slate-400 italic mb-3 line-clamp-1">
            {university.localName}
          </p>

          {/* Key Advantage / Overview snippet */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {university.overview}
          </p>

          {/* Highlights Badges */}
          <div className="space-y-2 mb-4">
            {/* Tuition Badge */}
            <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span className="text-slate-500 font-medium">Обучение в год:</span>
              <span className="font-bold text-slate-900">
                {university.tuition.text}
              </span>
            </div>

            {/* Scholarship Badge */}
            {university.scholarship.available && (
              <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2.5 rounded-xl border border-emerald-100">
                <span className="font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Стипендия:
                </span>
                <span className="font-bold truncate max-w-[160px]" title={university.scholarship.name}>
                  {university.scholarship.name}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer: Deadline & Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="text-[11px] text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate max-w-[130px]">{university.deadline}</span>
          </div>

          <button
            onClick={() => onSelectUniversity(university)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white text-xs font-bold transition-all shadow-2xs group-hover:bg-blue-600 group-hover:text-white"
          >
            <span>Подробнее</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
