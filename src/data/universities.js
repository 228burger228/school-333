export const universities = [
  // --- ИСПАНИЯ ---
  {
    id: 'uab',
    name: 'Autonomous University of Barcelona (UAB)',
    localName: 'Universitat Autònoma de Barcelona',
    countryId: 'spain',
    countryName: 'Испания',
    flag: '🇪🇸',
    city: 'Барселона',
    qsRank: '#149 в мире (#1 в Испании)',
    photo: 'universities/spain.jpg',
    fields: ['business', 'biomedicine', 'humanities', 'design', 'politics'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2200,
      text: '2 200 – 4 100 € / год (госвуз)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Стипендии Министерства образования Испании (MEC)',
      coverage: 'Покрытие стоимости учебы + до 3 000 €',
      type: 'partial',
      description: 'Государственная программа поддержки иностранных студентов с высоким средним баллом.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '80',
      noExamOption: true,
      examDescription: 'DELE B2 для курсов на испанском или IELTS 6.0 для англоязычных программ'
    },
    deadline: '1 июня (ранняя подача) / 10 июля',
    livingCostMonth: 780,
    overview: 'Один из флагманов высшего образования Испании. Живописный зеленый кампус американского типа в 25 минутах от центра Барселоны.',
    keyPrograms: [
      { name: 'Business Management and Technology', degree: 'Bachelor', lang: 'English', duration: '4 года' },
      { name: 'International Relations & Global Governance', degree: 'Bachelor & Master', lang: 'English', duration: '3-4 года' },
      { name: 'Bioinformatics and Health Data', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Audiovisual Communication & Media Design', degree: 'Bachelor', lang: 'ES / EN', duration: '4 года' }
    ],
    admissionChecklist: [
      'Омологация школьного аттестата через UNEDasiss',
      'Сдача профильных экзаменов PCE при необходимости',
      'Сертификат IELTS 6.0 или DELE B2'
    ],
    livingCostDetails: {
      housing: '350 – 550 € (комната в Vila Universitària)',
      food: '200 – 250 €',
      transport: '20 € (молодежный T-Jove на 3 месяца)'
    },
    websiteUrl: 'https://www.uab.cat',
    landmarkSymbol: 'Саграда Фамилия & Барселона'
  },
  {
    id: 'ucm',
    name: 'Complutense University of Madrid',
    localName: 'Universidad Complutense de Madrid',
    countryId: 'spain',
    countryName: 'Испания',
    flag: '🇪🇸',
    city: 'Мадрид',
    qsRank: '#171 в мире',
    photo: 'universities/spain.jpg',
    fields: ['law', 'humanities', 'politics', 'biomedicine', 'health'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2500,
      text: '2 500 – 4 500 € / год',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Santander & UCM International Grant',
      coverage: 'до 5 000 € / год',
      type: 'partial',
      description: 'Гранты фонда Сантандер для студентов юридических и социально-политических направлений.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '85',
      noExamOption: false,
      examDescription: 'DELE B2/C1 или IELTS 6.5 для англоязычных потоков'
    },
    deadline: '30 мая / 15 июля',
    livingCostMonth: 820,
    overview: 'Один из старейших университетов мира, основанный в 1293 году. Среди выпускников — лауреаты Нобелевской премии и ведущие европейские политики.',
    keyPrograms: [
      { name: 'European Law and Global Affairs', degree: 'Master', lang: 'English / Spanish', duration: '2 года' },
      { name: 'Political Science & Administration', degree: 'Bachelor', lang: 'Spanish / English', duration: '4 года' },
      { name: 'Pharmacy and Public Health', degree: 'Master', lang: 'Spanish', duration: '5 лет' }
    ],
    admissionChecklist: [
      'Апостиль и перевод аттестата/диплома на испанский',
      'Заверение UNEDasiss',
      'Мотивационное письмо и CV'
    ],
    livingCostDetails: {
      housing: '380 – 600 €',
      food: '220 – 260 €',
      transport: '20 € (Abono Joven)'
    },
    websiteUrl: 'https://www.ucm.es',
    landmarkSymbol: 'Королевский дворец Мадрида'
  },

  // --- ИТАЛИЯ ---
  {
    id: 'polimi',
    name: 'Politecnico di Milano',
    localName: 'Politecnico di Milano',
    countryId: 'italy',
    countryName: 'Италия',
    flag: '🇮🇹',
    city: 'Милан',
    qsRank: '#111 в мире (#7 по Дизайну и Архитектуре)',
    photo: 'universities/italy.jpg',
    fields: ['engineering', 'design', 'it', 'architecture'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 890,
      text: '890 – 3 890 € / год (0 € по стипендии DSU)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Стипендия DSU (Diritto allo Studio)',
      coverage: '100% грант на учебу + жилье + до 7 500 €/год наличными',
      type: 'full',
      description: 'Государственная социальная стипендия на основе дохода семьи (ISEE). Доступна иностранным студентам.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '78',
      noExamOption: true,
      examDescription: 'IELTS 6.0 или справка об обучении на английском'
    },
    deadline: '15 мая (первая волна) / 15 июля (вторая волна)',
    livingCostMonth: 850,
    overview: 'Крупнейший технический университет Италии, ведущая школа дизайна, архитектуры и инженерии в сердце европейской моды.',
    keyPrograms: [
      { name: 'Product Service System Design', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Computer Science and Engineering', degree: 'Bachelor & Master', lang: 'English', duration: '2-3 года' },
      { name: 'Architecture and Urban Design', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Mechanical & Automation Engineering', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Диплом бакалавра / Аттестат (12 лет образования)',
      'Сертификат IELTS 6.0+',
      'Портфолио проектов (для Дизайна и Архитектуры)',
      'Справка о доходах семьи для стипендии DSU'
    ],
    livingCostDetails: {
      housing: '350 – 550 € (бесплатно при стипендии DSU)',
      food: '200 – 250 €',
      transport: '22 € (проездной ATM)'
    },
    websiteUrl: 'https://www.polimi.it',
    landmarkSymbol: 'Дуомо & Галерея Милана'
  },
  {
    id: 'unibo',
    name: 'University of Bologna',
    localName: 'Alma Mater Studiorum - Università di Bologna',
    countryId: 'italy',
    countryName: 'Италия',
    flag: '🇮🇹',
    city: 'Болонья',
    qsRank: '#133 в мире (#1 старейший университет мира, 1088 г.)',
    photo: 'universities/italy.jpg',
    fields: ['law', 'humanities', 'business', 'biomedicine', 'politics'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 157,
      text: '157 – 2 800 € / год (по ISEE снижается до 157 €)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'ER.GO Scholarship (Италия)',
      coverage: 'Бесплатное обучение + бесплатное общежитие + 7 200 € / год',
      type: 'full',
      description: 'Региональная стипендия Эмилии-Романьи. Назначается по финансовому положению семьи.'
    },
    languageReq: {
      ielts: '5.5',
      toefl: '72',
      noExamOption: true,
      examDescription: 'IELTS 5.5-6.0 или сдача вступительного теста TOLC'
    },
    deadline: '30 апреля / 15 июля',
    livingCostMonth: 720,
    overview: 'Старейший непрерывно действующий университет западного мира. Родина Болонского процесса и один из самых оживленных студенческих центров Европы.',
    keyPrograms: [
      { name: 'Economics and Finance (CLEF)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'International and Diplomatic Sciences', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Pharmacy & Biotechnology', degree: 'Bachelor & Master', lang: 'English', duration: '3-5 лет' }
    ],
    admissionChecklist: [
      'Сдача онлайн-теста TOLC',
      'Декларация Dichiarazione di Valore / CIMEA',
      'Заявка на стипендию ER.GO'
    ],
    livingCostDetails: {
      housing: '300 – 450 € (бесплатно по ER.GO)',
      food: '180 – 230 €',
      transport: '20 € в месяц'
    },
    websiteUrl: 'https://www.unibo.it',
    landmarkSymbol: 'Две башни Болоньи'
  },

  // --- ГЕРМАНИЯ ---
  {
    id: 'tum',
    name: 'Technical University of Munich (TUM)',
    localName: 'Technische Universität München',
    countryId: 'germany',
    countryName: 'Германия',
    flag: '🇩🇪',
    city: 'Мюнхен',
    qsRank: '#28 в мире (#1 в Германии)',
    photo: 'universities/germany.jpg',
    fields: ['engineering', 'it', 'business', 'natural_sciences', 'biomedicine'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 150,
      text: '~150 € / семестр (0 € за само обучение)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'DAAD & Deutschlandstipendium',
      coverage: '300 – 934 € в месяц',
      type: 'full',
      description: 'Государственная программа поддержки талантливых студентов и ученых.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '88',
      noExamOption: false,
      examDescription: 'IELTS 6.5+ или TOEFL 88+ для программ на английском, либо TestDaF для немецкого'
    },
    deadline: '15 июля (зимний) / 15 января (летний)',
    livingCostMonth: 1050,
    overview: 'Один из самых авторитетных технических институтов мира, ключевой партнер BMW, Siemens и европейского стартап-хаба.',
    keyPrograms: [
      { name: 'Informatics & Artificial Intelligence', degree: 'Bachelor & Master', lang: 'EN / DE', duration: '3 года' },
      { name: 'Management & Technology (TUM-BWL)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Robotics, Cognition, Intelligence', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Аттестат с высоким средним баллом',
      'Сертификат IELTS 6.5 или TestDaF',
      'Для выпускников 11 классов: 1 год Studienkolleg или ВУЗа'
    ],
    livingCostDetails: {
      housing: '450 – 650 €',
      food: '250 – 300 €',
      transport: '29 € (Deutschlandticket)'
    },
    websiteUrl: 'https://www.tum.de',
    landmarkSymbol: 'Баварские Альпы & Бранденбургские ворота'
  },
  {
    id: 'rwth',
    name: 'RWTH Aachen University',
    localName: 'Rheinisch-Westfälische Technische Hochschule Aachen',
    countryId: 'germany',
    countryName: 'Германия',
    flag: '🇩🇪',
    city: 'Аахен',
    qsRank: '#99 в мире (#2 по машиностроению в Германии)',
    photo: 'universities/germany.jpg',
    fields: ['engineering', 'it', 'natural_sciences'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 320,
      text: '320 € / семестр (включает проездной по всей Германии)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Гранты DAAD & NRW Scholarship',
      coverage: 'до 934 € в месяц',
      type: 'full',
      description: 'Федеральные программы поддержки студентов в технических специальностях.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 для англоязычных программ или TestDaF 4x4 для немецких'
    },
    deadline: '1 марта / 15 июля',
    livingCostMonth: 820,
    overview: 'Инженерное сердце немецкого автопрома и тяжелого машиностроения. Прямые лаборатории с Siemens, BMW, Bosch прямо в кампусе.',
    keyPrograms: [
      { name: 'Mechanical Engineering (Maschinenbau)', degree: 'Bachelor & Master', lang: 'DE / EN', duration: '3-4 года' },
      { name: 'Computer Science & Data Engineering', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Automotive Engineering', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Школьный аттестат + 1 курс ВУЗа или Studienkolleg',
      'Сертификат немецкого или английского языка',
      'Прохождение GRE для магистерских программ'
    ],
    livingCostDetails: {
      housing: '280 – 450 €',
      food: '200 – 240 €',
      transport: '0 € (входит в студенческий взнос)'
    },
    websiteUrl: 'https://www.rwth-aachen.de',
    landmarkSymbol: 'Аахенский собор'
  },

  // --- ФРАНЦИЯ ---
  {
    id: 'sorbonne',
    name: 'Sorbonne University',
    localName: 'Sorbonne Université',
    countryId: 'france',
    countryName: 'Франция',
    flag: '🇫🇷',
    city: 'Париж',
    qsRank: '#59 в мире',
    photo: 'universities/france.jpg',
    fields: ['humanities', 'biomedicine', 'natural_sciences', 'health'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 175,
      text: '175 € (Bachelor) / 243 € (Master) в год',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Eiffel Excellence & Субсидия CAF',
      coverage: '1 181 €/мес + компенсация жилья до 250 €/мес',
      type: 'full',
      description: 'Французская правительственная стипендия Eiffel + государственная субсидия на жилье CAF.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '85',
      noExamOption: false,
      examDescription: 'DELF B2 / DALF C1 для французского или IELTS 6.5 для программ на английском'
    },
    deadline: '15 декабря (Campus France) / 15 марта',
    livingCostMonth: 950,
    overview: 'Легендарный исторический университет в Латинском квартале Парижа с глубочайшими академическими традициями.',
    keyPrograms: [
      { name: 'Biomedical Sciences & Genetics', degree: 'Bachelor & Master', lang: 'EN / FR', duration: '3 года' },
      { name: 'Philosophy and European Literature', degree: 'Bachelor', lang: 'French', duration: '3 года' },
      { name: 'Quantum Information Science', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Подача досье через портал Campus France',
      'Академическая выписка с отличными оценками',
      'DELF B2 или IELTS 6.5+'
    ],
    livingCostDetails: {
      housing: '450 – 700 € (со скидкой CAF)',
      food: '200 – 270 €',
      transport: '38 € (Imagine R)'
    },
    websiteUrl: 'https://www.sorbonne-universite.fr',
    landmarkSymbol: 'Эйфелева башня & Латинский квартал'
  },
  {
    id: 'sciencespo',
    name: 'Sciences Po Paris',
    localName: 'Institut d\'études politiques de Paris',
    countryId: 'france',
    countryName: 'Франция',
    flag: '🇫🇷',
    city: 'Париж',
    qsRank: '#2 в мире по Политике и Международным отношениям',
    photo: 'universities/france.jpg',
    fields: ['politics', 'law', 'business', 'humanities'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 14000,
      text: 'От 0 € по стипендиям до 14 000 € / год',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Emile Boutmy Scholarship',
      coverage: 'до 14 210 € в год (полная оплата учебы)',
      type: 'full',
      description: 'Специальная стипендия Sciences Po для выдающихся международных студентов.'
    },
    languageReq: {
      ielts: '7.0',
      toefl: '100',
      noExamOption: false,
      examDescription: 'IELTS 7.0 или TOEFL 100+ для англоязычного трека'
    },
    deadline: '28 февраля',
    livingCostMonth: 1050,
    overview: 'Ведущий мировой институт подготовки президентов, премьер-министров, дипломатов и лидеров международных организаций.',
    keyPrograms: [
      { name: 'International Governance and Diplomacy', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'European Studies & Public Affairs', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Economics and Public Policy', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Мотивационное эссе и три академических рекомендации',
      'IELTS 7.0+',
      'Онлайн-собеседование с приемной комиссией'
    ],
    livingCostDetails: {
      housing: '550 – 800 €',
      food: '250 – 300 €',
      transport: '38 €'
    },
    websiteUrl: 'https://www.sciencespo.fr',
    landmarkSymbol: 'Сен-Жермен-де-Пре'
  },

  // --- СЛОВАКИЯ ---
  {
    id: 'comenius',
    name: 'Comenius University in Bratislava',
    localName: 'Univerzita Komenského v Bratislave',
    countryId: 'slovakia',
    countryName: 'Словакия',
    flag: '🇸🇰',
    city: 'Братислава',
    qsRank: '#651 в мире (#1 в Словакии)',
    photo: 'universities/central.jpg',
    fields: ['biomedicine', 'law', 'it', 'natural_sciences', 'humanities'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 0,
      text: '0 € (на словацком языке) / от 2 500 € (на английском)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Стипендия Правительства Словацкой Республики',
      coverage: 'Бесплатная учеба + до 400 € / месяц',
      type: 'full',
      description: 'Государственная программа Словакии для талантливых иностранных абитуриентов.'
    },
    languageReq: {
      ielts: '5.5',
      toefl: '70',
      noExamOption: true,
      examDescription: 'Без экзамена при зачислении на словацкое отделение после подготовительного года'
    },
    deadline: '28 февраля / 30 апреля',
    livingCostMonth: 580,
    overview: 'Старейший университет Словакии (основан в 1919 г.), славится медицинским и юридическим факультетами в получасе езды от Вены.',
    keyPrograms: [
      { name: 'General Medicine (MUDr)', degree: 'Master', lang: 'English / SK', duration: '6 лет' },
      { name: 'Applied Informatics & Software', degree: 'Bachelor', lang: 'Slovak / English', duration: '3 года' },
      { name: 'European Law and Integration', degree: 'Master', lang: 'Slovak', duration: '2 года' }
    ],
    admissionChecklist: [
      'Нострификация школьного аттестата в Словакии',
      'Базовый сертификат словацкого B1-B2 или английского IELTS 5.5'
    ],
    livingCostDetails: {
      housing: '150 – 250 € (университетские общежития)',
      food: '160 – 200 €',
      transport: '12 € в месяц'
    },
    websiteUrl: 'https://uniba.sk',
    landmarkSymbol: 'Братиславский град & Дунай'
  },

  // --- ПОРТУГАЛИЯ ---
  {
    id: 'ulisboa',
    name: 'University of Lisbon',
    localName: 'Universidade de Lisboa',
    countryId: 'portugal',
    countryName: 'Португалия',
    flag: '🇵🇹',
    city: 'Лиссабон',
    qsRank: '#266 в мире (#1 в Португалии)',
    photo: 'universities/spain.jpg',
    fields: ['engineering', 'it', 'design', 'business', 'law'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 1500,
      text: '1 500 – 3 500 € / год (очень доступно)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Стипендии Camões & FCT',
      coverage: 'Покрытие стоимости учебы + до 650 €/мес',
      type: 'partial',
      description: 'Португальские фонды поддержки научно-технических исследований.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '80',
      noExamOption: true,
      examDescription: 'IELTS 6.0 для программ на английском или CAPLE B2'
    },
    deadline: '31 мая / 15 июля',
    livingCostMonth: 680,
    overview: 'Ведущий исследовательский центр Португалии. Кампус Instituto Superior Técnico (IST) готовит инженеров мирового класса.',
    keyPrograms: [
      { name: 'Data Science and Engineering', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Architecture and Urbanism', degree: 'Bachelor & Master', lang: 'PT / EN', duration: '5 лет' },
      { name: 'International Management & Finance', degree: 'Bachelor', lang: 'English', duration: '3 года' }
    ],
    admissionChecklist: [
      'Эквиваленция аттестата в DGES Portugal',
      'IELTS 6.0 или вступительный экзамен Enade'
    ],
    livingCostDetails: {
      housing: '280 – 450 €',
      food: '180 – 220 €',
      transport: '20 € (проездной Navegante)'
    },
    websiteUrl: 'https://www.ulisboa.pt',
    landmarkSymbol: 'Башня Белен & Желтый трамвай'
  },

  // --- АВСТРИЯ ---
  {
    id: 'univie',
    name: 'University of Vienna',
    localName: 'Universität Wien',
    countryId: 'austria',
    countryName: 'Австрия',
    flag: '🇦🇹',
    city: 'Вена',
    qsRank: '#130 в мире',
    photo: 'universities/central.jpg',
    fields: ['humanities', 'business', 'law', 'it', 'natural_sciences'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 726,
      text: '726 € / семестр (~1 450 € / год)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'ÖAD Grants & Ernst Mach Grant',
      coverage: 'до 1 050 € в месяц',
      type: 'partial',
      description: 'Австрийские академические гранты для иностранных студентов.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: true,
      examDescription: 'Немецкий A2 для зачисления на курсы VWU при ВУЗе, либо B2/C1'
    },
    deadline: '5 сентября / 5 февраля',
    livingCostMonth: 900,
    overview: 'Один из крупнейших и старейших университетов Европы (основан в 1365 г.), выпустивший 15 нобелевских лауреатов.',
    keyPrograms: [
      { name: 'Data Science & Scientific Computing', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Economics and Global Business', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'International Legal Studies (LLM)', degree: 'Master', lang: 'English', duration: '1 год' }
    ],
    admissionChecklist: [
      'Справка об особом праве на учебу (Studienplatznachweis)',
      'Аттестат с апостилем и нотариальным переводом',
      'Немецкий язык от A2'
    ],
    livingCostDetails: {
      housing: '380 – 550 €',
      food: '230 – 280 €',
      transport: '30 € в месяц'
    },
    websiteUrl: 'https://www.univie.ac.at',
    landmarkSymbol: 'Дворец Бельведер & Венская опера'
  },

  // --- ФИНЛЯНДИЯ ---
  {
    id: 'helsinki',
    name: 'University of Helsinki',
    localName: 'Helsingin yliopisto',
    countryId: 'finland',
    countryName: 'Финляндия',
    flag: '🇫🇮',
    city: 'Хельсинки',
    qsRank: '#115 в мире (#1 в Финляндии)',
    photo: 'universities/nordic.jpg',
    fields: ['natural_sciences', 'biomedicine', 'it', 'health', 'humanities'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 13000,
      text: '0 € (EU) / 13 000 € (Non-EU, гранты до 100%)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Helsinki University Scholarship Programme',
      coverage: '100% покрытия учебы + 10 000 € грант на жизнь',
      type: 'full',
      description: 'Финская государственная стипендия для лучших иностранных студентов магистратуры.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '92',
      noExamOption: false,
      examDescription: 'IELTS 6.5 (минимум 6.0 по writing) или TOEFL 92+'
    },
    deadline: '3 января (единый финский intake)',
    livingCostMonth: 950,
    overview: 'Флагман финской системы образования — самой передовой в мире. Мировые исследования в экологии, генетике и квантовых вычислениях.',
    keyPrograms: [
      { name: 'Atmospheric Sciences & Climate Change', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Computer Science (AI & Algorithms)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Translational Medicine', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Подача через общефинский портал Studyinfo.fi',
      'IELTS 6.5+ или TOEFL 92+',
      'Академическое мотивационное письмо'
    ],
    livingCostDetails: {
      housing: '350 – 550 € (HOAS студенческое жилье)',
      food: '220 – 280 €',
      transport: '35 € (HSL студенческий тариф)'
    },
    websiteUrl: 'https://www.helsinki.fi',
    landmarkSymbol: 'Белоснежный собор Хельсинки & Озера'
  },

  // --- ШВЕЦИЯ ---
  {
    id: 'kth',
    name: 'KTH Royal Institute of Technology',
    localName: 'Kungliga Tekniska högskolan',
    countryId: 'sweden',
    countryName: 'Швеция',
    flag: '🇸🇪',
    city: 'Стокгольм',
    qsRank: '#73 в мире',
    photo: 'universities/nordic.jpg',
    fields: ['engineering', 'it', 'design', 'natural_sciences'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 0,
      text: '0 € (EU) / 13 000 – 16 000 € (Non-EU)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'KTH Scholarship & Swedish Institute (SI)',
      coverage: '100% покрытия учебы + стипендия 12 000 SEK (~1 050 €/мес)',
      type: 'full',
      description: 'Государственная стипендия правительства Швеции Swedish Institute покрывает проживание, страховку и учебу.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 (минимум 5.5 по секциям) или TOEFL 90+'
    },
    deadline: '15 января (Universityadmissions.se)',
    livingCostMonth: 1150,
    overview: 'Главный центр скандинавской инженерной мысли. KTH тесно сотрудничает со Spotify, Ericsson, Volvo и шведскими эко-кластерами.',
    keyPrograms: [
      { name: 'Information and Communication Technology (BSc)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'Machine Learning (MSc)', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Interactive Media Technology & Design', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Подача через общешведский портал Universityadmissions.se',
      'Выписка оценок с сильным математическим профилем',
      'Сертификат IELTS 6.5 или TOEFL 90'
    ],
    livingCostDetails: {
      housing: '500 – 750 € (очередь SSSB)',
      food: '260 – 320 €',
      transport: '55 € (SL Stockholm)'
    },
    websiteUrl: 'https://www.kth.se',
    landmarkSymbol: 'Северное сияние & Стокгольм'
  },

  // --- НОРВЕГИЯ ---
  {
    id: 'uio',
    name: 'University of Oslo',
    localName: 'Universitetet i Oslo',
    countryId: 'norway',
    countryName: 'Норвегия',
    flag: '🇳🇴',
    city: 'Осло',
    qsRank: '#117 в мире (#1 в Норвегии)',
    photo: 'universities/nordic.jpg',
    fields: ['natural_sciences', 'biomedicine', 'it', 'law', 'humanities'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 11000,
      text: '8 000 – 13 000 € / год (госвуз)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Norwegian Research Council Grants',
      coverage: 'Покрытие расходов на исследования и гранты',
      type: 'partial',
      description: 'Норвежские научные стипендии для исследовательских программ.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 или TOEFL 90+'
    },
    deadline: '1 декабря / 1 февраля',
    livingCostMonth: 1250,
    overview: 'Старейший и престижнейший университет Норвегии. Лидер в изучении морской экологии, энергетики, астрофизики и международного права.',
    keyPrograms: [
      { name: 'Marine Biology & Arctic Ecology', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Computational Science & Data', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Public International Law', degree: 'Master', lang: 'English', duration: '1.5 года' }
    ],
    admissionChecklist: [
      'Подача через портал Samordna opptak',
      'Выписка оценок GPA > 4.2/5',
      'Сертификат IELTS 6.5+'
    ],
    livingCostDetails: {
      housing: '550 – 800 € (SiO общежития)',
      food: '300 – 380 €',
      transport: '45 € (Ruter проездной)'
    },
    websiteUrl: 'https://www.uio.no',
    landmarkSymbol: 'Норвежские фьорды & Осло'
  },

  // --- ЧЕХИЯ ---
  {
    id: 'charles',
    name: 'Charles University in Prague',
    localName: 'Univerzita Karlova',
    countryId: 'czechia',
    countryName: 'Чехия',
    flag: '🇨🇿',
    city: 'Прага',
    qsRank: '#248 в мире (#1 в Центральной Европе)',
    photo: 'universities/central.jpg',
    fields: ['biomedicine', 'humanities', 'it', 'business', 'law'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 0,
      text: '0 € (на чешском языке) / 3 200 – 5 500 € (на английском)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Государственная стипендия Чешской Республики',
      coverage: 'Бесплатное обучение + 550 € в месяц',
      type: 'partial',
      description: 'Чехия гарантирует 100% бесплатное высшее образование для иностранцев при обучении на чешском языке.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '80',
      noExamOption: true,
      examDescription: 'Без экзамена при зачислении на языковые курсы UJOP или чешский B2'
    },
    deadline: '28 февраля / 31 мая',
    livingCostMonth: 650,
    overview: 'Основан в 1348 году королем Карлом IV. Один из старейших университетов мира с легендарными медицинскими и гуманитарными факультетами.',
    keyPrograms: [
      { name: 'General Medicine (MUDr)', degree: 'Master', lang: 'English / CZ', duration: '6 лет' },
      { name: 'Computer Science (Artificial Intelligence)', degree: 'Bachelor & Master', lang: 'EN / CZ', duration: '3 года' },
      { name: 'International Relations & European Studies', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' }
    ],
    admissionChecklist: [
      'Нострификация школьного аттестата или диплома в Чехии',
      'Вступительные тесты SCIO / OSP',
      'Сертификат чешского B2 или IELTS 6.0'
    ],
    livingCostDetails: {
      housing: '200 – 350 € (общежитие Kolej)',
      food: '180 – 240 €',
      transport: '6 € в месяц (Lítačka)'
    },
    websiteUrl: 'https://cuni.cz',
    landmarkSymbol: 'Карлов мост & Пражский град'
  },

  // --- ШВЕЙЦАРИЯ ---
  {
    id: 'eth',
    name: 'ETH Zurich',
    localName: 'Eidgenössische Technische Hochschule Zürich',
    countryId: 'switzerland',
    countryName: 'Швейцария',
    flag: '🇨🇭',
    city: 'Цюрих',
    qsRank: '#7 в мире (#1 в континентальной Европе)',
    photo: 'universities/central.jpg',
    fields: ['engineering', 'it', 'natural_sciences', 'architecture'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 730,
      text: '730 CHF (~760 €) за семестр в госвузе №7 в мире!',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Excellence Scholarship & Opportunity Programme (ESOP)',
      coverage: 'Полная стипендия 12 000 CHF / семестр + освобождение от взносов',
      type: 'full',
      description: 'Престижная стипендия ETH Zurich для выдающихся студентов магистратуры со всего мира.'
    },
    languageReq: {
      ielts: '7.0',
      toefl: '100',
      noExamOption: false,
      examDescription: 'IELTS 7.0 или TOEFL 100+ для магистратуры на английском'
    },
    deadline: '15 декабря (международные заявки)',
    livingCostMonth: 1650,
    overview: 'Альма-матер Альберта Эйнштейна. Мировой лидер в области робототехники, квантовых технологий, физики и искусственного интеллекта.',
    keyPrograms: [
      { name: 'Computer Science (Visual & Data Intelligence)', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Quantum Engineering', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Robotics, Systems and Control', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Диплом бакалавра с наивысшими оценками (top 5% курса)',
      'IELTS 7.0+ или TOEFL 100+',
      'Сертификат GRE (рекомендуется)'
    ],
    livingCostDetails: {
      housing: '700 – 1 000 € (студенческие WOKO)',
      food: '400 – 500 €',
      transport: '65 € в месяц'
    },
    websiteUrl: 'https://ethz.ch',
    landmarkSymbol: 'Маттерхорн & Цюрихское озеро'
  },

  // --- БЕЛЬГИЯ ---
  {
    id: 'kuleuven',
    name: 'KU Leuven',
    localName: 'Katholieke Universiteit Leuven',
    countryId: 'belgium',
    countryName: 'Бельгия',
    flag: '🇧🇪',
    city: 'Лёвен',
    qsRank: '#63 в мире (#1 самый инновационный ВУЗ Европы по Reuters)',
    photo: 'universities/france.jpg',
    fields: ['engineering', 'it', 'law', 'business', 'biomedicine', 'humanities'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 1100,
      text: '1 100 – 3 500 € / год (госвуз)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Master Mind Scholarship (Фландрия, Бельгия)',
      coverage: 'до 10 000 € / год + бесплатная учеба',
      type: 'full',
      description: 'Государственная программа правительства Фландрии для иностранных студентов.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 или TOEFL 90+'
    },
    deadline: '1 марта (для стипендий) / 1 июня',
    livingCostMonth: 850,
    overview: 'Основан в 1425 году. Один из главных научных центров Европы, колыбель европейского микроэлектронного центра IMEC.',
    keyPrograms: [
      { name: 'Engineering Technology (BSc & MSc)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Artificial Intelligence (MSc)', degree: 'Master', lang: 'English', duration: '1-2 года' },
      { name: 'European Master in Law and Economics', degree: 'Master', lang: 'English', duration: '1 год' }
    ],
    admissionChecklist: [
      'Аттестат / Диплом бакалавра с апостилем',
      'IELTS 6.5+',
      'Мотивационное письмо'
    ],
    livingCostDetails: {
      housing: '350 – 550 €',
      food: '220 – 260 €',
      transport: '20 € в месяц'
    },
    websiteUrl: 'https://www.kuleuven.be',
    landmarkSymbol: 'Ратуша Лёвена & Атомиум'
  }
];


export { studyDirections as fieldCategories } from './directions';
