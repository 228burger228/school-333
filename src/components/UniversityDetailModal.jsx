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
  Globe,
  Printer
} from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function UniversityDetailModal({
  university,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  onRequestAudit,
  currentLang = 'ru'
}) {
  const [activeTab, setActiveTab] = useState('programs');
  const t = getTranslation(currentLang);

  const handlePrintChecklist = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="utf-8">
        <title>Чек-лист поступления — ${university.name}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #2D1810; margin: 35px; line-height: 1.5; background: #FAF5EE; }
          .header { border-bottom: 2px solid #8B0000; padding-bottom: 12px; margin-bottom: 20px; }
          .badge { background: #8B0000; color: #EFE0CD; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; display: inline-block; margin-bottom: 8px; }
          h1 { color: #8B0000; margin: 4px 0; font-size: 22px; font-weight: 800; }
          .sub { color: #666; font-size: 13px; font-weight: 600; margin-bottom: 10px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
          .card { background: #fff; padding: 14px; border: 1px solid #8B000033; border-radius: 10px; }
          .card-title { font-size: 11px; text-transform: uppercase; font-weight: 800; color: #8B0000; margin-bottom: 8px; border-bottom: 1px solid #8B000022; padding-bottom: 4px; }
          .param { margin-bottom: 6px; font-size: 12.5px; }
          .section { background: #fff; padding: 16px; border: 1px solid #8B000033; border-radius: 10px; margin-bottom: 20px; }
          .section-title { font-size: 12px; text-transform: uppercase; font-weight: 800; color: #8B0000; margin-bottom: 10px; border-bottom: 1px solid #8B000022; padding-bottom: 4px; }
          .checklist-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; font-size: 12.5px; }
          .box { width: 14px; height: 14px; border: 1.5px solid #8B0000; border-radius: 3px; margin-top: 2px; flex-shrink: 0; }
          .footer { margin-top: 30px; border-top: 1px solid #8B000033; padding-top: 12px; font-size: 11px; color: #777; display: flex; justify-content: space-between; }
          @media print { body { background: #fff; margin: 15mm; } .card, .section { border: 1px solid #ccc; } }
        </style>
      </head>
      <body>
        <div class="header">
          <span class="badge">Maybe abroad? • Академический навигатор</span>
          <h1>${university.name}</h1>
          <div class="sub">${university.countryName}, ${university.city} • QS Rank: ${university.qsRank} • Дедлайн: ${university.deadline}</div>
        </div>

        <div class="grid">
          <div class="card">
            <div class="card-title">Финансовые условия & Стипендии</div>
            <div class="param"><strong>Стоимость учебы:</strong> ${university.tuition.text}</div>
            <div class="param"><strong>Грант:</strong> ${university.scholarship.name}</div>
            <div class="param"><strong>Покрытие:</strong> ${university.scholarship.coverage}</div>
            <div class="param"><strong>Бюджет в месяц:</strong> ~${university.livingCostMonth} € (жилье + еда + проезд)</div>
          </div>
          <div class="card">
            <div class="card-title">Языковой порог & Тесты</div>
            <div class="param"><strong>IELTS:</strong> ${university.languageReq.ielts || 'Не требуется'}</div>
            <div class="param"><strong>TOEFL:</strong> ${university.languageReq.toefl || 'Не требуется'}</div>
            <div class="param"><strong>Особенности:</strong> ${university.languageReq.examDescription}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Обязательный чек-лист документов для подачи</div>
          ${university.admissionChecklist.map(doc => `
            <div class="checklist-item">
              <span class="box"></span>
              <span>${doc}</span>
            </div>
          `).join('')}
          <div class="checklist-item"><span class="box"></span><span>Заграничный паспорт со сроком действия не менее 1.5 лет</span></div>
          <div class="checklist-item"><span class="box"></span><span>Мотивационное письмо (Motivation Letter / Statement of Purpose)</span></div>
          <div class="checklist-item"><span class="box"></span><span>Академическое резюме в стандарте Europass (CV)</span></div>
          <div class="checklist-item"><span class="box"></span><span>Справка о наличии средств на банковском счете для студенческой визы</span></div>
        </div>

        <div class="section">
          <div class="section-title">Рекомендованные программы</div>
          ${university.keyPrograms.map(p => `
            <div class="param">• <strong>${p.name}</strong> (${p.degree}, ${p.lang}, срок: ${p.duration})</div>
          `).join('')}
        </div>

        <div class="footer">
          <span>Сформировано на платформе Maybe abroad? • Официальный сайт: ${university.websiteUrl}</span>
          <span>Дата: ${new Date().toLocaleDateString('ru-RU')}</span>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  if (!isOpen || !university) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl shadow-2xl border-2 border-[#8B0000]/30 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Campus Photo */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-gradient-to-br from-[#700000] via-[#8B0000] to-[#500000]">
          <img
            src={university.photo}
            alt={`${university.name} — Главный корпус и кампус, ${university.city}, ${university.countryName}`}
            title={`${university.name} (${university.city})`}
            width="1200"
            height="675"
            decoding="async"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'images/hero_campus.jpg';
            }}
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
            <span className="bg-[#FAF5EE] text-[#8B0000] text-xs font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-[#8B0000]/20">
              <Award className="w-3.5 h-3.5 text-[#8B0000]" />
              {university.qsRank}
            </span>
          </div>

          {/* University Title & City on photo bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EFE0CD] mb-1">
              <span>{university.flag}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#EFE0CD]" />
                {university.countryName}, {university.city}
              </span>
              {university.landmarkSymbol && (
                <>
                  <span>•</span>
                  <span>{university.landmarkSymbol}</span>
                </>
              )}
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
            {t.modal.tabPrograms}
          </button>
          <button
            onClick={() => setActiveTab('admission')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'admission'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            {t.modal.tabRequirements}
          </button>
          <button
            onClick={() => setActiveTab('scholarships')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'scholarships'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            {t.modal.tabTuition}
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`py-3.5 px-3 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'costs'
                ? 'border-[#8B0000] text-[#8B0000]'
                : 'border-transparent text-[#2D1810]/70 hover:text-[#8B0000]'
            }`}
          >
            {t.modal.tabLiving}
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-5 sm:p-6 max-h-[55vh] overflow-y-auto space-y-5 text-xs sm:text-sm text-[#2D1810]">
          {/* TAB 1: Programs & Overview */}
          {activeTab === 'programs' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-2">
                  {currentLang === 'en' ? 'About University' : 'Об университете'}
                </h4>
                <p className="text-xs sm:text-sm text-[#2D1810]/85 leading-relaxed">
                  {university.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B0000] mb-3">
                  {t.modal.flagshipPrograms}
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
                        {currentLang === 'en' ? 'Language:' : 'Язык:'} {prog.lang}
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
                  {t.modal.langReq}
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
                  {t.modal.docsList}
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
                  <strong>{t.modal.deadline}</strong> {university.deadline}
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: Scholarships & Tuition */}
          {activeTab === 'scholarships' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#EFE0CD] border border-[#8B0000]/20">
                <span className="text-xs font-bold text-[#8B0000] uppercase tracking-wider block mb-1">
                  {t.modal.tuitionCost}
                </span>
                <p className="text-lg font-black text-[#8B0000]">
                  {university.tuition.text}
                </p>
                {university.tuition.isFree && (
                  <span className="inline-block mt-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {currentLang === 'en' ? '✓ Tuition-free higher education available' : '✓ Доступно бесплатное высшее образование'}
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
                    {t.modal.coverage} {university.scholarship.coverage}
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
                  {t.modal.monthlyLiving}
                </span>
                <span className="text-lg font-black text-[#8B0000]">
                  ~{university.livingCostMonth} € / {currentLang === 'en' ? 'mo' : 'мес'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    {t.modal.housing}
                  </span>
                  <span className="font-bold text-[#2D1810]">
                    {university.livingCostDetails.housing}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    {t.modal.food}
                  </span>
                  <span className="font-bold text-[#2D1810]">
                    {university.livingCostDetails.food}
                  </span>
                </div>
                <div className="p-3.5 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/15 text-xs">
                  <span className="text-[#8B0000] block font-bold mb-1 uppercase tracking-wider text-[10px]">
                    {t.modal.transport}
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
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onToggleFavorite(university.id)}
              className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                isFavorite
                  ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000]'
                  : 'bg-white border-[#8B0000]/25 text-[#8B0000] hover:bg-[#FAF5EE]'
              }`}
              title={isFavorite ? t.card.removeFavorite : t.card.addFavorite}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? t.modal.inFavorites : t.modal.favoriteBtn}</span>
            </button>

            <button
              onClick={handlePrintChecklist}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#8B0000]/30 hover:border-[#8B0000] text-[#8B0000] text-xs font-bold transition-all shadow-2xs cursor-pointer"
              title="PDF"
            >
              <Printer className="w-4 h-4" />
              <span>{t.modal.printChecklist}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onRequestAudit && (
              <button
                onClick={() => {
                  onClose();
                  onRequestAudit(university);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#FAF5EE] hover:bg-[#FAF5EE]/80 border-2 border-[#8B0000] text-[#8B0000] text-xs sm:text-sm font-black rounded-xl shadow-2xs transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8B0000]" />
                <span>{t.modal.assessChances}</span>
              </button>
            )}

            <a
              href={university.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>{t.modal.websiteBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
