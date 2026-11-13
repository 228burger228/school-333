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
            /* Comparison Table View (Side-by-Side Matrix) */
            <div className="overflow-x-auto -mx-2 sm:mx-0 rounded-2xl border border-[#8B0000]/15 bg-white/70">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-[#8B0000]/20 bg-[#EFE0CD]/60">
                    <th className="py-3.5 px-3 sm:px-4 font-bold text-[#8B0000] uppercase tracking-wider text-[11px] w-44 sticky left-0 bg-[#EFE0CD] z-20 border-r border-[#8B0000]/15">
                      Критерий
                    </th>
                    {favoriteUniversities.map((u) => (
                      <th key={u.id} className="py-3.5 px-3 sm:px-4 font-bold text-[#2D1810] min-w-[200px] align-top">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-base shrink-0">{u.flag}</span>
                            <span className="font-extrabold text-[#8B0000] line-clamp-1">{u.name}</span>
                          </div>
                          <button
                            onClick={() => onToggleFavorite(u.id)}
                            className="text-[#8B0000]/50 hover:text-[#8B0000] p-1 rounded-md hover:bg-[#8B0000]/10 transition-colors shrink-0"
                            title="Убрать из сравнения"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-[#2D1810]/70 block font-medium">
                          {u.city}, {u.countryName}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8B0000]/10 text-xs">
                  {/* Рейтинг QS */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Рейтинг QS:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4 font-bold text-[#2D1810]">
                        <span className="inline-block bg-[#EFE0CD] px-2 py-0.5 rounded-md font-extrabold text-[#8B0000]">
                          {u.qsRank}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Стоимость обучения */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Обучение в год:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4">
                        {u.tuition.isFree ? (
                          <div className="space-y-0.5">
                            <span className="font-black text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded-md inline-block">
                              0 € (Бесплатно)
                            </span>
                            <span className="block text-[11px] text-[#2D1810]/70">Государственный ВУЗ</span>
                          </div>
                        ) : (
                          <div className="space-y-0.5">
                            <span className="font-black text-[#8B0000]">{u.tuition.text}</span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Стипендии и гранты */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Стипендия:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4">
                        {u.scholarship.available ? (
                          <div className="space-y-1">
                            <span className="font-bold text-[#8B0000] bg-[#8B0000]/10 px-2 py-0.5 rounded-md inline-block text-[11px]">
                              {u.scholarship.name}
                            </span>
                            {u.scholarship.coverage && (
                              <p className="text-[11px] text-[#2D1810]/75 leading-tight">
                                {u.scholarship.coverage}
                              </p>
                            )}
                          </div>
                        ) : (
                          <span className="text-[#2D1810]/60 italic">Базовые гранты</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Языковые требования */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Языковой порог:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4">
                        <div className="font-bold text-[#2D1810]">
                          IELTS {u.languageReq.ielts} / TOEFL {u.languageReq.toefl}
                        </div>
                        {u.languageReq.noExamOption && (
                          <span className="text-[10px] text-[#8B0000] font-semibold bg-[#8B0000]/10 px-1.5 py-0.5 rounded mt-1 inline-block">
                            Возможна подача без теста
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Расходы на проживание */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Расходы на жизнь:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4">
                        <div className="font-extrabold text-[#2D1810]">
                          ~{u.livingCostMonth} € / мес
                        </div>
                        {u.livingCostDetails?.housing && (
                          <div className="text-[11px] text-[#2D1810]/70 mt-0.5">
                            Жилье: {u.livingCostDetails.housing}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Студенческая работа в ЕС */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Право на работу:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4 text-[#2D1810] font-medium">
                        <span className="inline-flex items-center gap-1 text-[11px]">
                          <span>до 20 ч / неделю (виза ЕС)</span>
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Дедлайн подачи */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Дедлайн подачи:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4 text-[#2D1810] font-semibold text-[11px]">
                        {u.deadline}
                      </td>
                    ))}
                  </tr>

                  {/* Ключевые программы */}
                  <tr className="hover:bg-[#EFE0CD]/20 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Популярные курсы:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3 px-3 sm:px-4 text-[#2D1810]/80 text-[11px] leading-tight">
                        {u.keyPrograms.slice(0, 2).map((p, idx) => (
                          <div key={idx} className="mb-1 truncate" title={p.name}>
                            • {p.name}
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  {/* Действие */}
                  <tr>
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-[#8B0000] sticky left-0 bg-[#FAF5EE] z-10 border-r border-[#8B0000]/15">
                      Действие:
                    </td>
                    {favoriteUniversities.map((u) => (
                      <td key={u.id} className="py-3.5 px-3 sm:px-4">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectUniversity(u);
                          }}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                        >
                          <span>Подробнее</span>
                          <ArrowRight className="w-3.5 h-3.5" />
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
