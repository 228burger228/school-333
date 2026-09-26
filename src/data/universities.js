export const universities = [
  {
    id: 'tum',
    name: 'Technical University of Munich (TUM)',
    localName: 'Technische Universität München',
    countryId: 'germany',
    countryName: 'Германия',
    flag: '🇩🇪',
    city: 'Мюнхен',
    qsRank: '#28 в мире (#1 в Германии)',
    photo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    fields: ['it', 'engineering', 'business', 'medicine'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 150,
      text: '~150 € / семестр (семестровый взнос)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'DAAD & Deutschlandstipendium',
      coverage: '300 – 934 € в месяц',
      type: 'full',
      description: 'Государственная стипендия Германии и программа поддержки талантливых студентов фонда TUM.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '88',
      noExamOption: false,
      examDescription: 'Требуется IELTS 6.5+ или TOEFL 88+ для англоязычных программ, либо TestDaF 4x4 для программ на немецком'
    },
    deadline: '15 июля (зимний семестр) / 15 января (летний)',
    livingCostMonth: 1050,
    overview: 'Один из самых престижных технических университетов Европы, колыбель европейских стартапов и инноваций в сердце Баварии.',
    keyPrograms: [
      { name: 'Informatics / Computer Science', degree: 'Bachelor & Master', lang: 'EN / DE', duration: '3-4 года' },
      { name: 'Management & Technology (TUM-BWL)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Robotics, Cognition, Intelligence', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Data Engineering and Analytics', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Аттестат с отличным средним баллом (GPA > 4.5/5.0)',
      'Сертификат IELTS (от 6.5) или TestDaF / Goethe B2-C1',
      'Прохождение вступительного теста (Eignungsfeststellungsverfahren)',
      'Мотивационное письмо (SOP) и академическое резюме (CV)',
      'Для выпускников 11 классов: 1 год Studienkolleg или 1 год университета на родине'
    ],
    livingCostDetails: {
      housing: '450 - 650 € (студенческое общежитие / WG)',
      food: '250 - 300 €',
      transport: '29 € (льготный проездной Deutschlandticket)'
    },
    websiteUrl: 'https://www.tum.de',
    landmarkSymbol: '🏛️ Бранденбургские ворота & Баварские Альпы'
  },
  {
    id: 'uva',
    name: 'University of Amsterdam (UvA)',
    localName: 'Universiteit van Amsterdam',
    countryId: 'netherlands',
    countryName: 'Нидерланды',
    flag: '🇳🇱',
    city: 'Амстердам',
    qsRank: '#53 в мире (#1 в Нидерландах)',
    photo: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80',
    fields: ['business', 'it', 'social', 'design'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2530,
      text: '2 530 € (EU) / 9 500 – 14 000 € (Non-EU)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Amsterdam Merit & NL Scholarship',
      coverage: 'до 25 000 € в год',
      type: 'full',
      description: 'Покрывает полную стоимость обучения и часть расходов на проживание для выдающихся абитуриентов.'
    },
    languageReq: {
      ielts: '7.0',
      toefl: '100',
      noExamOption: false,
      examDescription: 'IELTS 7.0 (не ниже 6.5 в каждом блоке) или TOEFL iBT 100+'
    },
    deadline: '15 января (Numerus Fixus) / 1 апреля (стандартный)',
    livingCostMonth: 1250,
    overview: 'Крупнейший исследовательский университет Нидерландов, расположенный вдоль знаменитых каналов Амстердама с огромным выбором англоязычных курсов.',
    keyPrograms: [
      { name: 'Business Administration (BSc)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'Communication Science (#1 в мире по QS)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Artificial Intelligence (MSc)', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Economics & Data Science', degree: 'Bachelor', lang: 'English', duration: '3 года' }
    ],
    admissionChecklist: [
      'Аттестат / Диплом бакалавра международного стандарта',
      'Сертификат IELTS 7.0 или TOEFL 100',
      'Высокая оценка по математике (вступительный тест OMPT при необходимости)',
      'Мотивационное эссе и рекомендательные письма'
    ],
    livingCostDetails: {
      housing: '600 - 850 € в месяц',
      food: '250 - 320 €',
      transport: 'Велосипед (0 €) / проездной ~70 €'
    },
    websiteUrl: 'https://www.uva.nl',
    landmarkSymbol: '🚲 Каналы Амстердама и ветряные мельницы'
  },
  {
    id: 'polimi',
    name: 'Politecnico di Milano',
    localName: 'Politecnico di Milano',
    countryId: 'italy',
    countryName: 'Италия',
    flag: '🇮🇹',
    city: 'Милан',
    qsRank: '#111 в мире (#7 по Дизайну и Архитектуре)',
    photo: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    fields: ['engineering', 'design', 'it'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 890,
      text: '890 – 3 890 € / год (снижается до 0 € по DSU)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'Стипендия DSU (Diritto allo Studio)',
      coverage: '100% грант на учебу + жилье + до 7 500 €/год наличными',
      type: 'full',
      description: 'Государственная социальная стипендия, основанная на семейном доходе (ISEE). Доступна всем иностранным студентам!'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '78',
      noExamOption: true,
      examDescription: 'IELTS 6.0 или сертификат бакалавриата на английском языке'
    },
    deadline: '15 мая (первая волна) / 15 июля (вторая волна)',
    livingCostMonth: 850,
    overview: 'Главная кузница инженеров, архитекторов и промышленных дизайнеров южной Европы в мировой столице моды и дизайна.',
    keyPrograms: [
      { name: 'Product Service System Design', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Computer Science and Engineering', degree: 'Bachelor & Master', lang: 'English', duration: '2-3 года' },
      { name: 'Architecture and Urban Design', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Mechanical & Automation Engineering', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Диплом бакалавра / Аттестат (12 лет образования или 11 + 1 курс)',
      'Сертификат IELTS 6.0+',
      'Портфолио проектов (обязательно для Дизайна и Архитектуры)',
      'Справка о доходах семьи (для получения стипендии DSU)'
    ],
    livingCostDetails: {
      housing: '350 - 550 € (бесплатно при стипендии DSU)',
      food: '200 - 250 €',
      transport: '22 € (студенческий проездной ATM Milano)'
    },
    websiteUrl: 'https://www.polimi.it',
    landmarkSymbol: '🏛️ Миланский собор Дуомо & Колизей'
  },
  {
    id: 'sorbonne',
    name: 'Sorbonne University',
    localName: 'Sorbonne Université',
    countryId: 'france',
    countryName: 'Франция',
    flag: '🇫🇷',
    city: 'Париж',
    qsRank: '#59 в мире',
    photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    fields: ['medicine', 'social', 'it', 'engineering'],
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
      description: 'Французская правительственная стипендия Eiffel + государственная субсидия на жилье CAF для каждого студента.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '85',
      noExamOption: false,
      examDescription: 'DELF B2 / DALF C1 для франкоязычных программ или IELTS 6.5 для программ на английском'
    },
    deadline: '15 декабря (через Campus France) / 15 марта',
    livingCostMonth: 950,
    overview: 'Легендарный исторический университет в Латинском квартале Парижа, объединяющий глубокие традиции европейской науки и передовые биомедицинские лаборатории.',
    keyPrograms: [
      { name: 'Biomedical Sciences & Genetics', degree: 'Bachelor & Master', lang: 'EN / FR', duration: '3 года' },
      { name: 'Computer Science & Computational Biology', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Philosophy and European Literature', degree: 'Bachelor', lang: 'French', duration: '3 года' },
      { name: 'Quantum Information Science', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Подача досье через портал Études en France (Campus France)',
      'Академическая выписка с отличными оценками',
      'Языковой сертификат (DELF B2 или IELTS 6.5+)',
      'Мотивационное письмо на французском или английском'
    ],
    livingCostDetails: {
      housing: '450 - 700 € (с учетом скидки от субсидии CAF)',
      food: '200 - 270 € (студенческие обеды CROUS всего за 1€ / 3.3€)',
      transport: '38 € (Imagine R студенческий проездной)'
    },
    websiteUrl: 'https://www.sorbonne-universite.fr',
    landmarkSymbol: '🗼 Эйфелева башня и Латинский квартал'
  },
  {
    id: 'charles',
    name: 'Charles University in Prague',
    localName: 'Univerzita Karlova',
    countryId: 'czechia',
    countryName: 'Чехия',
    flag: '🇨🇿',
    city: 'Прага',
    qsRank: '#248 в мире (#1 в Центральной Европе)',
    photo: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80',
    fields: ['medicine', 'social', 'it', 'business'],
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
      examDescription: 'Без экзамена при поступлении на языковые подготовительные курсы UJOP или чешский язык B2'
    },
    deadline: '28 февраля (на программы) / 31 мая (на подкурсы)',
    livingCostMonth: 650,
    overview: 'Основан в 1348 году королем Карлом IV. Один из старейших университетов мира с выдающимися медицинскими и гуманитарными факультетами.',
    keyPrograms: [
      { name: 'General Medicine (MUDr)', degree: 'Master (6 лет)', lang: 'English / CZ', duration: '6 лет' },
      { name: 'Computer Science (Artificial Intelligence)', degree: 'Bachelor & Master', lang: 'EN / CZ', duration: '3 года' },
      { name: 'International Relations & European Studies', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Economics and Finance (IES)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' }
    ],
    admissionChecklist: [
      'Нострификация школьного аттестата или диплома в Чехии',
      'Вступительные экзамены по профильным предметам (тесты SCIO / OSP)',
      'Сертификат чешского языка B2 (для бесплатного отделения) или IELTS 6.0'
    ],
    livingCostDetails: {
      housing: '200 - 350 € (университетское общежитие Kolej)',
      food: '180 - 240 €',
      transport: '6 € в месяц (студенческий проездной Lítačka)'
    },
    websiteUrl: 'https://cuni.cz',
    landmarkSymbol: '🌉 Карлов мост и Пражский град'
  },
  {
    id: 'tudelft',
    name: 'Delft University of Technology (TU Delft)',
    localName: 'Technische Universiteit Delft',
    countryId: 'netherlands',
    countryName: 'Нидерланды',
    flag: '🇳🇱',
    city: 'Делфт',
    qsRank: '#49 в мире (#3 в Европе по инженерии)',
    photo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    fields: ['engineering', 'it', 'design'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2530,
      text: '2 530 € (EU) / 16 000 € (Non-EU)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Justus & Louise van Effen Excellence',
      coverage: '100% стоимости обучения + расходы на проживание',
      type: 'full',
      description: 'Престижнейший грант для выдающихся инженеров и исследователей со всего мира.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 (минимум 6.0 по всем секциям) или TOEFL 90+'
    },
    deadline: '15 января (для стипендий и Numerus Fixus) / 1 апреля',
    livingCostMonth: 1100,
    overview: 'Инженерная Мекка Европы. Кампус TU Delft признан одним из самых футуристичных: именно здесь создаются Hyperloop, квантовые компьютеры и эко-города.',
    keyPrograms: [
      { name: 'Aerospace Engineering (BSc & MSc)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Computer Science and Engineering', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'Sustainable Energy Technology', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Integrated Product Design', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Высочайшие баллы по физике и высшей математике',
      'Сертификат английского языка IELTS 6.5-7.0',
      'Успешная сдача вступительного отбора Numerus Fixus (для бакалавриата Aerospace/CS)'
    ],
    livingCostDetails: {
      housing: '500 - 750 € в Делфте/Гааге',
      food: '250 - 300 €',
      transport: 'Велосипед (город полностью адаптирован под велодвижение)'
    },
    websiteUrl: 'https://www.tudelft.nl',
    landmarkSymbol: '🚲 Ветряные мельницы и футуристичный кампус Делфта'
  },
  {
    id: 'uab',
    name: 'Autonomous University of Barcelona (UAB)',
    localName: 'Universitat Autònoma de Barcelona',
    countryId: 'spain',
    countryName: 'Испания',
    flag: '🇪🇸',
    city: 'Барселона',
    qsRank: '#149 в мире (#1 в Испании)',
    photo: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
    fields: ['business', 'medicine', 'social', 'design'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2200,
      text: '2 200 – 4 100 € / год в государственном ВУЗе',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Стипендии Министерства образования Испании (MEC)',
      coverage: 'Покрытие стоимости учебы + до 3 000 €',
      type: 'partial',
      description: 'Государственная программа поддержки студентов с хорошим академическим баллом.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '80',
      noExamOption: true,
      examDescription: 'DELE B2 для испаноязычных курсов или IELTS 6.0 для англоязычных'
    },
    deadline: '1 июня (ранняя подача) / 10 июля',
    livingCostMonth: 780,
    overview: 'Живописный зеленый кампус американского типа в 25 минутах от центра Барселоны и пляжей Средиземного моря.',
    keyPrograms: [
      { name: 'Business Management and Technology', degree: 'Bachelor', lang: 'English', duration: '4 года' },
      { name: 'International Relations & Global Governance', degree: 'Bachelor & Master', lang: 'English', duration: '3-4 года' },
      { name: 'Bioinformatics and Health Data', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Audiovisual Communication & Media', degree: 'Bachelor', lang: 'ES / EN', duration: '4 года' }
    ],
    admissionChecklist: [
      'Омологация школьного аттестата через UNEDasiss',
      'Сдача экзаменов PCE (Pruebas de Competencias Específicas) для повышения балла',
      'Языковой сертификат (IELTS 6.0 или DELE B2)'
    ],
    livingCostDetails: {
      housing: '350 - 550 € (комната в Vila Universitària)',
      food: '200 - 250 €',
      transport: '20 € (T-Jove проездной на 3 месяца для молодежи)'
    },
    websiteUrl: 'https://www.uab.cat',
    landmarkSymbol: '☀️ Саграда Фамилия и Средиземное море'
  },
  {
    id: 'univie',
    name: 'University of Vienna',
    localName: 'Universität Wien',
    countryId: 'austria',
    countryName: 'Австрия',
    flag: '🇦🇹',
    city: 'Вена',
    qsRank: '#130 в мире',
    photo: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80',
    fields: ['social', 'it', 'business', 'medicine'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 726,
      text: '726.72 € / семестр (~1 453 € / год)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'ÖAD Grants & Стипендии фонда Эрнста Маха',
      coverage: '1 050 € в месяц',
      type: 'partial',
      description: 'Австрийские академические гранты для иностранных студентов и исследователей.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: true,
      examDescription: 'Сертификат немецкого языка A2 для зачисления на подготовительное отделение (VWU) с доучиванием до C1'
    },
    deadline: '5 сентября (зимний семестр) / 5 февраля (летний)',
    livingCostMonth: 900,
    overview: 'Один из крупнейших и старейших университетов Европы (основан в 1365 году), выпустивший 15 нобелевских лауреатов, в культурном сердце Австрии.',
    keyPrograms: [
      { name: 'Data Science & Scientific Computing', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Economics and Global Business', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'International Legal Studies (LLM)', degree: 'Master', lang: 'English', duration: '1 год' },
      { name: 'Computer Science (Informatik)', degree: 'Bachelor', lang: 'German', duration: '3 года' }
    ],
    admissionChecklist: [
      'Справка об особом праве на учебу (Studienplatznachweis)',
      'Аттестат о среднем образовании с апостилем и переводом',
      'Немецкий язык от A2 (с возможностью посещать курсы при университете) или B2/C1'
    ],
    livingCostDetails: {
      housing: '380 - 550 € (студенческое общежитие OEAD)',
      food: '230 - 280 €',
      transport: '30 € в месяц (студенческий билет Wiener Linien)'
    },
    websiteUrl: 'https://www.univie.ac.at',
    landmarkSymbol: '🏔️ Дворец Бельведер и Венская опера'
  },
  {
    id: 'kth',
    name: 'KTH Royal Institute of Technology',
    localName: 'Kungliga Tekniska högskolan',
    countryId: 'sweden',
    countryName: 'Швеция',
    flag: '🇸🇪',
    city: 'Стокгольм',
    qsRank: '#73 в мире',
    photo: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80',
    fields: ['it', 'engineering', 'design'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 0,
      text: '0 € (граждане EU) / 13 000 – 16 000 € (Non-EU)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'KTH Scholarship & Swedish Institute (SI)',
      coverage: '100% покрытия обучения + стипендия 12 000 SEK (~1 050 €/мес)',
      type: 'full',
      description: 'Государственная стипендия правительства Швеции Swedish Institute покрывает проживание, страховку и учебу.'
    },
    languageReq: {
      ielts: '6.5',
      toefl: '90',
      noExamOption: false,
      examDescription: 'IELTS 6.5 (минимум 5.5 по секциям) или TOEFL 90+'
    },
    deadline: '15 января (единая национальная подача Universityadmissions.se)',
    livingCostMonth: 1150,
    overview: 'Главный центр скандинавской инженерной мысли. KTH тесно сотрудничает со Spotify, Ericsson, Volvo и шведскими эко-кластерами.',
    keyPrograms: [
      { name: 'Information and Communication Technology (BSc)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'Machine Learning (MSc)', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Interactive Media Technology', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Sustainable Energy Engineering', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Подача через общешведский портал Universityadmissions.se',
      'Выписка оценок с сильным математическим профилем',
      'Сертификат IELTS 6.5 или TOEFL 90'
    ],
    livingCostDetails: {
      housing: '500 - 750 € (через SSSB очередь на общежития)',
      food: '260 - 320 €',
      transport: '55 € (студенческий проездной SL Stockholm)'
    },
    websiteUrl: 'https://www.kth.se',
    landmarkSymbol: '✨ Северное сияние и скандинавский хайтек'
  },
  {
    id: 'uw',
    name: 'University of Warsaw',
    localName: 'Uniwersytet Warszawski',
    countryId: 'poland',
    countryName: 'Польша',
    flag: '🇵🇱',
    city: 'Варшава',
    qsRank: '#262 в мире (#1 в Польше)',
    photo: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
    fields: ['it', 'business', 'social', 'medicine'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 2200,
      text: '2 000 – 3 500 € / год (очень доступно)',
      isFree: false
    },
    scholarship: {
      available: true,
      name: 'Стипендия NAWA им. генерала Андерса / Банаха',
      coverage: 'Бесплатное обучение + до 1 700 PLN/мес',
      type: 'full',
      description: 'Польское национальное агентство академических обменов предоставляет полные гранты.'
    },
    languageReq: {
      ielts: '6.0',
      toefl: '75',
      noExamOption: true,
      examDescription: 'IELTS 6.0 или внутреннее онлайн-собеседование на знание английского / польского'
    },
    deadline: '10 июля (первый тур) / 15 сентября (дополнительный)',
    livingCostMonth: 580,
    overview: 'Ведущий исследовательский университет Польши. Сильнейшая школа программирования и спортивного олимпиадного кодинга в Центральной Европе.',
    keyPrograms: [
      { name: 'Computer Science (Machine Learning Focus)', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' },
      { name: 'International Business Program (IBP)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'Quantitative Finance and Big Data', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'International Relations', degree: 'Bachelor & Master', lang: 'English', duration: '3 года' }
    ],
    admissionChecklist: [
      'Регистрация в системе IRK (Internetowa Rejestracja Kandydatów)',
      'Школьный аттестат или диплом с апостилем',
      'Сертификат IELTS 6.0 или B2 польский/английский'
    ],
    livingCostDetails: {
      housing: '180 - 320 € (общежитие / комната)',
      food: '150 - 200 €',
      transport: '15 € в месяц (студенческий проездной WTP)'
    },
    websiteUrl: 'https://en.uw.edu.pl',
    landmarkSymbol: '🏰 Королевский замок в Варшаве'
  },
  {
    id: 'unibo',
    name: 'University of Bologna',
    localName: 'Alma Mater Studiorum - Università di Bologna',
    countryId: 'italy',
    countryName: 'Италия',
    flag: '🇮🇹',
    city: 'Болонья',
    qsRank: '#133 в мире (#1 старейший ВУЗ в мире, 1088 г.)',
    photo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    fields: ['social', 'medicine', 'business', 'it'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 157,
      text: '157 – 2 800 € / год (по ISEE снижается до 157 €)',
      isFree: true
    },
    scholarship: {
      available: true,
      name: 'ER.GO Scholarship (Италия)',
      coverage: 'Бесплатное обучение + бесплатное общежитие + 7 200 € в год',
      type: 'full',
      description: 'Региональная стипендия Эмилии-Романьи. Назначается по критерию финансового положения семьи.'
    },
    languageReq: {
      ielts: '5.5',
      toefl: '72',
      noExamOption: true,
      examDescription: 'IELTS 5.5-6.0 или сдача вступительного теста TOLC'
    },
    deadline: '30 апреля (для иностранцев non-EU) / 15 июля',
    livingCostMonth: 720,
    overview: 'Старейший непрерывно действующий университет западного мира. Родина Болонского процесса и один из самых оживленных студенческих центров Европы.',
    keyPrograms: [
      { name: 'Economics and Finance (CLEF)', degree: 'Bachelor', lang: 'English', duration: '3 года' },
      { name: 'Pharmacy & Biotechnology', degree: 'Bachelor & Master', lang: 'English', duration: '3-5 лет' },
      { name: 'Artificial Intelligence (MSc)', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Global Cultures and Humanities', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Сдача онлайн-теста TOLC (TOLC-E для экономики, TOLC-I для инженерии)',
      'Декларация Dichiarazione di Valore или сертификат CIMEA',
      'Заявка на стипендию ER.GO до конца августа'
    ],
    livingCostDetails: {
      housing: '300 - 450 € (бесплатно при стипендии ER.GO)',
      food: '180 - 230 €',
      transport: '20 € в месяц'
    },
    websiteUrl: 'https://www.unibo.it',
    landmarkSymbol: '🏛️ Две башни Болоньи и аркады ЮНЕСКО'
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
    photo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    fields: ['engineering', 'it'],
    degrees: ['bachelor', 'master'],
    tuition: {
      amount: 320,
      text: '320 € / семестр (включает бесплатный проезд по всей Германии)',
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
      examDescription: 'IELTS 6.5 для англоязычных магистерских программ или TestDaF 4x4 для немецких'
    },
    deadline: '1 марта (для non-EU) / 15 июля',
    livingCostMonth: 820,
    overview: 'Инженерное сердце немецкого автопрома и тяжелого машиностроения. Прямые лаборатории с Siemens, BMW, Bosch и Airbus прямо в кампусе.',
    keyPrograms: [
      { name: 'Mechanical Engineering (Maschinenbau)', degree: 'Bachelor & Master', lang: 'DE / EN', duration: '3-4 года' },
      { name: 'Computer Science and Data Engineering', degree: 'Master', lang: 'English', duration: '2 года' },
      { name: 'Automotive Engineering', degree: 'Master', lang: 'English', duration: '2 года' }
    ],
    admissionChecklist: [
      'Школьный аттестат + 1 курс ВУЗа или Studienkolleg (T-Kurs)',
      'Сертификат немецкого или английского языка',
      'Прохождение GRE для ряда магистерских программ'
    ],
    livingCostDetails: {
      housing: '280 - 450 € (очень доступные студенческие общежития)',
      food: '200 - 240 €',
      transport: '0 € (входит в семестровый студенческий билет)'
    },
    websiteUrl: 'https://www.rwth-aachen.de',
    landmarkSymbol: '🏛️ Аахенский собор Карла Великого'
  }
];

export const fieldCategories = [
  { id: 'all', name: 'Все направления', icon: 'Sparkles' },
  { id: 'it', name: 'IT, AI & Данные', icon: 'Code' },
  { id: 'business', name: 'Бизнес & Менеджмент', icon: 'TrendingUp' },
  { id: 'engineering', name: 'Инженерия & Робототехника', icon: 'Cpu' },
  { id: 'medicine', name: 'Медицина & Биотехнологии', icon: 'HeartPulse' },
  { id: 'design', name: 'Дизайн & Архитектура', icon: 'Palette' },
  { id: 'social', name: 'Гуманитарные & Международные отношения', icon: 'Globe2' }
];
