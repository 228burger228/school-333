import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  Cookie,
  Mail,
  Lock,
  ExternalLink,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function LegalModal({
  isOpen,
  onClose,
  initialTab = 'privacy',
  currentLang = 'ru'
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const t = getTranslation(currentLang);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/25 overflow-hidden my-4 sm:my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8B0000] via-[#700000] to-[#500000] p-5 sm:p-6 text-[#EFE0CD] relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/25 hover:bg-black/50 text-[#EFE0CD] transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
            <Lock className="w-3.5 h-3.5 text-[#EFE0CD]" />
            <span>Правовая информация • 152-ФЗ & GDPR</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {currentLang === 'en' ? 'Legal & Compliance' : 'Юридические документы и конфиденциальность'}
          </h2>
          <p className="text-xs text-[#EFE0CD]/85 mt-1">
            {currentLang === 'en'
              ? 'Transparent data processing rules, terms of service and user rights.'
              : 'Прозрачные правила обработки данных, пользовательское соглашение и права пользователей.'}
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/15">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-[#FAF5EE] text-[#8B0000] shadow-sm'
                  : 'bg-white/10 text-[#EFE0CD] hover:bg-white/20'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Политика конфиденциальности</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-[#FAF5EE] text-[#8B0000] shadow-sm'
                  : 'bg-white/10 text-[#EFE0CD] hover:bg-white/20'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Пользовательское соглашение</span>
            </button>
            <button
              onClick={() => setActiveTab('cookies')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'cookies'
                  ? 'bg-[#FAF5EE] text-[#8B0000] shadow-sm'
                  : 'bg-white/10 text-[#EFE0CD] hover:bg-white/20'
              }`}
            >
              <Cookie className="w-4 h-4" />
              <span>Cookies & Хранилище</span>
            </button>
          </div>
        </div>

        {/* Modal Body / Document Content */}
        <div className="p-5 sm:p-7 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-[#2D1810]/85 leading-relaxed space-y-4">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#EFE0CD]/60 rounded-2xl border border-[#8B0000]/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-black text-[#8B0000] block mb-0.5">Соответствие 152-ФЗ РФ и регламенту GDPR (ЕС)</span>
                  Платформа «Maybe abroad?» соблюдает законодательство о персональных данных. Мы не собираем избыточную информацию, не продаем базы данных и не занимаемся навязчивым телемаркетингом.
                </div>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  1. Оператор и цели обработки данных
                </h4>
                <p>
                  Оператором данных выступает образовательный сервис «Maybe abroad?». Персональные данные (имя, адрес электронной почты, целевой год поступления и ступень образования) собираются исключительно в целях:
                </p>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-[#2D1810]/80">
                  <li>Предоставления бесплатного расчета шансов на поступление и стипендии;</li>
                  <li>Отправки памятки по дедлайнам и грантам (DSU, DAAD, Erasmus);</li>
                  <li>Сохранения персонализированного списка избранных вузов и результатов тестов;</li>
                  <li>Обратной связи с абитуриентом по его прямому запросу.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  2. Возрастное ограничение (16+)
                </h4>
                <p>
                  Сервис предназначен для лиц, достигших 16-летнего возраста. Если абитуриент не достиг возраста 16 лет, отправка форм и создание профиля допускается только с предварительного согласия его законных представителей (родителей или опекунов).
                </p>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  3. Безопасность и локализация данных
                </h4>
                <p>
                  Пользовательские настройки, избранные университеты и фильтры сохраняются на устройстве пользователя в защищенном локальном хранилище браузера (LocalStorage). Передача данных через веб-формы защищена протоколом шифрования HTTPS и политиками безопасности CSP.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs">
                <div className="flex items-center gap-2 font-black text-amber-900 mb-1">
                  <Mail className="w-4 h-4 text-amber-800" />
                  <span>4. Порядок отзыва согласия и удаления данных (Right to Erasure)</span>
                </div>
                <p className="text-amber-950/80 leading-relaxed">
                  В соответствии со ст. 14, 21 152-ФЗ и ст. 17 GDPR субъект персональных данных имеет право отозвать согласие и запросить удаление данных. 
                  Во избежание случайной потери данных и для защиты академических досье <strong>удаление персональных данных производится по официальному запросу в службу поддержки</strong>.
                </p>
                <p className="mt-2 text-amber-950 font-medium">
                  Направьте запрос на: <a href="mailto:privacy@europath.app" className="font-black text-[#8B0000] underline">privacy@europath.app</a> с темой <em>«Запрос на отзыв согласия и удаление ПДн»</em>. Срок исполнения — до 10 рабочих дней.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#EFE0CD]/60 rounded-2xl border border-[#8B0000]/15 flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-black text-[#8B0000] block mb-0.5">Условия использования платформы</span>
                  Используя сайт «Maybe abroad?», вы соглашаетесь с настоящими правилами. Платформа носит независимый академический характер.
                </div>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  1. Информационный статус материалов
                </h4>
                <p>
                  Все опубликованные сведения о требованиях к зачислению, стоимости обучения (0 € / платно), стипендиях (DSU, DAAD, Eiffel) и визовых регламентах на 2026/2027 год носят ознакомительный характер и регулярно актуализируются по официальным порталам университетов.
                </p>
                <p className="mt-1 text-xs text-[#2D1810]/75">
                  Окончательные решения о зачислении принимаются исключительно приемными комиссиями вузов, а решения о выдаче учебных виз — консульскими службами стран ЕС.
                </p>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  2. Честная ценовая политика и отсутствие темных паттернов
                </h4>
                <p>
                  Платформа не применяет скрытых подписок, навязанных платных услуг или фальшивых таймеров. Базовый подбор университетов, калькулятор смет и профориентационные тесты предоставляются бесплатно.
                </p>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  3. Интеллектуальная собственность
                </h4>
                <p>
                  Интерфейс, структура базы данных, авторские статьи и программный код платформы являются объектами интеллектуальной собственности. Изображения кампусов и стикеры используются в образовательных целях.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-[#EFE0CD]/60 rounded-2xl border border-[#8B0000]/15 flex items-start gap-3">
                <Cookie className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-black text-[#8B0000] block mb-0.5">Политика использования Cookies и Web Storage</span>
                  Мы используем исключительно технические данные для обеспечения корректной работы сервиса на вашем устройстве.
                </div>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  Что сохраняется в вашем браузере:
                </h4>
                <div className="space-y-2 mt-2">
                  <div className="p-2.5 bg-white rounded-xl border border-[#8B0000]/15 text-xs">
                    <span className="font-black text-[#8B0000]">euro_lang:</span> выбранный вами язык интерфейса (RU/EN/DE/FR/IT/ES/CS/NL).
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#8B0000]/15 text-xs">
                    <span className="font-black text-[#8B0000]">euro_favorites:</span> список ID университетов, добавленных в избранное для сравнения.
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#8B0000]/15 text-xs">
                    <span className="font-black text-[#8B0000]">euro_user:</span> данные локального профиля абитуриента (год поступления, ступень).
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-[#8B0000]/15 text-xs">
                    <span className="font-black text-[#8B0000]">euro_cookie_consent:</span> отметка о принятии вами настоящего уведомления.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-black text-[#8B0000] text-sm uppercase tracking-wider mb-1.5">
                  Управление и отключение
                </h4>
                <p className="text-xs text-[#2D1810]/80">
                  Вы можете в любой момент очистить кэш и cookies в настройках своего интернет-браузера. Это приведет к сбросу сохраненного списка избранных программ и фильтров до начального состояния.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#EFE0CD] px-5 sm:px-7 py-4 border-t border-[#8B0000]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#2D1810]/70 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Версия регламента: 2026.1 (Актуально)</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] font-black transition-colors cursor-pointer"
          >
            Понятно, закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
