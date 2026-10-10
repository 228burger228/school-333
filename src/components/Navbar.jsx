import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Globe,
  Heart,
  User,
  Compass,
  Briefcase,
  Search,
  BookOpen,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { languages } from '../data/languages';
import { getTranslation } from '../data/translations';

export default function Navbar({
  activeScreen,
  onNavigate,
  onOpenCountries,
  favoritesCount,
  onOpenFavorites,
  onOpenAuth,
  onOpenLanguage,
  onOpenAudit,
  user,
  currentLang
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langObj = languages.find((l) => l.code === currentLang) || languages[0];
  const t = getTranslation(currentLang);

  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-md border-b border-[#8B0000]/15 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#8B0000] text-[#EFE0CD] flex items-center justify-center font-black shadow-md shadow-[#8B0000]/25 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#8B0000]">
                Maybe <span className="text-[#630000]">abroad?</span>
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-[#2D1810]/60 -mt-1">
                {t.nav.brandSub}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {/* The PROMINENT «⋯» BUTTON from requirement 1 */}
            <button
              onClick={onOpenCountries}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-black transition-all shadow-xs ${
                activeScreen === 'countries' || activeScreen === 'directions'
                  ? 'bg-[#8B0000] text-[#EFE0CD]'
                  : 'bg-[#8B0000]/10 hover:bg-[#8B0000] text-[#8B0000] hover:text-[#EFE0CD] border border-[#8B0000]/25'
              }`}
              title="Перейти к списку стран"
            >
              <span className="text-base tracking-widest font-black">⋯</span>
              <span>{t.nav.countriesBtn}</span>
            </button>

            <button
              onClick={() => onNavigate('universities')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeScreen === 'universities'
                  ? 'bg-[#8B0000]/15 text-[#8B0000]'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000] hover:bg-[#8B0000]/5'
              }`}
            >
              <Search className="w-4 h-4" />
              {t.nav.allUnis}
            </button>

            <button
              onClick={() => onNavigate('guide')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeScreen === 'guide'
                  ? 'bg-[#8B0000]/15 text-[#8B0000]'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000] hover:bg-[#8B0000]/5'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {t.nav.guide}
            </button>

            <button
              onClick={() => onNavigate('countryQuiz')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeScreen === 'countryQuiz'
                  ? 'bg-[#8B0000]/15 text-[#8B0000]'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000] hover:bg-[#8B0000]/5'
              }`}
            >
              <Compass className="w-4 h-4" />
              {t.nav.countryQuiz}
            </button>

            <button
              onClick={() => onNavigate('careerQuiz')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeScreen === 'careerQuiz'
                  ? 'bg-[#8B0000]/15 text-[#8B0000]'
                  : 'text-[#2D1810]/80 hover:text-[#8B0000] hover:bg-[#8B0000]/5'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {t.nav.careerQuiz}
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={onOpenLanguage}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 min-h-[40px] rounded-xl border border-[#8B0000]/20 bg-white hover:bg-[#FAF5EE] text-[#8B0000] text-xs font-bold transition-all cursor-pointer"
              title="Сменить язык"
            >
              <span>{langObj.flag}</span>
              <span className="uppercase text-[11px] sm:text-xs">{langObj.code}</span>
              <Globe className="w-3.5 h-3.5 text-[#8B0000]/60 hidden sm:inline" />
            </button>

            {/* Favorites Icon */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl border border-[#8B0000]/20 bg-white hover:bg-[#8B0000]/10 text-[#8B0000] transition-all cursor-pointer"
              title="Избранные программы"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-[10px] font-black flex items-center justify-center shadow-xs animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Free Audit Quick Button (Desktop only) */}
            <button
              onClick={onOpenAudit}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#8B0000]/30 bg-[#EFE0CD]/60 hover:bg-[#8B0000] hover:text-[#EFE0CD] text-[#8B0000] text-xs font-black transition-all cursor-pointer shadow-2xs"
              title="Бесплатный расчет шансов на поступление"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.auditBtn}</span>
            </button>

            {/* Profile Button (Hidden on mobile < sm, accessible via Mobile Drawer) */}
            <button
              onClick={onOpenAuth}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>
                {user ? user.name : t.nav.cabinet}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 min-h-[40px] min-w-[40px] flex items-center justify-center text-[#8B0000] rounded-xl hover:bg-[#8B0000]/10 cursor-pointer"
              aria-label="Меню навигации"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/40 z-30 md:hidden backdrop-blur-2xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden relative z-40 bg-[#FAF5EE] border-b-2 border-[#8B0000]/20 px-4 pt-4 pb-6 space-y-2.5 text-left animate-fadeIn shadow-xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
            {/* User Account / Profile Card on Mobile */}
            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 min-h-[48px] rounded-2xl bg-white border border-[#8B0000]/25 text-[#8B0000] font-bold text-sm shadow-2xs cursor-pointer hover:bg-[#8B0000]/5 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-[#8B0000]" />
                <span className="font-black text-[#2D1810]">
                  {user ? user.name : t.nav.cabinet}
                </span>
              </span>
              <span className="text-[11px] font-extrabold bg-[#8B0000]/10 text-[#8B0000] px-3 py-1 rounded-full">
                {user ? 'Профиль' : 'Войти →'}
              </span>
            </button>

            {/* Free Audit Button on Mobile */}
            <button
              onClick={() => {
                onOpenAudit();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 min-h-[48px] rounded-2xl bg-[#EFE0CD] border border-[#8B0000]/30 text-[#8B0000] font-black text-xs sm:text-sm shadow-2xs cursor-pointer hover:bg-[#8B0000] hover:text-[#EFE0CD] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B0000]" />
                <span>{t.nav.mobileAudit}</span>
              </span>
              <span className="text-base">→</span>
            </button>

            {/* Prominent «⋯» on Mobile */}
            <button
              onClick={() => {
                onOpenCountries();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-3 min-h-[48px] rounded-2xl bg-[#8B0000] text-[#EFE0CD] font-black text-sm shadow-md cursor-pointer hover:bg-[#630000] transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-base tracking-widest font-black">⋯</span>
                <span>{t.nav.mobileCountries}</span>
              </span>
              <span className="text-lg">→</span>
            </button>

            <button
              onClick={() => {
                onNavigate('universities');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-bold text-[#8B0000] hover:bg-[#8B0000]/10 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>{t.nav.allUnis}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('guide');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-bold text-[#8B0000] hover:bg-[#8B0000]/10 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.nav.guide}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('countryQuiz');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-bold text-[#2D1810] hover:bg-[#8B0000]/10 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#8B0000]" />
              <span>{t.nav.countryQuiz}</span>
            </button>

            <button
              onClick={() => {
                onNavigate('careerQuiz');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-3 min-h-[44px] rounded-xl text-sm font-bold text-[#2D1810] hover:bg-[#8B0000]/10 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-[#8B0000]" />
              <span>{t.nav.careerQuiz}</span>
            </button>
          </div>
        </>
      )}
    </header>
  );
}
