export const countryQuizQuestions = [
  {
    id: 1,
    question: 'Какой у вас ориентировочный бюджет на обучение и жизнь?',
    subtitle: 'Выберите уровень финансовых возможностей для проживания и оплаты семестра',
    options: [
      {
        text: 'Ищу только бесплатное обучение или 100% стипендию (до 700 €/мес на жизнь)',
        icon: '💰',
        weights: { germany: 3, italy: 3, czechia: 3, poland: 2, austria: 2, netherlands: 0, sweden: 0, france: 1, spain: 1 }
      },
      {
        text: 'Средний бюджет: готов платить умеренно (1 000 – 3 000 €/год учеба, 800–1000 €/мес жизнь)',
        icon: '💳',
        weights: { france: 3, austria: 3, spain: 3, italy: 2, czechia: 2, germany: 2, poland: 2, netherlands: 1, sweden: 1 }
      },
      {
        text: 'Комфортный бюджет: главное — качество, готов инвестировать (от 10 000 €/год учеба)',
        icon: '💎',
        weights: { netherlands: 3, sweden: 3, france: 2, germany: 1, austria: 1, spain: 1, italy: 0, czechia: 0, poland: 0 }
      }
    ]
  },
  {
    id: 2,
    question: 'Какой климат и городская атмосфера вам ближе?',
    subtitle: 'Где вы будете чувствовать себя вдохновленным каждый день?',
    options: [
      {
        text: 'Солнце, тепло, средиземноморский бриз и открытые дружелюбные люди',
        icon: '☀️',
        weights: { spain: 4, italy: 4, france: 1, germany: 0, netherlands: 0, sweden: 0, czechia: 0, poland: 0, austria: 0 }
      },
      {
        text: 'Динамичный интернациональный мегаполис, стартап-культура и технологический ритм',
        icon: '🚀',
        weights: { netherlands: 3, germany: 3, sweden: 2, france: 2, poland: 1, spain: 1, czechia: 1, austria: 1, italy: 0 }
      },
      {
        text: 'Уютная классическая Европа: старинные замки, мощеные улочки, безопасность и парки',
        icon: '🏰',
        weights: { czechia: 4, austria: 4, poland: 2, germany: 2, france: 2, italy: 1, spain: 0, netherlands: 0, sweden: 0 }
      },
      {
        text: 'Скандинавское спокойствие, природа, чистый воздух и минималистичный дизайн',
        icon: '🌲',
        weights: { sweden: 4, netherlands: 2, germany: 1, austria: 1, france: 0, spain: 0, italy: 0, czechia: 0, poland: 0 }
      }
    ]
  },
  {
    id: 3,
    question: 'Как вы относитесь к языку обучения и жизни?',
    subtitle: 'Насколько вы готовы погружаться в изучение нового языка?',
    options: [
      {
        text: 'Хочу учиться и жить ТОЛЬКО на английском, без необходимости учить местный язык',
        icon: '🇬🇧',
        weights: { netherlands: 4, sweden: 4, germany: 2, poland: 1, czechia: 1, spain: 0, france: 0, italy: 0, austria: 0 }
      },
      {
        text: 'Хочу учиться на английском, но готов выучить базовый местный для кафе и друзей',
        icon: '🗣️',
        weights: { germany: 3, italy: 3, france: 3, austria: 3, spain: 3, netherlands: 2, czechia: 2, poland: 2, sweden: 2 }
      },
      {
        text: 'Готов выучить язык с нуля за год на подготовительных курсах ради бесплатной учебы',
        icon: '📚',
        weights: { czechia: 4, germany: 3, austria: 3, france: 2, poland: 2, italy: 1, spain: 1, netherlands: 0, sweden: 0 }
      }
    ]
  },
  {
    id: 4,
    question: 'Что для вас важнее всего после получения диплома?',
    subtitle: 'Ваш главный карьерный приоритет в Европе',
    options: [
      {
        text: 'Легко остаться по рабочей визе и быстро найти работу в крупнейшей экономике ЕС',
        icon: '💼',
        weights: { germany: 4, netherlands: 3, austria: 2, sweden: 2, france: 2, poland: 1, czechia: 1, italy: 0, spain: 0 }
      },
      {
        text: 'Развитие в сфере дизайна, моды, архитектуры, гастрономии или творчества',
        icon: '🎨',
        weights: { italy: 4, france: 3, spain: 3, netherlands: 1, austria: 1, sweden: 1, czechia: 0, germany: 0, poland: 0 }
      },
      {
        text: 'Экология, инновации, баланс работы и личной жизни (Work-Life Balance)',
        icon: '🌿',
        weights: { sweden: 4, netherlands: 3, austria: 3, germany: 1, spain: 2, france: 1, czechia: 1, poland: 1, italy: 1 }
      },
      {
        text: 'Быстрый старт карьеры в IT или финтехе с доступной стоимостью жизни',
        icon: '⚡',
        weights: { poland: 4, czechia: 3, germany: 2, netherlands: 2, spain: 1, sweden: 1, austria: 1, france: 0, italy: 0 }
      }
    ]
  },
  {
    id: 5,
    question: 'Какой стиль студенческого кампуса вы предпочитаете?',
    subtitle: 'Как организована ваша студенческая жизнь',
    options: [
      {
        text: 'Университет интегрирован прямо в город: лекции в исторических палаццо или зданиях в центре',
        icon: '🏛️',
        weights: { austria: 3, czechia: 3, italy: 3, france: 3, poland: 2, germany: 2, spain: 1, netherlands: 1, sweden: 1 }
      },
      {
        text: 'Огромный современный кампус-городок с лабораториями, спорткомплексами и общежитиями',
        icon: '🏫',
        weights: { netherlands: 3, germany: 3, sweden: 3, spain: 3, poland: 2, france: 2, czechia: 1, italy: 1, austria: 1 }
      }
    ]
  }
];

