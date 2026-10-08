import React, { useState } from 'react';
import { admissionRoadmap, scholarshipCatalog, faqData, countryLivingCosts } from '../data/admissionGuide';
import {
  Calendar,
  Award,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Euro,
  ExternalLink,
  Wallet,
  Home,
  Utensils,
  Bus,
  Shield,
  Lightbulb,
  Briefcase
} from 'lucide-react';

export default function AdmissionGuideScreen({ onBack, onNavigateToCatalog, onNavigateToCountryUniversities }) {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'scholarships' | 'faq' | 'costs'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [selectedCostCountryId, setSelectedCostCountryId] = useState('germany');

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left animate-fadeIn">
      {/* Top Back & Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#8B0000]/15">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B0000]/10 hover:bg-[#8B0000]/15 text-[#8B0000] text-xs sm:text-sm font-bold transition-all border border-[#8B0000]/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На главную</span>
        </button>

        <div className="text-left sm:text-right">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B0000]/80 block">
            База знаний абитуриента
          </span>
          <span className="text-xs text-[#2D1810]/70 font-medium">
            Практическое руководство для поступления 2026 / 2027
          </span>
        </div>
      </div>

      {/* Hero Title */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B0000] text-[#EFE0CD] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Гид по европейскому высшему образованию
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#8B0000] tracking-tight">
          Поступление от А до Я
        </h1>
        <p className="text-sm sm:text-base text-[#2D1810]/80 max-w-2xl mt-2 leading-relaxed font-medium">
          Пошаговый план действий, каталог полных государственных стипендий (DSU, DAAD, Eiffel) и проверенные ответы экспертов на сложные вопросы.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap gap-2 mb-8 bg-[#FAF5EE] p-2 rounded-2xl border-2 border-[#8B0000]/15 w-fit">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === 'roadmap'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Таймлайн поступления 2026/2027</span>
        </button>

        <button
          onClick={() => setActiveTab('scholarships')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === 'scholarships'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Стипендии и гранты до 100%</span>
        </button>

        <button
          onClick={() => setActiveTab('faq')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === 'faq'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Вопросы и ответы (FAQ)</span>
        </button>

        <button
          onClick={() => setActiveTab('costs')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
            activeTab === 'costs'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
        >
          <Euro className="w-4 h-4" />
          <span>Калькулятор расходов по 13 странам</span>
        </button>
      </div>

      {/* TAB 1: ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {admissionRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/15 shadow-sm hover:border-[#8B0000] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xs font-black uppercase tracking-wider bg-[#8B0000] text-[#EFE0CD] px-3 py-1 rounded-full">
                      {item.phase}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#8B0000] uppercase tracking-wider block mb-1">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-black text-[#2D1810] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-[#2D1810]/80">
                    {item.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#8B0000] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="text-base font-black text-[#8B0000]">
                Готовы начать подбор университетов прямо сейчас?
              </h4>
              <p className="text-xs text-[#2D1810]/75 mt-0.5 font-medium">
                Перейдите к 13 странам Европы и изучите реальные требования и дедлайны.
              </p>
            </div>
            <button
              onClick={onNavigateToCatalog}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] rounded-xl text-xs sm:text-sm font-black shadow-md transition-all shrink-0"
            >
              <span>⋯ Выбрать страну</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: SCHOLARSHIPS */}
      {activeTab === 'scholarships' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarshipCatalog.map((sch) => (
            <div
              key={sch.id}
              className="bg-[#FAF5EE] rounded-3xl p-6 border-2 border-[#8B0000]/15 hover:border-[#8B0000] shadow-sm transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-[#8B0000] bg-[#EFE0CD] px-2.5 py-0.5 rounded-md border border-[#8B0000]/20">
                    {sch.country}
                  </span>
                  <span className="text-xs text-[#8B0000] font-black">
                    Дедлайн: {sch.deadline}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#8B0000] mb-2 leading-tight">
                  {sch.name}
                </h3>

                <div className="p-3 bg-[#EFE0CD] rounded-2xl border border-[#8B0000]/20 mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#8B0000] block mb-0.5">
                    Размер финансирования:
                  </span>
                  <span className="font-extrabold text-[#2D1810] text-xs sm:text-sm">
                    {sch.amount}
                  </span>
                </div>

                <p className="text-xs text-[#2D1810]/85 font-medium leading-relaxed mb-4">
                  {sch.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#8B0000]/10 text-xs text-[#2D1810]">
                <strong className="text-[#8B0000]">Что требуется:</strong> {sch.requirements}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: FAQ */}
      {activeTab === 'faq' && (
        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF5EE] rounded-2xl border-2 border-[#8B0000]/15 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-black text-[#8B0000] text-sm sm:text-base hover:bg-[#8B0000]/5 transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#8B0000] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8B0000] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#2D1810]/85 font-medium leading-relaxed border-t border-[#8B0000]/10">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 4: COUNTRY LIVING COSTS CALCULATOR & MEMO */}
      {activeTab === 'costs' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Section Subtitle */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#8B0000] mb-2">
              Смета расходов студента по 13 странам Европы
            </h3>
            <p className="text-xs sm:text-sm text-[#2D1810]/80 font-medium max-w-3xl leading-relaxed">
              Выберите страну, чтобы увидеть реальную структуру ежемесячного бюджета (аренда жилья, питание, страховка, студенческий транспорт) и проверенные способы экономии.
            </p>
          </div>

          {/* 13 Country Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {countryLivingCosts.map((c) => {
              const isSelected = c.id === selectedCostCountryId;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCostCountryId(c.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm scale-105'
                      : 'bg-[#FAF5EE] text-[#2D1810]/80 hover:bg-[#8B0000]/10 border border-[#8B0000]/20'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.countryName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Country Detail Card */}
          {(() => {
            const currentCost = countryLivingCosts.find((c) => c.id === selectedCostCountryId) || countryLivingCosts[0];
            return (
              <div className="bg-[#FAF5EE] rounded-3xl border-2 border-[#8B0000]/25 p-6 sm:p-8 shadow-sm space-y-6">
                {/* Header: Country Flag, Name, Total Budget */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#8B0000]/15">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl">{currentCost.flag}</span>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#8B0000]">
                        Ежемесячный бюджет студента
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-[#8B0000]">
                        {currentCost.countryName}
                      </h2>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-[#8B0000]/20 text-left sm:text-right shadow-2xs">
                    <span className="text-[11px] font-bold text-[#2D1810]/60 block uppercase">
                      Средняя сумма в месяц
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#8B0000]">
                      ~{currentCost.totalAvg} € <span className="text-xs font-bold text-[#2D1810]/60">/ мес</span>
                    </span>
                  </div>
                </div>

                {/* 4 Cost Breakdown Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Housing */}
                  <div className="bg-white p-4 rounded-2xl border border-[#8B0000]/15 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mb-2">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-[#8B0000] tracking-wider block">
                      Жилье / Общежитие
                    </span>
                    <span className="text-lg font-black text-[#2D1810] block my-1">
                      {currentCost.housing.min} – {currentCost.housing.max} €
                    </span>
                    <p className="text-[11px] text-[#2D1810]/70 font-medium leading-relaxed">
                      {currentCost.housing.desc}
                    </p>
                  </div>

                  {/* Food */}
                  <div className="bg-white p-4 rounded-2xl border border-[#8B0000]/15 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mb-2">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-[#8B0000] tracking-wider block">
                      Питание & Столовые
                    </span>
                    <span className="text-lg font-black text-[#2D1810] block my-1">
                      {currentCost.food.min} – {currentCost.food.max} €
                    </span>
                    <p className="text-[11px] text-[#2D1810]/70 font-medium leading-relaxed">
                      {currentCost.food.desc}
                    </p>
                  </div>

                  {/* Transport */}
                  <div className="bg-white p-4 rounded-2xl border border-[#8B0000]/15 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mb-2">
                      <Bus className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-[#8B0000] tracking-wider block">
                      Студенческий транспорт
                    </span>
                    <span className="text-lg font-black text-[#2D1810] block my-1">
                      {currentCost.transport.min} – {currentCost.transport.max} €
                    </span>
                    <p className="text-[11px] text-[#2D1810]/70 font-medium leading-relaxed">
                      {currentCost.transport.desc}
                    </p>
                  </div>

                  {/* Insurance */}
                  <div className="bg-white p-4 rounded-2xl border border-[#8B0000]/15 shadow-2xs">
                    <div className="w-8 h-8 rounded-xl bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mb-2">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-[#8B0000] tracking-wider block">
                      Медицинская страховка
                    </span>
                    <span className="text-lg font-black text-[#2D1810] block my-1">
                      {currentCost.insurance.min === 0 ? '0 € (Госстраховка)' : `${currentCost.insurance.min} – ${currentCost.insurance.max} €`}
                    </span>
                    <p className="text-[11px] text-[#2D1810]/70 font-medium leading-relaxed">
                      {currentCost.insurance.desc}
                    </p>
                  </div>
                </div>

                {/* Savings Tips & Work Rights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#EFE0CD]/60 border border-[#8B0000]/20 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-[#8B0000] block mb-1">
                        Лайфхак экономии в стране
                      </span>
                      <p className="text-xs text-[#2D1810]/85 font-medium leading-relaxed">
                        {currentCost.savingsTip}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EFE0CD]/60 border border-[#8B0000]/20 flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-black uppercase text-[#8B0000] block mb-1">
                        Право на работу во время учебы
                      </span>
                      <p className="text-xs text-[#2D1810]/85 font-medium leading-relaxed">
                        {currentCost.workRights}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action: Перейти к ВУЗам этой страны */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      if (onNavigateToCountryUniversities) {
                        onNavigateToCountryUniversities(currentCost.id);
                      } else if (onNavigateToCatalog) {
                        onNavigateToCatalog();
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer"
                  >
                    <span>Подобрать университеты в стране ({currentCost.countryName})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
