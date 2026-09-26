export const countries = [
  {
    id: 'germany',
    name: 'Германия',
    flag: '🇩🇪',
    symbol: '🏛️',
    landmark: 'Бранденбургские ворота',
    landmarkCity: 'Берлин',
    landmarkSvg: 'gate',
    accentColor: 'from-amber-500 to-red-600',
    tuitionSummary: '0 € в большинстве госвузов',
    avgLivingCost: '900 - 1 100 €/мес',
    languageBarrier: 'Низкий в науке, средний в быту',
    postStudyVisa: '18 месяцев для поиска работы',
    highlights: [
      'Бесплатное обучение даже для студентов не из ЕС',
      'Сильнейшие технические и инженерные школы мира',
      'Стипендии DAAD и развитая система стажировок'
    ],
    vibe: 'Идеальный порядок, мощная промышленность и доступность образования'
  },
  {
    id: 'netherlands',
    name: 'Нидерланды',
    flag: '🇳🇱',
    symbol: '🚲',
    landmark: 'Ветряные мельницы и каналы',
    landmarkCity: 'Амстердам',
    landmarkSvg: 'windmill',
    accentColor: 'from-orange-500 to-blue-600',
    tuitionSummary: '2 500 € (EU) / 8 000 - 15 000 € (Non-EU)',
    avgLivingCost: '1 000 - 1 350 €/мес',
    languageBarrier: 'Почти нулевой: 95% говорят на английском',
    postStudyVisa: 'Orientation Year (12 месяцев)',
    highlights: [
      'Более 2 100 программ целиком на английском языке',
      'Инновационное интерактивное обучение (Problem-Based Learning)',
      'Европейский хаб IT, стартапов и логистики'
    ],
    vibe: 'Открытость, велосипеды, интернациональная среда и прогрессивность'
  },
  {
    id: 'italy',
    name: 'Италия',
    flag: '🇮🇹',
    symbol: '🏛️',
    landmark: 'Колизей и Дуомо',
    landmarkCity: 'Рим / Милан',
    landmarkSvg: 'colosseum',
    accentColor: 'from-emerald-500 to-red-500',
    tuitionSummary: '800 - 3 500 €/год (зависит от дохода семьи)',
    avgLivingCost: '700 - 950 €/мес',
    languageBarrier: 'Средний, итальянцы дружелюбны',
    postStudyVisa: '12 месяцев для выпускников магистратуры',
    highlights: [
      'Региональная стипендия DSU: 100% бесплатное обучение + жилье + до 7 500 €/год',
      'Мировые лидеры в дизайне, архитектуре, моде и инженерии',
      'Богатейшее культурное наследие и средиземноморский климат'
    ],
    vibe: 'Тепло, великолепная кухня, искусство и доступные стипендии DSU'
  },
  {
    id: 'france',
    name: 'Франция',
    flag: '🇫🇷',
    symbol: '🗼',
    landmark: 'Эйфелева башня и Лувр',
    landmarkCity: 'Париж',
    landmarkSvg: 'eiffel',
    accentColor: 'from-blue-600 to-rose-600',
    tuitionSummary: '175 - 3 770 €/год в госвузах',
    avgLivingCost: '800 - 1 200 €/мес',
    languageBarrier: 'Средний: французский ценится, но есть программы на EN',
    postStudyVisa: '12–24 месяца (APS / Recherche d\'emploi)',
    highlights: [
      'Субсидия CAF на аренду жилья (возврат до 30-40% арендной платы)',
      'Стипендия Eiffel Excellence для сильных абитуриентов',
      'Престижные Grandes Écoles и старейшие университеты'
    ],
    vibe: 'Культурная столица мира, гастрономия, студенческие льготы и шарм'
  },
  {
    id: 'spain',
    name: 'Испания',
    flag: '🇪🇸',
    symbol: '☀️',
    landmark: 'Саграда Фамилия',
    landmarkCity: 'Барселона',
    landmarkSvg: 'sagrada',
    accentColor: 'from-amber-400 to-red-600',
    tuitionSummary: '1 200 - 4 000 €/год в госвузах',
    avgLivingCost: '650 - 900 €/мес',
    languageBarrier: 'Английский в кампусах, испанский полезен для жизни',
    postStudyVisa: '12 месяцев (Permiso de residencia para búsqueda de empleo)',
    highlights: [
      'Один из самых комфортных климатов в Европе (300+ солнечных дней)',
      'Доступная стоимость жизни и аренды жилья',
      'Топовые бизнес-школы (IE, ESADE, IESE) мирового уровня'
    ],
    vibe: 'Солнце, море, открытые люди и баланс между учебой и радостью жизни'
  },
  {
    id: 'czechia',
    name: 'Чехия',
    flag: '🇨🇿',
    symbol: '🌉',
    landmark: 'Карлов мост и Пражский град',
    landmarkCity: 'Прага',
    landmarkSvg: 'bridge',
    accentColor: 'from-blue-500 to-red-600',
    tuitionSummary: '0 € на чешском языке / от 2 500 € на английском',
    avgLivingCost: '600 - 850 €/мес',
    languageBarrier: 'Славянский язык учится быстро за 9-10 месяцев',
    postStudyVisa: '9 месяцев для поиска работы',
    highlights: [
      'Абсолютно бесплатное обучение на чешском для всех иностранцев',
      'Карлов университет — один из старейших в Центральной Европе (1348 г.)',
      'Высокая безопасность и центральное географическое положение'
    ],
    vibe: 'Сказочная архитектура, уютные улочки и доступность для старта'
  },
  {
    id: 'austria',
    name: 'Австрия',
    flag: '🇦🇹',
    symbol: '🏔️',
    landmark: 'Дворец Бельведер и Альпы',
    landmarkCity: 'Вена',
    landmarkSvg: 'palace',
    accentColor: 'from-red-600 to-rose-400',
    tuitionSummary: '726 € за семестр для большинства стран',
    avgLivingCost: '850 - 1 150 €/мес',
    languageBarrier: 'Немецкий в приоритете, растущее число магистерских программ на EN',
    postStudyVisa: '12 месяцев (Rot-Weiß-Rot – Karte)',
    highlights: [
      'Вена регулярно признается самым комфортным для жизни городом планеты',
      'Очень умеренная стоимость учебы (~1 450 € в год)',
      'Безупречная академическая репутация и безопасность'
    ],
    vibe: 'Классическая музыка, идеальная инфраструктура, парки и альпийский дух'
  },
  {
    id: 'sweden',
    name: 'Швеция',
    flag: '🇸🇪',
    symbol: '✨',
    landmark: 'Северное сияние и Гамла Стан',
    landmarkCity: 'Стокгольм',
    landmarkSvg: 'nordic',
    accentColor: 'from-blue-500 to-yellow-400',
    tuitionSummary: '0 € (EU) / 9 000 - 15 000 € (Non-EU)',
    avgLivingCost: '1 000 - 1 400 €/мес',
    languageBarrier: 'Практически отсутствует, почти все свободно говорят на EN',
    postStudyVisa: '12 месяцев для поиска работы',
    highlights: [
      'Родина глобальных инноваций: Spotify, Skype, Klarna, IKEA',
      'Лидер по устойчивому развитию и экологии',
      'Стипендии Swedish Institute (SI) с покрытием расходов'
    ],
    vibe: 'Лагом, экологичность, передовые технологии и абсолютное равенство'
  },
  {
    id: 'poland',
    name: 'Польша',
    flag: '🇵🇱',
    symbol: '🏰',
    landmark: 'Королевский замок и Старый город',
    landmarkCity: 'Варшава',
    landmarkSvg: 'castle',
    accentColor: 'from-red-500 to-slate-400',
    tuitionSummary: '1 500 - 3 500 €/год',
    avgLivingCost: '500 - 750 €/мес',
    languageBarrier: 'Польский близок, программы на английском очень доступны',
    postStudyVisa: '9 месяцев для поиска работы',
    highlights: [
      'Самая доступная стоимость проживания среди стран ЕС',
      'Бурно развивающийся европейский IT и финтех кластер',
      'Простой процесс адаптации и признания дипломов'
    ],
    vibe: 'Динамичный рост, молодежные кампусы и отличный бюджетный старт'
  }
];
