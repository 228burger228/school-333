import React, { useMemo } from 'react';
import UniversityFlipCard from './UniversityFlipCard';
import { countries } from '../data/countries';
import { studyDirections } from '../data/directions';
import {
  ArrowLeft,
  Filter,
  RotateCcw,
  Search,
  Sparkles,
  Check,
  Globe,
  Euro
} from 'lucide-react';

export default function UniversityListScreen({
  universities,
  filters,
  setFilters,
  onResetFilters,
  selectedCountry,
  selectedDirection,
  onBackToDirections,
  favorites,
  onToggleFavorite,
  onOpenDetails
}) {
  const handleCountryChange = (cId) => {
    setFilters((prev) => ({
      ...prev,
      countryId: cId
    }));
  };

  const handleDirectionChange = (dId) => {
    setFilters((prev) => ({
      ...prev,
      directionId: dId
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left animate-fadeIn">
      {/* Top Back & Step Indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#8B0000]/15">
        <button
          onClick={onBackToDirections}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B0000]/10 hover:bg-[#8B0000]/15 text-[#8B0000] text-xs sm:text-sm font-bold transition-all border border-[#8B0000]/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>К выбору направлений</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {selectedCountry && (
            <span className="px-3 py-1 rounded-full bg-[#EFE0CD] border border-[#8B0000]/25 text-[#8B0000] font-black">
              {selectedCountry.flag} {selectedCountry.name}
            </span>
          )}
          {selectedDirection && (
            <span className="px-3 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] font-bold">
              {selectedDirection.icon} {selectedDirection.shortTitle}
            </span>
          )}
          <span className="text-[#2D1810]/70 font-semibold ml-1">
            Найдено: <strong>{universities.length}</strong> ВУЗов
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-black text-[#8B0000] tracking-tight">
          Подходящие университеты
        </h1>
        <p className="text-xs sm:text-sm text-[#2D1810]/80 mt-1">
          Нажмите на карточку, чтобы перевернуть её и посмотреть стоимость, стипендии и условия поступления.
        </p>
      </div>

      {/* Simultaneous Live Filters Panel */}
      <div className="bg-[#FAF5EE] rounded-3xl p-5 sm:p-6 border-2 border-[#8B0000]/20 shadow-sm mb-8">
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#8B0000]/10">
          <div className="flex items-center gap-2 text-sm font-black text-[#8B0000]">
            <Filter className="w-4 h-4" />
            <span>Фильтры программ</span>
          </div>

          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#8B0000] hover:bg-[#8B0000]/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Сбросить все</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 text-[#8B0000]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Поиск по названию университета, городу или программе..."
            value={filters.searchQuery}
            onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
            className="w-full pl-10 pr-4 py-2.5 bg-[#EFE0CD]/60 border border-[#8B0000]/20 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:bg-white text-[#2D1810]"
          />
        </div>

        {/* Filter Dropdowns & Checkboxes in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Country Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B0000] mb-1">
              Страна:
            </label>
            <select
              value={filters.countryId}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#8B0000]/20 rounded-xl text-xs font-bold text-[#2D1810] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
            >
              <option value="all">Все 13 стран Европы</option>
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Direction Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B0000] mb-1">
              Направление:
            </label>
            <select
              value={filters.directionId}
              onChange={(e) => handleDirectionChange(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#8B0000]/20 rounded-xl text-xs font-bold text-[#2D1810] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
            >
              <option value="all">Все направления</option>
              {studyDirections.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.icon} {d.shortTitle}
                </option>
              ))}
            </select>
          </div>

          {/* Tuition Budget */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B0000] mb-1">
              Стоимость обучения:
            </label>
            <select
              value={filters.tuitionRange}
              onChange={(e) => setFilters((prev) => ({ ...prev, tuitionRange: e.target.value }))}
              className="w-full px-3 py-2 bg-white border border-[#8B0000]/20 rounded-xl text-xs font-bold text-[#2D1810] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
            >
              <option value="all">Любая стоимость</option>
              <option value="free">Бесплатное обучение (0 €)</option>
              <option value="low">До 3 000 € / год</option>
              <option value="mid">От 3 000 € до 8 000 € / год</option>
            </select>
          </div>

          {/* Language exam & options */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B0000] mb-1">
              Экзамен / Английский:
            </label>
            <select
              value={filters.examRequirement}
              onChange={(e) => setFilters((prev) => ({ ...prev, examRequirement: e.target.value }))}
              className="w-full px-3 py-2 bg-white border border-[#8B0000]/20 rounded-xl text-xs font-bold text-[#2D1810] focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
            >
              <option value="all">Все варианты</option>
              <option value="noExam">Без жесткого IELTS / с нуля</option>
              <option value="englishOnly">Англоязычные программы</option>
            </select>
          </div>
        </div>

        {/* Checkboxes Row */}
        <div className="mt-4 pt-3 border-t border-[#8B0000]/10 flex flex-wrap gap-4 text-xs font-bold text-[#2D1810]">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.onlyScholarships}
              onChange={(e) => setFilters((prev) => ({ ...prev, onlyScholarships: e.target.checked }))}
              className="w-4 h-4 rounded text-[#8B0000] focus:ring-[#8B0000] border-[#8B0000]/30"
            />
            <span>Только с гарантированными стипендиями (DSU, DAAD, Eiffel)</span>
          </label>

          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filters.onlyFree}
              onChange={(e) => setFilters((prev) => ({ ...prev, onlyFree: e.target.checked }))}
              className="w-4 h-4 rounded text-[#8B0000] focus:ring-[#8B0000] border-[#8B0000]/30"
            />
            <span>Только 0 € за обучение в госвузах</span>
          </label>
        </div>
      </div>

      {/* University 3D Flip Cards Grid */}
      {universities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <UniversityFlipCard
              key={uni.id}
              university={uni}
              isFavorite={favorites.includes(uni.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-[#FAF5EE] rounded-3xl border-2 border-[#8B0000]/20 p-12 text-center max-w-lg mx-auto my-8">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-xl font-black text-[#8B0000] mb-2">
            По заданным фильтрам ничего не найдено
          </h3>
          <p className="text-xs sm:text-sm text-[#2D1810]/70 mb-6">
            Попробуйте выбрать «Все 13 стран Европы» или снять галочку бесплатного обучения.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs sm:text-sm font-bold shadow-md transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}
