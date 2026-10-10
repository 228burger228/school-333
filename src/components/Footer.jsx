import React from 'react';
import { GraduationCap, Heart, Sparkles, Globe, Compass, Briefcase, Award, BookOpen, ShieldCheck } from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function Footer({ onNavigate, currentLang = 'ru' }) {
  const t = getTranslation(currentLang);

  return (
    <footer className="bg-[#500000] text-[#EFE0CD] pt-14 pb-24 sm:pb-12 border-t-4 border-[#8B0000] text-left">
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
                  {t.footer.academicMissionTitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EFE0CD]/85 max-w-md leading-relaxed font-medium">
              {t.footer.academicMissionDesc}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.footer.badge13}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>{t.footer.badgeScholarships}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B0000] border border-[#EFE0CD]/20 text-[#EFE0CD] text-[11px] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.footer.badgeFreeTuition}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFE0CD] mb-4 pb-1 border-b border-[#8B0000]/40">
              {t.footer.sectionsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFE0CD]/80 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold">⋯</span>
                  <span>{t.footer.linkCountries}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('universities')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{t.footer.linkCatalog}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t.footer.linkGuide}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countryQuiz')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t.footer.linkCountryQuiz}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careerQuiz')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{t.footer.linkCareerQuiz}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Highlights */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#EFE0CD] mb-4 pb-1 border-b border-[#8B0000]/40">
              {t.footer.popularScholarshipsTitle}
            </h4>
            <div className="space-y-2 text-xs text-[#EFE0CD]/80 leading-relaxed font-medium">
              <p>{t.footer.scholDsu}</p>
              <p>{t.footer.scholDaad}</p>
              <p>{t.footer.scholEiffel}</p>
              <p>{t.footer.scholCzech}</p>
            </div>
          </div>
        </div>

        {/* Bottom Imprint */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE0CD]/60 font-medium">
          <p>© 2026 {t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-[#EFE0CD]/75">
            <span>{t.footer.paletteNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
