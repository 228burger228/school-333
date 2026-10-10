import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const favoriteUniversities = universities.filter((u) => favorites.includes(u.id));

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 overflow-hidden my-3 sm:my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#8B0000]/15 bg-[#EFE0CD]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000]/10 border border-[#8B0000]/20 flex items-center justify-center text-[#8B0000]">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#8B0000] tracking-tight">
                Избранные университеты
              </h2>
              <p className="text-xs text-[#2D1810]/70 font-medium">
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
                    ? 'bg-[#8B0000] text-[#EFE0CD] shadow-xs'
                    : 'bg-white border border-[#8B0000]/20 text-[#8B0000] hover:bg-[#FAF5EE]'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>{viewMode === 'compare' ? 'Вид списком' : 'Сравнить программы'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#8B0000] hover:bg-[#8B0000]/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 max-h-[65vh] overflow-y-auto">
          {favoriteUniversities.length === 0 ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EFE0CD] text-[#8B0000] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-[#8B0000] mb-1">
                В вашем списке пока пусто
              </h3>
              <p className="text-xs sm:text-sm text-[#2D1810]/70 max-w-sm mx-auto mb-6">
                Нажимайте на иконку сердечка на карточках университетов, чтобы сохранить их сюда и сравнить между собой.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
              >
                Перейти в каталог
              </button>
            </div>
          ) : viewMode === 'compare' ? (
            /* Comparison Table View */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#8B0000]/20">
                    <th className="py-3 px-3 font-bold text-[#8B0000] uppercase tracking-wider text-[11px] w-1/4">
                      Критерий
                    </th>
                    {favoriteUniversities.map((u) => (
                      <th key={u.id} className="py-3 px-3 font-bold text-[#2D1810] w-1/3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span>{u.flag}</span>
                          <span className="font-extrabold text-[#8B0000]">{u.name}</span>
                        </div>
                        <span className="text-[11px] text-[#2D1810]/60 block font-normal">
                          {u.city}, {u.countryName}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8B0000]/10">
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Рейтинг QS:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-bold text-[#2D1810]">
                        {u.qsRank}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Обучение в год:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-black text-[#8B0000]">
                        {u.tuition.text}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Стипендия:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3">
                        {u.scholarship.available ? (
                          <span className="font-bold text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded-md inline-block">
                            {u.scholarship.name}
                          </span>
                        ) : (
                          <span className="text-[#2D1810]/50">Базовые</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Языковой экзамен:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 text-[#2D1810]">
                        IELTS {u.languageReq.ielts} / TOEFL {u.languageReq.toefl}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Расходы в месяц:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 font-bold text-[#2D1810]">
                        ~{u.livingCostMonth} € / мес
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Дедлайн подачи:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 text-[#2D1810] font-medium">
                        {u.deadline}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#8B0000]">Действие:</td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectUniversity(u);
                          }}
                          className="px-3 py-1.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-lg text-xs font-bold transition-colors"
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
                  className="p-4 rounded-2xl border border-[#8B0000]/15 hover:border-[#8B0000] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all shadow-2xs"
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
                        <h4 className="font-black text-[#8B0000] text-sm sm:text-base">
                          {u.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#2D1810]/70">
                        {u.city}, {u.countryName} • {u.qsRank}
                      </p>
                      <div className="flex gap-2 mt-1.5 text-[11px] font-bold">
                        <span className="text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded-md">
                          {u.tuition.text}
                        </span>
                        <span className="text-[#2D1810] bg-[#EFE0CD] px-2 py-0.5 rounded-md">
                          IELTS {u.languageReq.ielts}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => onToggleFavorite(u.id)}
                      className="p-2 text-[#8B0000]/60 hover:text-[#8B0000] hover:bg-[#8B0000]/10 rounded-xl transition-colors"
                      title="Удалить из избранного"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectUniversity(u);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs font-black transition-all"
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
