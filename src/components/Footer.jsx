import React from 'react';
import { GraduationCap, Heart, Sparkles, Globe, Compass, Briefcase } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Column 1: Brand & USP */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tight">
                Euro<span className="text-blue-400">Path</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              «Поступление в Европу — проще, ближе и понятнее». Интерактивный сервис нового поколения, объединяющий поиск университетов, стипендий DSU/DAAD, тест на выбор страны и профориентационный навигатор.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MVP версия продукта для первых абитуриентов</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Разделы платформы
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('search')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Каталог университетов
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countryQuiz')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Тест: «Какая страна подходит?»
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careerQuiz')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Профориентационный тест
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Интерактивный атлас стран
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Countries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Топовые направления
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              🇩🇪 Германия • 🇳🇱 Нидерланды • 🇮🇹 Италия • 🇫🇷 Франция • 🇪🇸 Испания • 🇨🇿 Чехия • 🇦🇹 Австрия • 🇸🇪 Швеция • 🇵🇱 Польша
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              Программы с бесплатным обучением (0 €) и грантами до 100%.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 EuroPath. Сделано с заботой о будущем абитуриентов.</p>
          <div className="flex items-center gap-1">
            <span>Проект создан в рамках инициативы доступного образования</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
