import React, { useState } from 'react';
import {
  Heart,
  MapPin,
  Award,
  Calendar,
  Euro,
  Sparkles,
  ArrowRight,
  RotateCw,
  BookOpen,
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function UniversityFlipCard({
  university,
  isFavorite,
  onToggleFavorite,
  onOpenDetails
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-[460px] perspective-1000 select-none">
      <div
        className={`relative w-full h-full duration-500 transform-style-3d rounded-3xl transition-transform cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-[#FAF5EE] border-2 border-[#8B0000]/20 shadow-md hover:shadow-xl hover:border-[#8B0000] transition-all flex flex-col justify-between">
          {/* Main University Photo (Dominant visual element) */}
          <div className="relative w-full h-[320px] bg-slate-900 overflow-hidden">
            <img
              src={university.photo}
              alt={university.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
              <span className="bg-[#FAF5EE]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-[#8B0000] shadow-sm flex items-center gap-1 border border-[#8B0000]/20">
                <Award className="w-3.5 h-3.5 text-[#8B0000]" />
                <span>{university.qsRank}</span>
              </span>
            </div>

            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(university.id);
              }}
              className={`absolute top-3.5 right-3.5 p-2.5 rounded-full backdrop-blur-md transition-all ${
                isFavorite
                  ? 'bg-[#8B0000] text-[#EFE0CD] shadow-md scale-110'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
              title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Bottom Overlay Info on Photo */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EFE0CD] mb-1">
                <span>{university.flag}</span>
                <span>
                  {university.countryName}, {university.city}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md line-clamp-2">
                {university.name}
              </h3>
            </div>
          </div>

          {/* Front Card Bottom Bar & Flip Prompt */}
          <div className="p-4 bg-[#FAF5EE] flex items-center justify-between border-t border-[#8B0000]/10 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#8B0000]/70 block">Обучение</span>
              <span className="font-extrabold text-[#2D1810] text-sm">
                {university.tuition.text}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8B0000] text-[#EFE0CD] font-bold text-xs shadow-xs group-hover:bg-[#630000] transition-colors">
              <span>Параметры</span>
              <RotateCw className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-5 sm:p-6 bg-[#FAF5EE] border-2 border-[#8B0000] shadow-xl text-left flex flex-col justify-between overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-[#8B0000]/15 pb-3">
            <div className="flex items-center justify-between text-xs text-[#8B0000] font-bold mb-1">
              <span className="flex items-center gap-1">
                <span>{university.flag}</span>
                <span>{university.city}, {university.countryName}</span>
              </span>
              <span className="bg-[#8B0000]/10 px-2.5 py-0.5 rounded-full">
                {university.qsRank}
              </span>
            </div>
            <h4 className="text-lg font-black text-[#8B0000] line-clamp-1">
              {university.name}
            </h4>
          </div>

          {/* Structured Parameters Grid */}
          <div className="space-y-2.5 my-auto py-2 text-xs">
            {/* Tuition */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15 flex items-center justify-between">
              <span className="text-[#2D1810]/70 font-semibold">Стоимость обучения:</span>
              <span className="font-black text-[#8B0000]">
                {university.tuition.text}
              </span>
            </div>

            {/* Languages */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15 flex items-center justify-between">
              <span className="text-[#2D1810]/70 font-semibold">Языки обучения:</span>
              <span className="font-bold text-[#2D1810]">
                {university.languageReq.ielts ? `Английский (IELTS ${university.languageReq.ielts})` : 'Национальный / EN'}
              </span>
            </div>

            {/* Scholarships */}
            <div className="p-2.5 rounded-xl bg-[#8B0000]/10 border border-[#8B0000]/25">
              <span className="text-[10px] uppercase font-bold text-[#8B0000] block mb-0.5">
                Стипендии и гранты:
              </span>
              <span className="font-extrabold text-[#2D1810] block line-clamp-1">
                {university.scholarship.name}
              </span>
              <span className="text-[11px] text-[#8B0000] font-semibold">
                {university.scholarship.coverage}
              </span>
            </div>

            {/* Admission requirements snippet */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15">
              <span className="text-[10px] uppercase font-bold text-[#2D1810]/70 block mb-0.5">
                Требования к поступлению:
              </span>
              <p className="text-[11px] text-[#2D1810] font-medium line-clamp-2">
                {university.admissionChecklist[0]} • {university.admissionChecklist[1]}
              </p>
            </div>
          </div>

          {/* Bottom Actions on Back Side */}
          <div className="pt-3 border-t border-[#8B0000]/15 flex items-center justify-between gap-2">
            <button
              onClick={() => setIsFlipped(false)}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold text-[#8B0000] bg-[#8B0000]/10 hover:bg-[#8B0000]/20 transition-colors"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Фото</span>
            </button>

            <button
              onClick={() => onOpenDetails(university)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs font-black rounded-xl shadow-md transition-all"
            >
              <span>Подробнее</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
