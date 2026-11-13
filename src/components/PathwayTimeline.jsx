import React, { useState } from 'react';
import { CheckCircle2, Clock, FileText, Award, Plane, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PathwayTimeline({ onOpenGuide, onOpenAudit }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Диагностика и выбор страны',
      timeline: '1–2 недели',
      badge: 'Этап 1',
      icon: Clock,
      short: 'Оценка шансов по GPA и выбор 3–5 целевых ВУЗов',
      details: [
        'Определение приоритетных стран по бюджету (Германия/Чехия — 0 €, Италия — стипендия DSU)',
        'Проверка языка: достаточно ли школьного уровня или нужен IELTS / Duolingo / B2',
        'Анализ требований дедлайнов (ранняя подача с января по апрель)'
      ],
      tip: 'Совет: подавайте документы минимум в 3 университета разного уровня конкурсности (Dream / Target / Safety).'
    },
    {
      id: 2,
      title: 'Сбор досье и апостилирование',
      timeline: '1–3 месяца',
      badge: 'Этап 2',
      icon: FileText,
      short: 'Апостиль на аттестат/диплом, нотариальные переводы, CV Europass',
      details: [
        'Проставление государственного апостиля на оригинал аттестата или диплома бакалавра',
        'Присяжный или нотариальный перевод на язык страны обучения (итальянский, немецкий, испанский)',
        'Составление академического резюме в формате Europass и сильного Motivation Letter (SOP)'
      ],
      tip: 'Совет: апостиль в Департаменте образования ставится до 45 рабочих дней — начинайте заранее.'
    },
    {
      id: 3,
      title: 'Подача заявки и гранты (0 €)',
      timeline: 'Апрель – Июль',
      badge: 'Этап 3',
      icon: Award,
      short: 'Подача через порталы Uni-Assist / Universitaly и заявки на стипендии',
      details: [
        'Регистрация на национальных порталах (Universitaly в Италии, Uni-Assist в Германии, UNEDasiss в Испании)',
        'Подача на региональные гранты полного покрытия (итальянская стипендия DSU до 8 000 €/год + питание)',
        'Получение официального приглашения (Letter of Acceptance / Pre-enrollment)'
      ],
      tip: 'Внимание: в Италии стипендия DSU зависит от дохода семьи (ISEE Parificato), а не от вступительных экзаменов!'
    },
    {
      id: 4,
      title: 'Студенческая виза и переезд',
      timeline: 'Июль – Сентябрь',
      badge: 'Этап 4',
      icon: Plane,
      short: 'Студенческая виза типа D, блокированный счет, жилье и право на работу',
      details: [
        'Подача пакета в визовый центр: приглашение от ВУЗа, страховка, бронь жилья',
        'Финансовые гарантии: выписка со счета, блокированный счет (Sperrkonto) или подтверждение стипендии',
        'Получение ВНЖ (Permesso di Soggiorno / Aufenthaltstitel) с правом легальной работы до 20 ч / неделю'
      ],
      tip: 'После выпуска из европейского ВУЗа вы получаете визу на поиск работы в ЕС сроком от 12 до 24 месяцев.'
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#8B0000]/15 shadow-sm text-left my-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#8B0000]/15">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Анатомия поступления 2026 / 2027</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] tracking-tight">
            Пошаговая дорожная карта: от идеи до студенческого билета
          </h3>
          <p className="text-xs sm:text-sm text-[#2D1810]/75 font-medium mt-1">
            Нажимайте на этапы, чтобы увидеть требования, сроки и лайфхаки экономии на каждом шаге.
          </p>
        </div>

        {onOpenGuide && (
          <button
            onClick={onOpenGuide}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#8B0000] text-[#8B0000] hover:text-[#EFE0CD] border border-[#8B0000]/25 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto cursor-pointer"
          >
            <span>Полный гайд со сроками</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Step Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#8B0000] text-[#EFE0CD] border-[#8B0000] shadow-md scale-[1.02]'
                  : 'bg-white hover:bg-[#FAF5EE] text-[#2D1810] border-[#8B0000]/20 hover:border-[#8B0000]/40'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-[#EFE0CD]' : 'bg-[#8B0000]/10 text-[#8B0000]'
                  }`}
                >
                  {s.badge}
                </span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-[#EFE0CD]/80' : 'text-[#2D1810]/60'}`}>
                  {s.timeline}
                </span>
              </div>
              <div className="font-extrabold text-xs sm:text-sm leading-snug line-clamp-2">
                {s.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Content Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#8B0000]/15">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center shrink-0 border border-[#8B0000]/20">
            <StepIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#8B0000] uppercase tracking-wider">
                {current.badge} • Срок: {current.timeline}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-[#2D1810]">
              {current.title}
            </h4>
            <p className="text-xs text-[#2D1810]/75 font-medium mt-0.5">
              {current.short}
            </p>
          </div>
        </div>

        {/* Detailed Points */}
        <div className="space-y-2 mb-4">
          {current.details.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-[#2D1810]/90">
              <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
              <span className="font-medium leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        {/* Pro Tip Callout */}
        <div className="p-3.5 rounded-xl bg-[#EFE0CD]/60 border border-[#8B0000]/15 flex items-start gap-2.5 text-xs text-[#2D1810]">
          <span className="font-black text-[#8B0000] shrink-0">💡 Важно:</span>
          <span className="font-medium leading-relaxed">{current.tip}</span>
        </div>
      </div>
    </div>
  );
}
