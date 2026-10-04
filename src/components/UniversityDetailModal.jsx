import React, { useState } from 'react';
import {
  X,
  Heart,
  ExternalLink,
  Award,
  Calendar,
  CheckCircle2,
  Euro,
  Sparkles,
  BookOpen,
  MapPin,
  Clock,
  Globe
} from 'lucide-react';

export default function UniversityDetailModal({
  university,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite
}) {
  const [activeTab, setActiveTab] = useState('programs');

  if (!isOpen || !university) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/30 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Campus Photo */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={university.photo}
            alt={university.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1810] via-black/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Favorite Button */}
          <button
            onClick={() => onToggleFavorite(university.id)}
            className={`absolute top-4 right-16 p-2 rounded-full backdrop-blur-md transition-all ${
              isFavorite
                ? 'bg-[#8B0000] text-[#EFE0CD] shadow-md'
                : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* QS Ranking Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-[#FAF5EE] text-[#8B0000] text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-md border border-[#8B0000]/20">
              <Award className="w-3.5 h-3.5 text-[#8B0000]" />
              {university.qsRank}
            </span>
          </div>

          {/* University Title & City on photo bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EFE0CD] mb-1">
              <span>{university.flag}</span>
              <span>
                {university.countryName}, {university.city}
              </span>
              <span>•</span>
              <span>{university.landmarkSymbol}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
              {university.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#EFE0CD]/90 italic">
              {university.localName}
            </p>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#8B0000]/15 bg-[#EFE0CD]/50 px-4 sm:px-6 overflow-x-auto text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('programs')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'programs'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            Программы обучения
          </button>
          <button
            onClick={() => setActiveTab('admission')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'admission'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            Требования & Документы
          </button>
          <button
            onClick={() => setActiveTab('scholarships')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'scholarships'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            Стипендии & Гранты
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'costs'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            Стоимость жизни
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-5 sm:p-6 max-h-[55vh] overflow-y-auto space-y-5 text-xs sm:text-sm text-[#2D1810]">
          {/* TAB 1: Programs & Overview */}
          {activeTab === 'programs' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-2">
                  Об университете
                </h4>
                <p className="text-xs sm:text-sm text-[#2D1810]/85 leading-relaxed">
                  {university.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-3">
                  Популярные программы обучения
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.keyPrograms.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border border-[#8B0000]/15 bg-[#EFE0CD]/40 hover:bg-[#EFE0CD] transition-colors"
                    >
                      <span className="text-[11px] font-bold text-[#8B0000] block mb-0.5">
                        {prog.degree} • {prog.duration}
                      </span>
                      <h5 className="text-sm font-black text-[#2D1810] mb-1">
                        {prog.name}
                      </h5>
                      <span className="inline-block text-[11px] bg-[#FAF5EE] text-[#8B0000] px-2 py-0.5 rounded-md font-semibold border border-[#8B0000]/15">
                        Язык: {prog.lang}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Admission & Documents */}
          {activeTab === 'admission' && (
            <div className="space-y-4">
              <div className="bg-[#EFE0CD] p-4 rounded-2xl border border-[#8B0000]/20">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000] block mb-1">
                  Языковые требования
                </span>
                <p className="text-xs sm:text-sm text-[#2D1810] font-medium">
                  {university.languageReq.examDescription}
                </p>
                <div className="mt-2 flex gap-3 text-xs font-black text-[#8B0000]">
                  <span>IELTS: {university.languageReq.ielts}</span>
                  <span>TOEFL: {university.languageReq.toefl}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-3">
                  Чек-лист документов для поступления
                </h4>
                <div className="space-y-2">
                  {university.admissionChecklist.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D1810]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-[#8B0000]/10 rounded-2xl border border-[#8B0000]/20 text-xs text-[#8B0000] font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B0000] shrink-0" />
                <span>
                  <strong>Срок подачи документов:</strong> {university.deadline}
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: Scholarships & Tuition */}
          {activeTab === 'scholarships' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#EFE0CD] border border-[#8B0000]/20">
                <span className="text-xs font-bold text-[#8B0000] uppercase tracking-wider block mb-1">
                  Стоимость обучения
                </span>
                <p className="text-lg font-black text-[#8B0000]">
                  {university.tuition.text}
                </p>
                {university.tuition.isFree && (
                  <span className="inline-block mt-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    ✓ Доступно бесплатное высшее образование
                  </span>
                )}
              </div>

              {university.scholarship.available && (
                <div className="p-4 rounded-2xl bg-[#8B0000]/10 border border-[#8B0000]/25">
                  <div className="flex items-center gap-2 text-[#8B0000] font-black text-sm mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>{university.scholarship.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#2D1810] block mb-2">
                    Покрытие: {university.scholarship.coverage}
                  </span>
                  <p className="text-xs sm:text-sm text-[#2D1810]/90 leading-relaxed">
                    {university.scholarship.description}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Living Costs */}
          {activeTab === 'costs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#EFE0CD] rounded-2xl border border-[#8B0000]/20">
                <span className="text-xs font-bold text-[#8B0000] uppercase">
                  Ориентировочные расходы в месяц:
                </span>
                <span className="text-lg font-black text-[#8B0000]">
                  ~{university.livingCostMonth} € / мес
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    Жилье / Общежитие
                  </span>
                  <span className="font-bold text-[#2D1810]">
                    {university.livingCostDetails.housing}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    Питание
                  </span>
                  <span className="font-bold text-[#2D1810]">
                    {university.livingCostDetails.food}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    Транспорт
                  </span>
                  <span className="font-bold text-[#2D1810]">
                    {university.livingCostDetails.transport}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Action Buttons */}
        <div className="p-4 sm:p-6 bg-[#EFE0CD]/50 border-t border-[#8B0000]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onToggleFavorite(university.id)}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
              isFavorite
                ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000]'
                : 'bg-white border-[#8B0000]/25 text-[#8B0000] hover:bg-[#FAF5EE]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            <span>{isFavorite ? 'В избранном' : 'Сохранить в избранное'}</span>
          </button>

          <a
            href={university.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-md transition-all"
          >
            <span>Официальный сайт университета</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
