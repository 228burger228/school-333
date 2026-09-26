import React from 'react';
import { Search, RotateCcw, Filter, Check, Euro, Sparkles } from 'lucide-react';
import { countries } from '../data/countries';
import { fieldCategories } from '../data/universities';

export default function UniversityFilter({
  filters,
  setFilters,
  onReset,
  totalFound
}) {
  const handleCountryToggle = (countryId) => {
    setFilters((prev) => {
      const exists = prev.selectedCountries.includes(countryId);
      const newCountries = exists
        ? prev.selectedCountries.filter((c) => c !== countryId)
        : [...prev.selectedCountries, countryId];
      return { ...prev, selectedCountries: newCountries };
    });
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs mb-8 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            Поиск и фильтры программ
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Найдено подходящих вариантов:{' '}
            <span className="font-bold text-blue-600">{totalFound}</span>
          </p>
        </div>

        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Сбросить фильтры
        </button>
      </div>

      {/* Main Search Input */}
      <div className="my-5 relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={filters.searchQuery}
          onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
          placeholder="Поиск по названию университета, городу или специальности..."
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
      </div>

      {/* Country Selector Pills */}
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Страна обучения:
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => setFilters((prev) => ({ ...prev, selectedCountries: [] }))}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filters.selectedCountries.length === 0
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Все страны
          </button>
          {countries.map((c) => {
            const isSelected = filters.selectedCountries.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => handleCountryToggle(c.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs scale-102'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Direction / Field of Study */}
      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Направление обучения:
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {fieldCategories.map((f) => {
            const isSelected = filters.selectedField === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilters((prev) => ({ ...prev, selectedField: f.id }))}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {f.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Toggle Badges and Degree Level */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
        {/* Degree Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Уровень:
          </label>
          <select
            value={filters.degree}
            onChange={(e) => setFilters((prev) => ({ ...prev, degree: e.target.value }))}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Бакалавриат и Магистратура</option>
            <option value="bachelor">Только Бакалавриат</option>
            <option value="master">Только Магистратура</option>
          </select>
        </div>

        {/* Free Tuition Only */}
        <div className="flex items-center">
          <label className="inline-flex items-center gap-2 cursor-pointer mt-4 sm:mt-5">
            <input
              type="checkbox"
              checked={filters.onlyFree}
              onChange={(e) => setFilters((prev) => ({ ...prev, onlyFree: e.target.checked }))}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span className="text-xs font-semibold text-slate-700">
              Бесплатное обучение (0€)
            </span>
          </label>
        </div>

        {/* Full Scholarship Only */}
        <div className="flex items-center">
          <label className="inline-flex items-center gap-2 cursor-pointer mt-4 sm:mt-5">
            <input
              type="checkbox"
              checked={filters.onlyScholarships}
              onChange={(e) => setFilters((prev) => ({ ...prev, onlyScholarships: e.target.checked }))}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span className="text-xs font-semibold text-slate-700">
              Стипендии (DSU, DAAD и др.)
            </span>
          </label>
        </div>

        {/* Sort Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Сортировка:
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rank">По мировому рейтингу (QS)</option>
            <option value="tuitionAsc">По стоимости учебы (сначала доступные)</option>
            <option value="costAsc">По стоимости жизни в месяц</option>
          </select>
        </div>
      </div>
    </div>
  );
}
