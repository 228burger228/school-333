import React, { useState } from 'react';
import {
  Heart,
  MapPin,
  Award,
  Calendar,
  Sparkles,
  ArrowRight,
  RotateCw,
  BookOpen,
  CheckCircle2,
  Globe,
  Building2,
  GraduationCap
} from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function UniversityFlipCard({
  university,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
  currentLang = 'ru'
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const t = getTranslation(currentLang);

  return (
    <div className="w-full h-[510px] perspective-1000 select-none">
      <div
        className={`relative w-full h-full duration-500 transform-style-3d rounded-3xl transition-transform cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* ================= FRONT SIDE (Гарвардский академический минимализм) ================= */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-[#FAF5EE] border-2 border-[#8B0000]/20 shadow-md hover:shadow-xl hover:border-[#8B0000] transition-all flex flex-col justify-between">
          
          {/* Top: University Campus Photo Banner */}
          <div className="relative w-full h-[185px] sm:h-[195px] bg-gradient-to-br from-[#700000] via-[#8B0000] to-[#500000] overflow-hidden shrink-0">
            <img
              src={university.photo}
              alt={`${university.name} — Кампус университета, ${university.city}, ${university.countryName}`}
              title={`${university.name} (${university.city})`}
              width="600"
              height="338"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'images/hero_campus.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="bg-[#FAF5EE]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-[#8B0000] shadow-sm flex items-center gap-1.5 border border-[#8B0000]/20">
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
              className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all ${
                isFavorite
                  ? 'bg-[#8B0000] text-[#EFE0CD] shadow-md scale-110'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
              title={isFavorite ? t.card.removeFavorite : t.card.addFavorite}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Bottom Overlay Info on Photo */}
            <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#EFE0CD] mb-0.5">
                <span>{university.flag}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EFE0CD]" />
                  {university.countryName}, {university.city}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white leading-tight drop-shadow-md line-clamp-1">
                {university.name}
              </h3>
            </div>
          </div>

          {/* Middle: Заполняем свободное пространство ключевой пользой (Программы, Гранты, Описание) */}
          <div className="p-4 flex-1 flex flex-col justify-between text-left">
            {/* Overview Snippet */}
            <p className="text-xs text-[#2D1810]/80 font-medium leading-relaxed line-clamp-2 mb-2.5">
              {university.overview}
            </p>

            {/* Key Programs Tags */}
            <div className="mb-2.5">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#8B0000]/70 block mb-1.5">
                {t.card.programsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {university.keyPrograms.slice(0, 2).map((prog, pIdx) => (
                  <span
                    key={pIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EFE0CD] border border-[#8B0000]/20 text-[11px] font-bold text-[#8B0000] line-clamp-1 max-w-[240px]"
                  >
                    <GraduationCap className="w-3 h-3 text-[#8B0000] shrink-0" />
                    <span className="truncate">{prog.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metadata Row */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#8B0000]/10 text-[11px]">
              <div>
                <span className="text-[9px] uppercase font-bold text-[#2D1810]/60 block">{t.card.langThreshold}</span>
                <span className="font-extrabold text-[#2D1810]">
                  {university.languageReq.ielts ? `IELTS ${university.languageReq.ielts}+` : t.card.noStrictTest}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold text-[#2D1810]/60 block">{t.card.scholarshipBase}</span>
                <span className="font-extrabold text-[#8B0000] truncate block">
                  {university.scholarship.available ? university.scholarship.name.split(' ')[0] + ' ' + (university.scholarship.name.split(' ')[1] || '') : t.card.stateSubsidies}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Строгая академическая типографика */}
          <div className="px-4 py-3 bg-[#FAF5EE] flex items-center justify-between border-t border-[#8B0000]/15 text-xs shrink-0">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#8B0000]/80 block">
                {t.card.tuitionLabel}
              </span>
              <span className="font-black text-[#8B0000] text-sm tracking-tight">
                {university.tuition.text}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] font-black text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>{t.card.parametersBtn}</span>
              <RotateCw className="w-3.5 h-3.5" />
            </button>
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
              <span className="flex items-center gap-1.5">
                <span>{university.flag}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8B0000]" />
                  {university.city}, {university.countryName}
                </span>
              </span>
              <span className="bg-[#8B0000]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold">
                <Award className="w-3 h-3 text-[#8B0000]" />
                {university.qsRank}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-[#8B0000] line-clamp-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#8B0000] shrink-0" />
              <span>{university.name}</span>
            </h4>
          </div>

          {/* Structured Parameters Grid */}
          <div className="space-y-2.5 my-auto py-2 text-xs">
            {/* Tuition */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15 flex items-center justify-between">
              <span className="text-[#2D1810]/70 font-bold">{t.card.tuitionPerYear || t.card.tuitionLabel}:</span>
              <span className="font-black text-[#8B0000]">
                {university.tuition.text}
              </span>
            </div>

            {/* Languages */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15 flex items-center justify-between">
              <span className="text-[#2D1810]/70 font-bold">{t.card.teachingLang || 'Язык обучения:'}</span>
              <span className="font-extrabold text-[#2D1810]">
                {university.languageReq.ielts
                  ? `${currentLang === 'en' ? 'English' : 'Английский'} (IELTS ${university.languageReq.ielts})`
                  : (currentLang === 'en' ? 'National / English' : 'Национальный / EN')}
              </span>
            </div>

            {/* Scholarships */}
            <div className="p-2.5 rounded-xl bg-[#8B0000]/10 border border-[#8B0000]/25">
              <span className="text-[10px] uppercase font-extrabold text-[#8B0000] flex items-center gap-1 mb-0.5">
                <Sparkles className="w-3 h-3 text-[#8B0000]" />
                {t.card.scholarshipsAndGrants || 'Стипендии и гранты:'}
              </span>
              <span className="font-extrabold text-[#2D1810] block line-clamp-1">
                {university.scholarship.name}
              </span>
              <span className="text-[11px] text-[#8B0000] font-bold">
                {university.scholarship.coverage}
              </span>
            </div>

            {/* Admission requirements snippet */}
            <div className="p-2.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15">
              <span className="text-[10px] uppercase font-extrabold text-[#2D1810]/70 flex items-center gap-1 mb-0.5">
                <CheckCircle2 className="w-3 h-3 text-[#8B0000]" />
                {t.card.requirementsDoc}
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
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold text-[#8B0000] bg-[#8B0000]/10 hover:bg-[#8B0000]/20 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{t.card.flipFront}</span>
            </button>

            <button
              onClick={() => onOpenDetails(university)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{t.card.detailsBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
