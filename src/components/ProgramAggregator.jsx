import React, { useState } from 'react';
import { Mail, Globe, Award, Sparkles, CheckCircle2, ArrowRight, DollarSign, BookOpen } from 'lucide-react';

export default function ProgramAggregator({ onAggregate }) {
  const [email, setEmail] = useState('');
  const [originCountry, setOriginCountry] = useState('Казахстан');
  const [selectedLanguage, setSelectedLanguage] = useState('Английский');
  const [languageLevel, setLanguageLevel] = useState('B2');
  const [selectedExam, setSelectedExam] = useState('IELTS');
  const [examScore, setExamScore] = useState('6.5');
  const [fundingOption, setFundingOption] = useState('free'); // 'free' | 'scholarship' | 'commercial'
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Сохранение в локальное хранилище для удобства абитуриента
    try {
      localStorage.setItem('euro_aggregator_query', JSON.stringify({
        email,
        originCountry,
        selectedLanguage,
        languageLevel,
        selectedExam,
        examScore,
        fundingOption,
        timestamp: new Date().toISOString()
      }));
    } catch (err) {
      // ignore
    }

    if (onAggregate) {
      onAggregate({
        email,
        originCountry,
        selectedLanguage,
        languageLevel,
        selectedExam,
        examScore,
        fundingOption
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 text-left">
      <div className="bg-[#8B0000] text-[#EFE0CD] rounded-3xl p-4 sm:p-10 shadow-2xl border-2 sm:border-4 border-[#FAF5EE]/30 relative overflow-hidden">
        {/* Декоративный фоновый герб/акцент */}
        <div className="absolute -top-10 -right-10 text-9xl text-white/5 pointer-events-none select-none font-serif font-black">
          ?
        </div>

        {/* Заголовок агрегатора */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EE]/15 border border-[#FAF5EE]/25 text-[#FAF5EE] text-xs font-black uppercase tracking-wider mb-2">
            <span>Умный подбор 2026/2027</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#FAF5EE] tracking-tight">
            Агрегатор программ и подбор ВУЗов
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF5EE]/85 mt-2 font-medium">
            Укажите ваши параметры, и алгоритм мгновенно отфильтрует подходящие европейские университеты, гранты и стипендии.
          </p>
        </div>

        {/* Форма агрегатора (макет Прил. 4) */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* 1. Почта */}
          <div>
            <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#EFE0CD]" />
              <span>Почта:</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com (для сохранения подборки и дедлайнов)"
              className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] placeholder-[#2D1810]/50 font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none shadow-inner"
            />
          </div>

          {/* 2. Откуда вы? / Страна */}
          <div>
            <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#EFE0CD]" />
              <span>Откуда вы? (Страна проживания):</span>
            </label>
            <select
              value={originCountry}
              onChange={(e) => setOriginCountry(e.target.value)}
              className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none cursor-pointer shadow-inner"
            >
              <option value="Казахстан">🇰🇿 Казахстан</option>
              <option value="Беларусь">🇧🇾 Беларусь</option>
              <option value="Россия">🇷🇺 Россия</option>
              <option value="Узбекистан">🇺🇿 Узбекистан</option>
              <option value="Азербайджан">🇦🇿 Азербайджан</option>
              <option value="Армения">🇦🇲 Армения</option>
              <option value="Кыргызстан">🇰🇬 Кыргызстан</option>
              <option value="Таджикистан">🇹🇯 Таджикистан</option>
              <option value="Грузия">🇬🇪 Грузия</option>
              <option value="Молдова">🇲🇩 Молдова</option>
              <option value="Другая страна">🌍 Другая страна</option>
            </select>
          </div>

          {/* 3. Вы говорите на европейских языках? На каких? На каком уровне? */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2">
                Вы говорите на европейских языках? На каких?
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none cursor-pointer shadow-inner"
              >
                <option value="Английский">🇬🇧 Английский (English)</option>
                <option value="Немецкий">🇩🇪 Немецкий (Deutsch)</option>
                <option value="Французский">🇫🇷 Французский (Français)</option>
                <option value="Испанский">🇪🇸 Испанский (Español)</option>
                <option value="Итальянский">🇮🇹 Итальянский (Italiano)</option>
                <option value="Чешский">🇨🇿 Чешский (Čeština)</option>
                <option value="Словацкий">🇸🇰 Словацкий (Slovenčina)</option>
                <option value="Только русский / родной (хочу учить с нуля)">🗣️ Только русский / родной (учить с нуля)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2">
                На каком уровне?
              </label>
              <select
                value={languageLevel}
                onChange={(e) => setLanguageLevel(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none cursor-pointer shadow-inner"
              >
                <option value="A1-A2">A1 – A2 (Начальный)</option>
                <option value="B1">B1 (Средний базовый)</option>
                <option value="B2">B2 (Уверенный разговорный)</option>
                <option value="C1">C1 (Продвинутый)</option>
                <option value="C2">C2 (В совершенстве)</option>
                <option value="С нуля">С нуля (готов учить на курсах)</option>
              </select>
            </div>
          </div>

          {/* 4 & 5. Международные экзамены и Score */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#EFE0CD]" />
                <span>Сдавали международные экзамены?</span>
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none cursor-pointer shadow-inner"
              >
                <option value="IELTS">IELTS Academic</option>
                <option value="TOEFL">TOEFL iBT</option>
                <option value="SAT">SAT Reasoning</option>
                <option value="DELF/DALF">DELF / DALF (Французский)</option>
                <option value="DELE/SIELE">DELE / SIELE (Испанский)</option>
                <option value="TestDaF/Goethe">TestDaF / Goethe (Немецкий)</option>
                <option value="Duolingo">Duolingo English Test</option>
                <option value="Пока не сдавал">Пока не сдавал (ищу без экзамена)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FAF5EE] mb-2">
                Ваш score по экзаменам:
              </label>
              <input
                type="text"
                value={examScore}
                onChange={(e) => setExamScore(e.target.value)}
                placeholder="Например: 6.5 / 90 / 1350 / планирую сдать"
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl bg-[#FAF5EE] text-[#2D1810] placeholder-[#2D1810]/50 font-bold text-[16px] sm:text-base border-2 border-transparent focus:border-[#FAF5EE] focus:outline-none shadow-inner"
              />
            </div>
          </div>

          {/* 6. Какое финансирование вам подходит? (Требование из правок) */}
          <div className="pt-2">
            <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-[#FAF5EE] mb-3">
              Какое финансирование вам подходит?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Вариант 1: Полное финансирование */}
              <label
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                  fundingOption === 'free'
                    ? 'bg-[#FAF5EE] text-[#8B0000] border-[#FAF5EE] shadow-lg sm:scale-102 font-black'
                    : 'bg-[#FAF5EE]/10 text-[#FAF5EE] border-[#FAF5EE]/25 hover:bg-[#FAF5EE]/20 font-bold'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider">Вариант 1</span>
                  <input
                    type="radio"
                    name="fundingOption"
                    value="free"
                    checked={fundingOption === 'free'}
                    onChange={() => setFundingOption('free')}
                    className="w-4 h-4 text-[#8B0000] focus:ring-0 mt-0.5"
                  />
                </div>
                <div>
                  <span className="text-sm sm:text-base block font-black leading-tight">
                    Полное финансирование
                  </span>
                  <span className="text-xs opacity-85 block mt-1">
                    (хочу учиться бесплатно: Германия, Чехия, Словакия, DSU 0 €)
                  </span>
                </div>
              </label>

              {/* Вариант 2: Хочу получать стипендию */}
              <label
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                  fundingOption === 'scholarship'
                    ? 'bg-[#FAF5EE] text-[#8B0000] border-[#FAF5EE] shadow-lg sm:scale-102 font-black'
                    : 'bg-[#FAF5EE]/10 text-[#FAF5EE] border-[#FAF5EE]/25 hover:bg-[#FAF5EE]/20 font-bold'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider">Вариант 2</span>
                  <input
                    type="radio"
                    name="fundingOption"
                    value="scholarship"
                    checked={fundingOption === 'scholarship'}
                    onChange={() => setFundingOption('scholarship')}
                    className="w-4 h-4 text-[#8B0000] focus:ring-0 mt-0.5"
                  />
                </div>
                <div>
                  <span className="text-sm sm:text-base block font-black leading-tight">
                    Хочу получать стипендию
                  </span>
                  <span className="text-xs opacity-85 block mt-1">
                    (покрытие расходов на жизнь + гранты DAAD, Eiffel, SI)
                  </span>
                </div>
              </label>

              {/* Вариант 3: Готов обучаться на коммерческой основе */}
              <label
                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                  fundingOption === 'commercial'
                    ? 'bg-[#FAF5EE] text-[#8B0000] border-[#FAF5EE] shadow-lg sm:scale-102 font-black'
                    : 'bg-[#FAF5EE]/10 text-[#FAF5EE] border-[#FAF5EE]/25 hover:bg-[#FAF5EE]/20 font-bold'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider">Вариант 3</span>
                  <input
                    type="radio"
                    name="fundingOption"
                    value="commercial"
                    checked={fundingOption === 'commercial'}
                    onChange={() => setFundingOption('commercial')}
                    className="w-4 h-4 text-[#8B0000] focus:ring-0 mt-0.5"
                  />
                </div>
                <div>
                  <span className="text-sm sm:text-base block font-black leading-tight">
                    Готов на коммерческой основе
                  </span>
                  <span className="text-xs opacity-85 block mt-1">
                    (доступные европейские госвузы от 1 000 до 4 000 €/год)
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Кнопка отправки формы агрегатора */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#FAF5EE] hover:bg-white text-[#8B0000] text-base sm:text-lg font-black rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span>Подобрать подходящие программы и ВУЗы</span>
              <ArrowRight className="w-5 h-5 text-[#8B0000] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
