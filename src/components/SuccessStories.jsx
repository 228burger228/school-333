import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle, ArrowRight, Star, Building2, MapPin } from 'lucide-react';

export default function SuccessStories({ onOpenDetails, onStartSearch }) {
  const [activeDegree, setActiveDegree] = useState('bachelor'); // 'bachelor' | 'master'

  const stories = {
    bachelor: [
      {
        id: 'story-1',
        name: 'Алексей С.',
        age: '18 лет',
        from: 'Москва',
        gpa: '4.4 / 5.0',
        language: 'IELTS 6.5',
        targetUni: 'Technical University of Munich (TUM)',
        country: 'Германия',
        flag: '🇩🇪',
        program: 'Informatics & Computer Science (B.Sc.)',
        tuition: '0 € / год (госвуз)',
        scholarship: 'Семестровый сбор 85 € (включает проездной)',
        quote: 'Думал, что без немецкого C1 в Германию не поступить. Оказалось, достаточно было правильно подтвердить 13-й школьный год через Studienkolleg и подать документы вовремя через Uni-Assist.',
        highlight: 'Бесплатное обучение 0 €'
      },
      {
        id: 'story-2',
        name: 'Мария К.',
        age: '19 лет',
        from: 'Санкт-Петербург',
        gpa: '4.2 / 5.0',
        language: 'Duolingo 120',
        targetUni: 'Universitat Autònoma de Barcelona (UAB)',
        country: 'Испания',
        flag: '🇪🇸',
        program: 'Business Management and Technology',
        tuition: '2 400 € / год',
        scholarship: 'Грант MEC на покрытие расходов',
        quote: 'Процесс омологации аттестата через UNEDasiss занял 2 месяца. Сейчас живу в кампусе Vila Universitària в 25 минутах от центра Барселоны и совмещаю учебу со стажировкой.',
        highlight: 'Кампус в Барселоне'
      },
      {
        id: 'story-3',
        name: 'Дмитрий В.',
        age: '18 лет',
        from: 'Казань',
        gpa: '4.7 / 5.0',
        language: 'Внутренний тест ВУЗа',
        targetUni: 'Карлов университет (Charles University)',
        country: 'Чехия',
        flag: '🇨🇿',
        program: 'General Medicine (English Curriculum)',
        tuition: 'Бесплатно на чешском / грант',
        scholarship: 'Государственная языковая подготовка',
        quote: 'Главный плюс Чехии — европейский диплом врача, признаваемый во всем Евросоюзе без дополнительной сдачи нострификации.',
        highlight: 'Европейский диплом врача'
      }
    ],
    master: [
      {
        id: 'story-4',
        name: 'Екатерина П.',
        age: '23 года',
        from: 'Екатеринбург',
        gpa: '4.5 / 5.0',
        language: 'IELTS 6.5',
        targetUni: 'Politecnico di Milano (PoliMi)',
        country: 'Италия',
        flag: '🇮🇹',
        program: 'Digital and Interaction Design (M.Sc.)',
        tuition: '0 € (Освобождение от взноса)',
        scholarship: 'Стипендия DSU 7 600 € / год + бесплатная столовая',
        quote: 'Стипендия DSU в Италии реально существует и работает! Подала справку о доходах семьи (ISEE Parificato) и получила полное покрытие учебы, деньги на карту и бесплатное общежитие в Милане.',
        highlight: 'Грант DSU 7 600 € / год'
      },
      {
        id: 'story-5',
        name: 'Илья Р.',
        age: '24 года',
        from: 'Новосибирск',
        gpa: '4.8 / 5.0',
        language: 'TOEFL 96',
        targetUni: 'KTH Royal Institute of Technology',
        country: 'Швеция',
        flag: '🇸🇪',
        program: 'Software Engineering of Distributed Systems',
        tuition: 'Шведский институт (SI Grant)',
        scholarship: 'Покрытие 100% + стипендия 12 000 SEK / мес',
        quote: 'Швеция — мировой хаб стартапов (Spotify, Klarna). Поступил на полностью англоязычный трек и уже на втором курсе устроился junior-разработчиком в Стокгольме.',
        highlight: 'Полная стипендия SI'
      },
      {
        id: 'story-6',
        name: 'София М.',
        age: '22 года',
        from: 'Нижний Новгород',
        gpa: '4.3 / 5.0',
        language: 'DELF B2 / IELTS 6.5',
        targetUni: 'Sorbonne University',
        country: 'Франция',
        flag: '🇫🇷',
        program: 'International Affairs & Public Policy',
        tuition: '243 € / год (госсбор)',
        scholarship: 'Грант Eiffel Excellence + субсидия CAF на жилье',
        quote: 'Французская система CAF возвращает студентам до 40% стоимости аренды жилья ежемесячно, даже иностранцам. Это очень помогает в Париже.',
        highlight: 'Субсидия CAF на жилье'
      }
    ]
  };

  const currentList = stories[activeDegree];

  return (
    <section className="my-14 max-w-6xl mx-auto text-left">
      {/* Top Banner / Social Proof Counter */}
      <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border-2 border-[#8B0000]/15 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Истории поступления и офферы 2025 / 2026</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-[#8B0000] tracking-tight">
              Реальные кейсы поступления со стипендиями
            </h3>
            <p className="text-xs sm:text-sm text-[#2D1810]/75 font-medium mt-1 max-w-xl">
              Студенты, которые уже учатся в топ-ВУЗах Европы. Показываем реальные средние баллы, гранты и особенности каждого поступления.
            </p>
          </div>

          {/* Segmented Degree Control */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE0CD] border border-[#8B0000]/20 self-start md:self-center">
            <button
              onClick={() => setActiveDegree('bachelor')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDegree === 'bachelor'
                  ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000]'
              }`}
            >
              Бакалавриат (3–4 года)
            </button>
            <button
              onClick={() => setActiveDegree('master')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDegree === 'master'
                  ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000]'
              }`}
            >
              Магистратура (1–2 года)
            </button>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {currentList.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-3xl p-6 border border-[#8B0000]/15 hover:border-[#8B0000] transition-all shadow-xs flex flex-col justify-between group"
          >
            <div>
              {/* Top Tag & Flag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000]">
                  {story.highlight}
                </span>
                <span className="text-xl" title={story.country}>{story.flag}</span>
              </div>

              {/* Student Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-black text-sm">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-[#8B0000] text-sm sm:text-base leading-tight">
                    {story.name} ({story.age})
                  </h4>
                  <span className="text-[11px] text-[#2D1810]/60 font-medium">
                    {story.from} • GPA: {story.gpa}
                  </span>
                </div>
              </div>

              {/* University & Program */}
              <div className="p-3 bg-[#FAF5EE] rounded-2xl border border-[#8B0000]/10 mb-3 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D1810]">
                  <Building2 className="w-3.5 h-3.5 text-[#8B0000] shrink-0" />
                  <span className="line-clamp-1">{story.targetUni}</span>
                </div>
                <div className="text-[11px] text-[#2D1810]/70 font-medium line-clamp-1">
                  {story.program}
                </div>
              </div>

              {/* Financial Conditions */}
              <div className="space-y-1.5 mb-4 text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#2D1810]/70">Обучение:</span>
                  <span className="font-extrabold text-[#8B0000]">{story.tuition}</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#2D1810]/70">Поддержка:</span>
                  <span className="font-bold text-[#2D1810] text-right line-clamp-1">{story.scholarship}</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-[#2D1810]/70">Язык подачи:</span>
                  <span className="font-bold text-[#2D1810]">{story.language}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xs text-[#2D1810]/85 italic bg-[#FAF5EE]/70 p-3 rounded-2xl border-l-2 border-[#8B0000] leading-relaxed mb-4">
                «{story.quote}»
              </blockquote>
            </div>

            {/* Action */}
            <button
              onClick={onStartSearch}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF5EE] hover:bg-[#8B0000] text-[#8B0000] hover:text-[#EFE0CD] text-xs font-bold transition-all border border-[#8B0000]/20 cursor-pointer"
            >
              <span>Подобрать похожие программы</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
