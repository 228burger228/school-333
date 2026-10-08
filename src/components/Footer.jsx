import React from 'react';
import { GraduationCap, Heart, Sparkles, Globe, Compass, Briefcase, Award, BookOpen, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#500000] text-[#EFE0CD] pt-14 pb-10 border-t-4 border-[#8B0000] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#8B0000]/40">
          {/* Column 1: Brand & Academic Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#8B0000] border border-[#EFE0CD]/30 flex items-center justify-center text-[#EFE0CD] font-black shadow-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[#EFE0CD]">
                  Maybe <span className="text-[#DFCEB8]">abroad?</span>
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-[#EFE0CD]/60 -mt-1">
                  Европейский образовательный навигатор
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE0CD]/85 max-w-md leading-relaxed font-medium">
              «Поступление в Европу — проще, ближе и понятнее». Интерактивный сервис для абитуриентов и студентов, объединяющий подбор 13 стран, 10 направлений, стипендий DSU и DAAD, профориентацию и пошаговые требования к зачислению.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>13 стран Европы</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Стипендии до 100%</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>0 € в госвузах</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFE0CD] mb-4 pb-1 border-b border-[#8B0000]/40">
              Разделы сервиса
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFE0CD]/80 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold">⋯</span>
                  <span>13 стран Европы</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('universities')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Каталог 3D-карточек</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Гид и стипендии 2026/2027</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countryQuiz')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Тест «Какая страна подходит?»</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careerQuiz')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Профориентационный тест</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Highlights */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFE0CD] mb-4 pb-1 border-b border-[#8B0000]/40">
              Популярные стипендии
            </h4>
            <div className="space-y-2 text-xs text-[#EFE0CD]/80 leading-relaxed font-medium">
              <p>• <strong>DSU (Италия)</strong>: 0 € учеба + общежитие + до 7 500 €/год</p>
              <p>• <strong>DAAD (Германия)</strong>: гранты на проживание до 934 €/мес</p>
              <p>• <strong>Eiffel (Франция)</strong>: 1 181 €/мес + субсидия CAF</p>
              <p>• <strong>Чехия & Словакия</strong>: 100% бесплатно на нац. языках</p>
            </div>
          </div>
        </div>

        {/* Bottom Imprint */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE0CD]/60 font-medium">
          <p>© 2026 Maybe abroad?. Все права защищены. Интерактивная платформа европейского образования.</p>
          <div className="flex items-center gap-2 text-[#EFE0CD]/75">
            <span>Цветовая гамма: #8B0000 • #EFE0CD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