export const careerQuizQuestions = [
  {
    id: 1,
    question: 'Какой тип задач вас больше всего заряжает энергией?',
    subtitle: 'Подумайте, за каким занятием вы теряете счет времени',
    options: [
      {
        text: 'Разбираться в алгоритмах, писать код, автоматизировать сложные процессы',
        icon: '💻',
        field: 'it'
      },
      {
        text: 'Генерировать идеи для бизнеса, договариваться, продавать, вести переговоры',
        icon: '📈',
        field: 'business'
      },
      {
        text: 'Проектировать физические механизмы, разбираться в физике, роботах и схемах',
        icon: '⚙️',
        field: 'engineering'
      },
      {
        text: 'Помогать людям быть здоровыми, изучать биологию, геном и медицину',
        icon: '🧬',
        field: 'medicine'
      },
      {
        text: 'Создавать эстетику: интерьеры, графику, анимацию, веб-интерфейсы и одежду',
        icon: '🎨',
        field: 'design'
      },
      {
        text: 'Изучать международные отношения, историю, языки, дипломатию и законы',
        icon: '🌐',
        field: 'social'
      }
    ]
  },
  {
    id: 2,
    question: 'В командном проекте какую роль вы обычно берете на себя?',
    subtitle: 'Ваша естественная позиция в команде',
    options: [
      {
        text: 'Главный технический мозг: пишу код или настраиваю техническую логику',
        icon: '🧠',
        field: 'it'
      },
      {
        text: 'Лидер и координатор: распределяю роли, ставлю дедлайны и защищаю проект',
        icon: '👑',
        field: 'business'
      },
      {
        text: 'Инженер-конструктор: продумываю структуру, надежность и физическую реализацию',
        icon: '🛠️',
        field: 'engineering'
      },
      {
        text: 'Эксперт по человеку и безопасности: проверяю пользу для здоровья и этику',
        icon: '🩺',
        field: 'medicine'
      },
      {
        text: 'Креативный директор: делаю красивую презентацию, фирменный стиль и визуал',
        icon: '🖌️',
        field: 'design'
      },
      {
        text: 'Спикер и дипломат: формулирую смыслы, аргументирую позицию и договариваюсь',
        icon: '🎙️',
        field: 'social'
      }
    ]
  },
  {
    id: 3,
    question: 'Какие предметы в школе или колледже вам давались легче и с удовольствием?',
    subtitle: 'Ваша сильная академическая сторона',
    options: [
      {
        text: 'Информатика, дискретная математика, логические головоломки',
        icon: '01',
        field: 'it'
      },
      {
        text: 'Экономика, обществознание, математика и статистика',
        icon: '📊',
        field: 'business'
      },
      {
        text: 'Физика, геометрия, черчение и технология',
        icon: '📐',
        field: 'engineering'
      },
      {
        text: 'Биология, химия и анатомия',
        icon: '🧪',
        field: 'medicine'
      },
      {
        text: 'ИЗО, мировая художественная культура, литература',
        icon: '🖼️',
        field: 'design'
      },
      {
        text: 'История, иностранные языки, литература, право',
        icon: '📖',
        field: 'social'
      }
    ]
  },
  {
    id: 4,
    question: 'Какое рабочее место вашей мечты через 5 лет?',
    subtitle: 'Где и как вам хочется проводить свой рабочий день',
    options: [
      {
        text: 'Удаленно из любой точки мира за мощным ноутбуком или в технологичном опенспейсе',
        icon: '🏖️',
        field: 'it'
      },
      {
        text: 'В стеклянном небоскребе финансового центра или в собственном стартапе',
        icon: '🏙️',
        field: 'business'
      },
      {
        text: 'В современной исследовательской лаборатории, на испытательном полигоне или фабрике',
        icon: '🏭',
        field: 'engineering'
      },
      {
        text: 'В передовой клинике или биотехнологическом исследовательском институте',
        icon: '🏥',
        field: 'medicine'
      },
      {
        text: 'В светлой творческой дизайн-студии или архитектурном бюро',
        icon: '✏️',
        field: 'design'
      },
      {
        text: 'В штаб-квартире ООН, посольстве, международной организации или консалтинге',
        icon: '🏛️',
        field: 'social'
      }
    ]
  },
  {
    id: 5,
    question: 'Какой результат вашей работы вызовет у вас наибольшую гордость?',
    subtitle: 'Что оставит след в мире',
    options: [
      {
        text: 'Мобильное приложение или AI-алгоритм, которым пользуются миллионы людей',
        icon: '📱',
        field: 'it'
      },
      {
        text: 'Успешная международная компания, изменившая рынок',
        icon: '🚀',
        field: 'business'
      },
      {
        text: 'Электромобиль, спутник, мост или роботизированная линия',
        icon: '🛰️',
        field: 'engineering'
      },
      {
        text: 'Спасенные жизни людей или разработка нового метода лечения',
        icon: '❤️',
        field: 'medicine'
      },
      {
        text: 'Здание, ставший символом города, или культовый дизайн продукта',
        icon: '🏆',
        field: 'design'
      },
      {
        text: 'Международный мирный договор, образовательная реформа или книга',
        icon: '📜',
        field: 'social'
      }
    ]
  }
];

