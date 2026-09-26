import React, { useState } from 'react';
import {
  X,
  Heart,
  Scale,
  Trash2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  Euro
} from 'lucide-react';
import { universities } from '../data/universities';

export default function FavoritesModal({
  isOpen,
  onClose,
  favorites,
  onToggleFavorite,
  onSelectUniversity
}) {
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'compare'

  if (!isOpen) return null;

  const favoriteUniversities = universities.filter((u) => favorites.includes(u.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Избранные университеты
              </h2>
              <p className="text-xs text-slate-500">
                Сохранено программ: {favoriteUniversities.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {favoriteUniversities.length >= 2 && (
              <button
                onClick={() => setViewMode(viewMode === 'list' ? 'compare' : 'list')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'compare'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>{viewMode === 'compare' ? 'Вид списком' : 'Сравнить программы'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto">
          {favoriteUniversities.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                В вашем списке пока пусто
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-6">
                Нажимайте на иконку сердечка на карточках университетов в каталоге, чтобы сохранить их сюда и сравнить между собой.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                Перейти в каталог
              </button>
            </div>
          ) : viewMode === 'compare' ? (
            /* Comparison Table View */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-3 font-bold text-slate-400 uppercase tracking-wider text-[11px] w-1/4">
                      Критерий
                    </th>
                    {favoriteUniversities.map((u) => (
                      <th key={u.id} className="py-3 px-3 font-bold text-slate-900 w-1/3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span>{u.flag}</span>
                          <span className="font-extrabold">{u.name}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block font-normal">
                          {u.city}, {u.countryName}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Рейтинг QS:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-bold text-blue-600">
                        {u.qsRank}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Обучение в год:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-bold text-slate-900">
                        {u.tuition.text}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Стипендия:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3">
                        {u.scholarship.available ? (
                          <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                            {u.scholarship.name}
                          </span>
                        ) : (
                          <span className="text-slate-400">Только базовые</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Языковой экзамен:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 text-slate-700">
                        IELTS {u.languageReq.ielts} / TOEFL {u.languageReq.toefl}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Расходы в месяц:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-bold text-amber-700">
                        ~{u.livingCostMonth} € / мес
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Дедлайн подачи:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 text-slate-800 font-medium">
                        {u.deadline}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-slate-500">Действие:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectUniversity(u);
                          }}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors"
                        >
                          Подробнее
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {favoriteUniversities.map((u) => (
                <div
                  key={u.id}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-blue-300 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={u.photo}
                      alt={u.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base">{u.flag}</span>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {u.name}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500">
                        {u.city}, {u.countryName} • {u.qsRank}
                      </p>
                      <div className="flex gap-2 mt-1.5 text-[11px] font-semibold">
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {u.tuition.text}
                        </span>
                        <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          IELTS {u.languageReq.ielts}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => onToggleFavorite(u.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                      title="Удалить из избранного"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectUniversity(u);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl text-xs font-bold transition-all"
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
