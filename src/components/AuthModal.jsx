import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  User,
  Mail,
  Calendar,
  GraduationCap,
  CheckCircle2,
  Clock,
  LogOut,
  Sparkles,
  ShieldCheck,
  ShieldAlert,
  Printer,
  Award,
  ChevronRight,
  Building2,
  FileText
} from 'lucide-react';
import { universities } from '../data/universities';

export default function AuthModal({
  isOpen,
  onClose,
  user,
  onLogin,
  onLogout,
  favoritesCount = 0,
  favorites = [],
  onOpenLegal
}) {
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    intakeYear: user ? user.intakeYear : '2026/2027',
    targetDegree: user ? user.targetDegree : 'bachelor'
  });
  const [agreedToPolicy, setAgreedToPolicy] = useState(true);
  const [showDeleteInfo, setShowDeleteInfo] = useState(false);

  // Client-side interactive Dossier Checklist (No file uploads, 100% safe & private self-assessment)
  const defaultDossier = [
    { id: 'apostille', name: 'Апостиль на диплом / аттестат', status: 'done', desc: 'Оригинал с государственным штампом' },
    { id: 'translation', name: 'Нотариальный / присяжный перевод', status: 'in_progress', desc: 'Перевод на язык страны обучения' },
    { id: 'language', name: 'Языковой сертификат (IELTS / B2 / Duolingo)', status: 'in_progress', desc: 'Подтверждение уровня языка' },
    { id: 'europass_cv', name: 'Академическое резюме CV Europass', status: 'not_started', desc: 'Европейский формат академического CV' },
    { id: 'sop', name: 'Мотивационное письмо (SOP)', status: 'not_started', desc: 'Академические цели и обоснование выбора' },
    { id: 'finance', name: 'Фингарантии / Стипендия DSU', status: 'not_started', desc: 'Справка о доходах или блокированный счет' }
  ];

  const [dossier, setDossier] = useState(() => {
    try {
      const saved = localStorage.getItem('euro_dossier_status');
      return saved ? JSON.parse(saved) : defaultDossier;
    } catch {
      return defaultDossier;
    }
  });

  // Cycle status on click: not_started -> in_progress -> done -> not_started
  const handleToggleDocStatus = (docId) => {
    setDossier((prev) => {
      const updated = prev.map((item) => {
        if (item.id === docId) {
          const nextStatus =
            item.status === 'not_started'
              ? 'in_progress'
              : item.status === 'in_progress'
              ? 'done'
              : 'not_started';
          return { ...item, status: nextStatus };
        }
        return item;
      });
      try {
        localStorage.setItem('euro_dossier_status', JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  // Profile Readiness Score (0 - 100%)
  const readinessScore = useMemo(() => {
    let score = 0;
    dossier.forEach((d) => {
      if (d.status === 'done') score += 15;
      else if (d.status === 'in_progress') score += 7;
    });
    if (favoritesCount > 0) score += 10;
    return Math.min(100, Math.max(10, score));
  }, [dossier, favoritesCount]);

  // Selected favorites objects
  const favoriteUniversities = useMemo(() => {
    return universities.filter((u) => (favorites || []).includes(u.id));
  }, [favorites]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !agreedToPolicy) return;

    const userData = {
      name: formData.name,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '')}@student.eu`,
      intakeYear: formData.intakeYear,
      targetDegree: formData.targetDegree,
      registeredAt: new Date().toLocaleDateString()
    };

    onLogin(userData);
  };

  const degreeLabels = {
    bachelor: 'Бакалавриат (Bachelor / Undergrad • 3–4 года)',
    master: 'Магистратура (Master / Grad • 1–2 года)',
    phd: 'Аспирантура / PhD (Докторантура • грант 1 400 – 2 200 €/мес)'
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'done':
        return { label: 'Готово', bg: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
      case 'in_progress':
        return { label: 'В процессе', bg: 'bg-amber-100 text-amber-800 border-amber-300' };
      default:
        return { label: 'Не начато', bg: 'bg-stone-100 text-stone-600 border-stone-200' };
    }
  };

  const handlePrintRoadmap = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn print:p-0 print:bg-white print:fixed print:inset-0">
      <div
        className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 overflow-hidden my-3 sm:my-6 text-left print:shadow-none print:border-none print:max-w-none print:bg-white print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#8B0000]/15 bg-[#EFE0CD]/50 print:bg-white print:border-b-2 print:border-black">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-black text-lg sm:text-xl shadow-xs">
              {user ? user.name.charAt(0).toUpperCase() : <Sparkles className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-[#8B0000] tracking-tight">
                  {user ? user.name : 'Личный кабинет абитуриента'}
                </h2>
                {user && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#8B0000]/10 text-[#8B0000]">
                    Интейк {user.intakeYear}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#2D1810]/70 font-medium">
                {user ? user.email : 'Интерактивный центр управления поступлением в Европу'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#8B0000] hover:bg-[#8B0000]/10 transition-colors print:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6 print:max-h-none print:overflow-visible">
          {user ? (
            /* Logged-in Dashboard Mission Control */
            <>
              {/* Section 1: Readiness Score & Summary */}
              <div className="bg-white rounded-2xl p-5 border border-[#8B0000]/15 shadow-2xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#8B0000] block mb-0.5">
                      Индекс готовности досье к подаче:
                    </span>
                    <h3 className="text-base font-extrabold text-[#2D1810]">
                      {readinessScore >= 80
                        ? '🔥 Высокая готовность — можно подавать заявки!'
                        : readinessScore >= 50
                        ? '⚡ Досье формируется — завершите ключевые шаги'
                        : '🌱 Начальный этап — подготовьте апостиль и язык'}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1 self-start sm:self-auto bg-[#EFE0CD] px-3.5 py-1.5 rounded-2xl border border-[#8B0000]/20">
                    <span className="text-2xl font-black text-[#8B0000]">{readinessScore}%</span>
                    <span className="text-xs text-[#2D1810]/60 font-bold">/ 100%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#EFE0CD] h-2.5 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-[#8B0000] h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${readinessScore}%` }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#2D1810]/75 pt-2 border-t border-[#8B0000]/10">
                  <span className="font-semibold">
                    Ступень:{' '}
                    <strong className="text-[#8B0000] font-black">
                      {user.targetDegree === 'phd'
                        ? 'Аспирантура (PhD)'
                        : user.targetDegree === 'master'
                        ? 'Магистратура'
                        : 'Бакалавриат'}
                    </strong>
                  </span>
                  <span className="font-semibold">
                    ВУЗов в избранном: <strong className="text-[#8B0000] font-black">{favoritesCount}</strong>
                  </span>
                </div>
              </div>

              {/* Section 2: Interactive Dossier Checklist (Self-Assessment, No document uploads) */}
              <div className="bg-white rounded-2xl p-5 border border-[#8B0000]/15 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B0000]" />
                    <h4 className="text-sm font-black text-[#2D1810]">
                      Интерактивный трекер 6 документов (Самоконтроль)
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#2D1810]/60 font-medium">
                    Нажимайте для смены статуса
                  </span>
                </div>

                <p className="text-[11px] text-[#2D1810]/70 mb-3 leading-relaxed">
                  Мы не загружаем и не храним ваши личные файлы. Отмечайте статус готовности документов кликом, чтобы контролировать прогресс поступления.
                </p>

                <div className="space-y-2">
                  {dossier.map((doc) => {
                    const badge = getStatusBadge(doc.status);
                    return (
                      <div
                        key={doc.id}
                        onClick={() => handleToggleDocStatus(doc.id)}
                        className="p-3 rounded-xl border border-[#8B0000]/15 hover:border-[#8B0000] bg-[#FAF5EE]/50 hover:bg-[#FAF5EE] transition-all flex items-center justify-between gap-3 cursor-pointer group"
                      >
                        <div className="space-y-0.5">
                          <span className="font-bold text-xs text-[#2D1810] block group-hover:text-[#8B0000] transition-colors">
                            {doc.name}
                          </span>
                          <span className="text-[10px] text-[#2D1810]/60 block">{doc.desc}</span>
                        </div>

                        <span
                          className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0 transition-all ${badge.bg}`}
                        >
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Deadlines & Saved Universities Countdown */}
              <div className="bg-white rounded-2xl p-5 border border-[#8B0000]/15 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8B0000]" />
                    <h4 className="text-sm font-black text-[#2D1810]">
                      Дедлайны подачи в выбранные университеты
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#8B0000] font-bold">
                    Интейк 2026/2027
                  </span>
                </div>

                {favoriteUniversities.length > 0 ? (
                  <div className="space-y-2">
                    {favoriteUniversities.map((uni) => (
                      <div
                        key={uni.id}
                        className="p-3 rounded-xl bg-[#FAF5EE] border border-[#8B0000]/15 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{uni.flag}</span>
                          <div>
                            <span className="font-extrabold text-[#8B0000] block">{uni.name}</span>
                            <span className="text-[11px] text-[#2D1810]/70">
                              {uni.city}, {uni.countryName}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[11px] font-black text-[#2D1810] block">
                            {uni.deadline}
                          </span>
                          <span className="text-[10px] text-emerald-700 font-bold">
                            Прием открыт
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#8B0000]/15 text-xs text-[#2D1810]/75 space-y-1">
                    <p className="font-bold text-[#8B0000]">В вашем списке пока нет университетов.</p>
                    <p className="text-[11px]">
                      Ориентировочные дедлайны европейских ВУЗов: <strong>15 апреля</strong> (ранняя подача) и <strong>15 июля</strong> (основной поток). Добавляйте ВУЗы в избранное сердечком, чтобы отслеживать точные даты.
                    </p>
                  </div>
                )}
              </div>

              {/* Section 4: 1-Click Print / PDF Export & Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 print:hidden">
                <button
                  type="button"
                  onClick={handlePrintRoadmap}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Печать дорожной карты (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#8B0000]/10 hover:bg-[#8B0000]/20 text-[#8B0000] rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Выйти из профиля</span>
                </button>
              </div>

              {/* Right to Erasure / Support Request (152-ФЗ & GDPR compliance) */}
              <div className="pt-3 border-t border-[#8B0000]/15 print:hidden">
                <button
                  type="button"
                  onClick={() => setShowDeleteInfo(!showDeleteInfo)}
                  className="text-[11px] font-bold text-[#8B0000]/80 hover:text-[#8B0000] flex items-center justify-between w-full py-1.5 px-2 rounded-xl hover:bg-[#8B0000]/5 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#8B0000]" />
                    <span>Удаление данных (по запросу в поддержку)</span>
                  </span>
                  <span className="text-[10px]">{showDeleteInfo ? '▲' : '▼'}</span>
                </button>

                {showDeleteInfo && (
                  <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-950 space-y-2 animate-fadeIn text-left">
                    <p className="leading-relaxed">
                      Для защиты ваших академических досье и результатов отбора удаление персональных данных производится оператором по официальному запросу (ст. 14, 21 152-ФЗ и ст. 17 GDPR).
                    </p>
                    <a
                      href={`mailto:privacy@europath.app?subject=${encodeURIComponent(`Запрос на отзыв согласия и удаление данных: ${user.name} (${user.email})`)}`}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#8B0000] hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Направить запрос в поддержку (privacy@europath.app) →</span>
                    </a>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Registration Form View with Degree Selection including PhD / Аспирантура */
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Личный кабинет абитуриента
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] tracking-tight mb-1">
                Создать профиль поступления
              </h3>
              <p className="text-xs sm:text-sm text-[#2D1810]/75 mb-6 font-medium">
                Отслеживайте индекс готовности досье, дедлайны интейков и сравнивайте целевые университеты без сбора конфиденциальных документов.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#8B0000] mb-1">
                    Ваше имя или никнейм:
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-[#8B0000]/60" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Алексей"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#8B0000]/25 text-xs sm:text-sm font-semibold focus:outline-hidden focus:border-[#8B0000] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8B0000] mb-1">
                    Электронная почта (для сохранения дорожной карты):
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#8B0000]/60" />
                    <input
                      type="email"
                      placeholder="alex@student.eu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#8B0000]/25 text-xs sm:text-sm font-semibold focus:outline-hidden focus:border-[#8B0000] transition-colors"
                    />
                  </div>
                </div>

                {/* Degree Selector with Bachelor, Master and PhD / Аспирантура */}
                <div>
                  <label className="block text-xs font-bold text-[#8B0000] mb-1">
                    Целевая ступень высшего образования:
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        id: 'bachelor',
                        title: 'Бакалавриат (Bachelor / Undergrad)',
                        sub: '3–4 года • Первое высшее образование в Европе'
                      },
                      {
                        id: 'master',
                        title: 'Магистратура (Master / Grad)',
                        sub: '1–2 года • Углубленная специализация и стажировки'
                      },
                      {
                        id: 'phd',
                        title: 'Аспирантура / Докторантура (PhD / Doctorate)',
                        sub: '3–4 года • Научная позиция со стипендией 1 400 – 2 200 €/мес'
                      }
                    ].map((deg) => (
                      <label
                        key={deg.id}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          formData.targetDegree === deg.id
                            ? 'bg-white border-[#8B0000] shadow-xs'
                            : 'bg-white/50 border-[#8B0000]/15 hover:bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name="targetDegree"
                          value={deg.id}
                          checked={formData.targetDegree === deg.id}
                          onChange={(e) => setFormData({ ...formData, targetDegree: e.target.value })}
                          className="mt-0.5 accent-[#8B0000]"
                        />
                        <div>
                          <span className="font-extrabold text-xs text-[#2D1810] block">{deg.title}</span>
                          <span className="text-[11px] text-[#2D1810]/70 font-medium">{deg.sub}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#8B0000] mb-1">
                    Планируемый год начала учебы:
                  </label>
                  <select
                    value={formData.intakeYear}
                    onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-[#8B0000]/25 text-xs sm:text-sm font-semibold focus:outline-hidden focus:border-[#8B0000] transition-colors"
                  >
                    <option value="2026/2027">Осень 2026 / Весна 2027</option>
                    <option value="2027/2028">2027 / 2028 год</option>
                    <option value="2025/2026">Ближайший набор (2025/2026)</option>
                  </select>
                </div>

                {/* Legal Consent 152-ФЗ / GDPR */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#2D1810]/80">
                    <input
                      type="checkbox"
                      checked={agreedToPolicy}
                      onChange={(e) => setAgreedToPolicy(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded-sm border-[#8B0000]/40 text-[#8B0000] focus:ring-[#8B0000] accent-[#8B0000]"
                    />
                    <span className="font-medium text-[11px] leading-tight">
                      Согласен с{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal && onOpenLegal('privacy')}
                        className="text-[#8B0000] underline font-bold hover:text-[#630000]"
                      >
                        Политикой конфиденциальности
                      </button>{' '}
                      и условиями безопасного хранения данных (16+).
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.name.trim() || !agreedToPolicy}
                  className="w-full py-3 bg-[#8B0000] hover:bg-[#630000] disabled:bg-[#8B0000]/40 text-[#EFE0CD] font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer mt-4"
                >
                  Войти в кабинет абитуриента
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