export const careerFieldDescriptions = {
  it: {
    title: 'IT, Artificial Intelligence & Data Science',
    icon: '💻',
    salary: 'от 55 000 до 95 000 €/год в Европе',
    description: 'Европа испытывает колоссальный дефицит квалифицированных разработчиков и специалистов по данным. Германия, Нидерланды и Швеция предлагают ускоренное оформление Голубой Карты ЕС (EU Blue Card) для выпускников IT.',
    topRoles: ['Software Engineer', 'AI / ML Specialist', 'Data Architect', 'Cybersecurity Expert'],
    topCountries: ['germany', 'netherlands', 'sweden', 'poland']
  },
  business: {
    title: 'Бизнес, Финансы & Международный Менеджмент',
    icon: '📈',
    salary: 'от 50 000 до 110 000 €/год в Европе',
    description: 'Европейские бизнес-школы занимают верхние строчки мировых рейтингов Financial Times. Вы получите доступ к сильнейшим корпоративным связям в мировых финансовых столицах (Амстердам, Франкфурт, Париж, Милан).',
    topRoles: ['Product Manager', 'Investment Banker', 'Management Consultant', 'Supply Chain Director'],
    topCountries: ['netherlands', 'france', 'spain', 'italy']
  },
  engineering: {
    title: 'Инженерия, Робототехника & Энергетика',
    icon: '⚙️',
    salary: 'от 52 000 до 85 000 €/год в Европе',
    description: 'Инженерная школа Европы — абсолютный мировой эталон надежности и инноваций. Вы сможете работать в аэрокосмической отрасли, возобновляемой энергетике или промышленной автоматизации.',
    topRoles: ['Robotics Engineer', 'Aerospace Engineer', 'Renewable Energy Specialist', 'Automotive Systems Designer'],
    topCountries: ['germany', 'netherlands', 'italy', 'sweden']
  },
  medicine: {
    title: 'Медицина, Биотехнологии & Фармацевтика',
    icon: '🧬',
    salary: 'от 60 000 до 120 000 €/год в Европе',
    description: 'Медицинские дипломы европейских ВУЗов признаются по всему миру без сложных пересдач внутри ЕС. Особым спросом пользуются биоинформатика, генетика и клиническая медицина.',
    topRoles: ['Biomedical Researcher', 'Clinical Pharmacologist', 'Doctor / Specialist', 'Bioinformatics Scientist'],
    topCountries: ['germany', 'france', 'czechia', 'italy']
  },
  design: {
    title: 'Дизайн, Архитектура & Креативные медиа',
    icon: '🎨',
    salary: 'от 40 000 до 75 000 €/год в Европе',
    description: 'Италия, Франция и Испания — исторические и современные мировые столицы эстетики. Обучение построено на реальных проектах для культовых брендов и дизайн-бюро.',
    topRoles: ['UI/UX Product Designer', 'Architect', 'Industrial Designer', 'Creative Director'],
    topCountries: ['italy', 'spain', 'netherlands', 'france']
  },
  social: {
    title: 'Международные отношения, Право & Гуманитарные науки',
    icon: '🌐',
    salary: 'от 45 000 до 80 000 €/год в Европе',
    description: 'В сердце Европы расположены штаб-квартиры Европарламента, ООН, ЮНЕСКО, Гаагского трибунала. Это открывает прямой доступ к стажировкам в ведущих дипломатических миссиях.',
    topRoles: ['Diplomat / Policy Advisor', 'International Lawyer', 'Humanitarian Officer', 'Public Relations Specialist'],
    topCountries: ['france', 'austria', 'netherlands', 'czechia']
  }
};
