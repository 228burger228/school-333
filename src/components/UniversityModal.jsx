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
  Building,
  GraduationCap,
  FileText,
  DollarSign
} from 'lucide-react';

export default function UniversityModal({
  university,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite
}) {
  const [activeTab, setActiveTab] = useState('programs');

  if (!isOpen || !university) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner with Campus Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
          <img
            src={university.photo}
            alt={university.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Favorite Heart Button */}
          <button
            onClick={() => onToggleFavorite(university.id)}
            className={`absolute top-4 right-16 p-2 rounded-full backdrop-blur-md transition-all ${
              isFavorite
                ? 'bg-rose-500 text-white shadow-md'
                : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              {university.qsRank}
            </span>
          </div>

          {/* Title & Location at bottom of banner */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 mb-1">
              <span>{university.flag}</span>
              <span>
                {university.countryName}, {university.city}
              </span>
              <span>•</span>
              <span>{university.landmarkSymbol}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              {university.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 italic">
              {university.localName}
            </p>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex border-b border-slate-200 bg-slate-50/70 px-4 sm:px-6 overflow-x-auto text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('programs')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'programs'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Программы & Обучение
          </button>
          <button
            onClick={() => setActiveTab('admission')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'admission'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Требования & Документы
          </button>
          <button
            onClick={() => setActiveTab('scholarships')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'scholarships'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Стипендии & Финансы
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'living'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Стоимость жизни
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-5 sm:p-6 max-h-[55vh] overflow-y-auto space-y-5">
          {/* TAB 1: Programs & Overview */}
          {activeTab === 'programs' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Об университете
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {university.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Популярные программы обучения
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {university.keyPrograms.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/40 hover:border-blue-200 transition-colors"
                    >
                      <span className="text-xs font-bold text-blue-600 block mb-0.5">
                        {prog.degree} • {prog.duration}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">
                        {prog.name}
                      </h5>
                      <span className="inline-block text-[11px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        Язык: {prog.lang}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Admission & Checklist */}
          {activeTab === 'admission' && (
            <div className="space-y-5">
              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  Языковые требования
                </span>
                <p className="text-sm text-blue-900 font-medium">
                  {university.languageReq.examDescription}
                </p>
                <div className="mt-2 flex gap-3 text-xs font-bold text-blue-700">
                  <span>IELTS: {university.languageReq.ielts}</span>
                  <span>TOEFL: {university.languageReq.toefl}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Чек-лист документов для поступления
                </h4>
                <div className="space-y-2">
                  {university.admissionChecklist.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Срок подачи документов:</strong> {university.deadline}
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: Scholarships & Tuition */}
          {activeTab === 'scholarships' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Стоимость обучения
                </span>
                <p className="text-lg font-bold text-slate-900">
                  {university.tuition.text}
                </p>
                {university.tuition.isFree && (
                  <span className="inline-block mt-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    ✓ Доступно бесплатное высшее образование
                  </span>
                )}
              </div>

              {university.scholarship.available && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>{university.scholarship.name}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 block mb-2">
                    Покрытие: {university.scholarship.coverage}
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                    {university.scholarship.description}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Living Expenses */}
          {activeTab === 'living' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Ориентировочные расходы в месяц:
                </span>
                <span className="text-lg font-black text-blue-600">
                  ~{university.livingCostMonth} € / мес
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">Жилье / Комната</span>
                  <span className="font-bold text-slate-800">
                    {university.livingCostDetails.housing}
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">Питание</span>
                  <span className="font-bold text-slate-800">
                    {university.livingCostDetails.food}
                  </span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                  <span className="text-slate-400 block font-semibold mb-1">Студ. транспорт</span>
                  <span className="font-bold text-slate-800">
                    {university.livingCostDetails.transport}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onToggleFavorite(university.id)}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              isFavorite
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            <span>{isFavorite ? 'В избранном' : 'Сохранить в избранное'}</span>
          </button>

          <a
            href={university.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
          >
            <span>Официальный сайт университета</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
