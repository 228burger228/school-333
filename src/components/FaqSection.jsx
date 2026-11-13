import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection({ onOpenAudit }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Действительно ли в государственных университетах Европы можно учиться бесплатно (0 €)?',
      a: 'Да. В Германии государственные университеты (TUM, RWTH Aachen, Heidelberg) не берут плату за обучение со всех студентов, включая иностранцев — оплачивается только семестровый студенческий сбор (80–250 €), в который уже входит бесплатный проездной на весь транспорт. В Чехии обучение на чешском языке также на 100% бесплатно в Карловом университете и ЧВУТ.'
    },
    {
      q: 'Как получить итальянскую стипендию DSU до 8 000 € в год?',
      a: 'Стипендия DSU (Diritto allo Studio Universitario) в Италии присуждается не за академические оценки или победы в олимпиадах, а на основе социального статуса и дохода семьи (показатель ISEE Parificato). Если доход семьи ниже установленного порога (обычно до 25 000 € в год), студент получает 100% освобождение от оплаты учебы, бесплатное проживание в общежитии, талоны на бесплатное питание в столовой и выплату деньгами на банковскую карту.'
    },
    {
      q: 'Можно ли поступить без международного языкового сертификата IELTS или TOEFL?',
      a: 'Да, во многих ВУЗах это возможно. Некоторые университеты принимают онлайн-тест Duolingo English Test (сдается из дома за 1 час), проводят собственные бесплатные внутренние тесты онлайн, либо освобождают от теста (Language Waiver), если предыдущее образование велось на английском языке.'
    },
    {
      q: 'Разрешено ли студентам официально работать во время учебы в Европе?',
      a: 'Да, общеевропейское визовое законодательство разрешает обладателям студенческого ВНЖ (Residence Permit) официально работать до 20 часов в неделю во время семестра и до 40 часов (полный рабочий день) во время каникул. Средняя оплата труда студента в Германии, Испании и Нидерландах составляет от 12 до 16 € в час.'
    },
    {
      q: 'Что делать, если в родной стране 11 классов, а в Европе требуют 12 или 13 лет школы?',
      a: 'Существует 3 проверенных пути: 1) Поступление на бесплатный подготовительный год в немецкий Studienkolleg; 2) Окончание 1 года бакалавриата в местном университете с последующим переводом на 1-й курс в европейский ВУЗ; 3) Поступление в страны, где 11 лет принимаются напрямую через процедуру признания (например, Италия через 12-летний ценз или омологацию UNEDasiss в Испании).'
    }
  ];

  return (
    <section className="my-14 max-w-4xl mx-auto text-left">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Ответы на ключевые вопросы</span>
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#8B0000] tracking-tight">
          Частые вопросы абитуриентов и родителей
        </h3>
        <p className="text-xs sm:text-sm text-[#2D1810]/75 font-medium mt-1">
          Честные ответы о визах, финансировании, языковых барьерах и правилах приема в ЕС.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#8B0000] shadow-xs'
                  : 'bg-[#FAF5EE] hover:bg-white border-[#8B0000]/15'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <span className="font-extrabold text-sm sm:text-base text-[#2D1810] pr-2">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-[#8B0000] text-[#EFE0CD] rotate-180' : 'bg-[#EFE0CD] text-[#8B0000]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#2D1810]/80 font-medium leading-relaxed border-t border-[#8B0000]/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {onOpenAudit && (
        <div className="mt-8 p-5 rounded-2xl bg-[#EFE0CD]/50 border border-[#8B0000]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#8B0000]">Остались индивидуальные вопросы?</h4>
              <p className="text-xs text-[#2D1810]/70">Запросите бесплатный экспресс-аудит шансов вашего досье.</p>
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs font-bold transition-all shadow-2xs shrink-0 cursor-pointer"
          >
            Запросить аудит
          </button>
        </div>
      )}
    </section>
  );
}
