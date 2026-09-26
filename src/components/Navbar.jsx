import React, { useState } from 'react';
import {
  GraduationCap,
  Globe,
  Heart,
  User,
  Compass,
  Briefcase,
  Search,
  Menu,
  X
} from 'lucide-react';
import { languages } from '../data/languages';

export default function Navbar({
  activeTab,
  setActiveTab,
  favoritesCount,
  onOpenFavorites,
  onOpenAuth,
  onOpenLanguage,
  user,
  currentLang
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langObj = languages.find((l) => l.code === currentLang) || languages[0];

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Euro<span className="text-blue-600">Path</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 -mt-1">
                Поступление в Европу
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('search')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all ${
                activeTab === 'search'
                  ? 'bg-blue-50 text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Search className="w-4 h-4" />
              Поиск университетов
            </button>

            <button
              onClick={() => handleNavClick('countryQuiz')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all ${
                activeTab === 'countryQuiz'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-4 h-4" />
              Тест: Какая страна?
            </button>

            <button
              onClick={() => handleNavClick('careerQuiz')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all ${
                activeTab === 'careerQuiz'
                  ? 'bg-emerald-50 text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Профориентация
            </button>
          </nav>

          {/* Right Action Icons & Auth */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={onOpenLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-all"
              title="Сменить язык"
            >
              <span>{langObj.flag}</span>
              <span className="uppercase">{langObj.code}</span>
              <Globe className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Favorites Icon Button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-xl border border-slate-200 bg-white hover:bg-rose-50 hover:border-rose-200 text-slate-700 hover:text-rose-600 shadow-2xs transition-all"
              title="Избранные университеты и сравнение"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs animate-bounce">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* User Profile / Auth Button */}
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">
                {user ? user.name : 'Личный кабинет'}
              </span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-lg animate-fadeIn">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Главная
          </button>
          <button
            onClick={() => handleNavClick('search')}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-blue-700 bg-blue-50"
          >
            <Search className="w-4 h-4" />
            Поиск университетов
          </button>
          <button
            onClick={() => handleNavClick('countryQuiz')}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Compass className="w-4 h-4 text-indigo-600" />
            Тест: Какая страна мне подходит?
          </button>
          <button
            onClick={() => handleNavClick('careerQuiz')}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Briefcase className="w-4 h-4 text-emerald-600" />
            Профориентационный тест
          </button>
        </div>
      )}
    </header>
  );
}
