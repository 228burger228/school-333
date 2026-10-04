import React, { useState } from 'react';
import {
  GraduationCap,
  Globe,
  Heart,
  User,
  Compass,
  Briefcase,
  Search,
  MoreHorizontal,
  Menu,
  X
} from 'lucide-react';
import { languages } from '../data/languages';

export default function Navbar({
  activeScreen,
  onNavigate,
  onOpenCountries,
  favoritesCount,
  onOpenFavorites,
  onOpenAuth,
  onOpenLanguage,
  user,
  currentLang
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langObj = languages.find((l) => l.code === currentLang) || languages[0];

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
                Euro<span className="text-[#630000]">Path</span>
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-[#2D1810]/60 -mt-1">
                Поступление в Европу
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
              <span>Страны Европы</span>
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
              Все университеты
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
              Тест: Какая страна?
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
              Профориентация
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={onOpenLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#8B0000]/20 bg-white hover:bg-[#FAF5EE] text-[#8B0000] text-xs font-bold transition-all"
              title="Сменить язык"
            >
              <span>{langObj.flag}</span>
              <span className="uppercase">{langObj.code}</span>
              <Globe className="w-3.5 h-3.5 text-[#8B0000]/60" />
            </button>

            {/* Favorites Icon */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl border border-[#8B0000]/20 bg-white hover:bg-[#8B0000]/10 text-[#8B0000] transition-all"
              title="Избранные программы"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#8B0000] text-[#EFE0CD] text-[10px] font-black flex items-center justify-center shadow-xs animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Profile Button */}
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#8B0000] hover:bg-[#630000] text-[#EFE0CD] text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">
                {user ? user.name : 'Кабинет'}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#8B0000] rounded-xl hover:bg-[#8B0000]/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5EE] border-b border-[#8B0000]/20 px-4 pt-3 pb-6 space-y-2 text-left animate-fadeIn">
          {/* Prominent «⋯» on Mobile */}
          <button
            onClick={() => {
              onOpenCountries();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#8B0000] text-[#EFE0CD] font-black text-sm shadow-md"
          >
            <span>⋯ Выбрать страну (13 стран)</span>
            <span className="text-lg">→</span>
          </button>

          <button
            onClick={() => {
              onNavigate('universities');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#8B0000] hover:bg-[#8B0000]/10"
          >
            <Search className="w-4 h-4" />
            Все университеты
          </button>

          <button
            onClick={() => {
              onNavigate('countryQuiz');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#2D1810] hover:bg-[#8B0000]/10"
          >
            <Compass className="w-4 h-4 text-[#8B0000]" />
            Тест: Какая страна подходит?
          </button>

          <button
            onClick={() => {
              onNavigate('careerQuiz');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-bold text-[#2D1810] hover:bg-[#8B0000]/10"
          >
            <Briefcase className="w-4 h-4 text-[#8B0000]" />
            Профориентационный тест
          </button>
        </div>
      )}
    </header>
  );
}
