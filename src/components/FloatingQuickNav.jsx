import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Globe,
  Search,
  BookOpen,
  Heart,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { getTranslation } from '../data/translations';

export default function FloatingQuickNav({
  activeScreen,
  onNavigate,
  onOpenCountries,
  favoritesCount = 0,
  onOpenFavorites,
  onOpenAudit,
  currentLang = 'ru'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const t = getTranslation(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick nav after user scrolls past 180px
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Быстрая плавающая навигация"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] max-w-lg animate-fadeIn select-none pointer-events-none"
    >
      <div className="pointer-events-auto bg-[#FAF5EE]/95 backdrop-blur-md border-2 border-[#8B0000]/25 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 shadow-2xl shadow-[#8B0000]/20 flex items-center justify-between gap-1 sm:gap-1.5 transition-all">
        {/* 1. Главная */}
        <button
          onClick={() => {
            onNavigate('home');
            scrollToTop();
          }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer min-h-[40px] ${
            activeScreen === 'home'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
          title="На главную"
        >
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span className="text-[10px] sm:text-xs">
            {currentLang === 'en' ? 'Home' : 'Главная'}
          </span>
        </button>

        {/* 2. Страны Европы («⋯») */}
        <button
          onClick={() => {
            onOpenCountries();
            scrollToTop();
          }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer min-h-[40px] ${
            activeScreen === 'countries' || activeScreen === 'directions'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
          title="Каталог 13 стран Европы"
        >
          <span className="text-xs sm:text-sm tracking-widest font-black leading-none">⋯</span>
          <span className="text-[10px] sm:text-xs">
            {currentLang === 'en' ? 'Countries' : 'Страны'}
          </span>
        </button>

        {/* 3. Каталог вузов */}
        <button
          onClick={() => {
            onNavigate('universities');
            scrollToTop();
          }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer min-h-[40px] ${
            activeScreen === 'universities'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
          title="Каталог университетов"
        >
          <Search className="w-4 h-4 shrink-0" />
          <span className="text-[10px] sm:text-xs">
            {currentLang === 'en' ? 'Unis' : 'Вузы'}
          </span>
        </button>

        {/* 4. Гид & Смета */}
        <button
          onClick={() => {
            onNavigate('guide');
            scrollToTop();
          }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer min-h-[40px] ${
            activeScreen === 'guide'
              ? 'bg-[#8B0000] text-[#EFE0CD] shadow-sm'
              : 'text-[#8B0000] hover:bg-[#8B0000]/10'
          }`}
          title="Гид и расчет расходов"
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="text-[10px] sm:text-xs">
            {currentLang === 'en' ? 'Guide' : 'Гид'}
          </span>
        </button>

        {/* 5. Избранное (с бейджем) */}
        <button
          onClick={onOpenFavorites}
          className="relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-black text-[#8B0000] hover:bg-[#8B0000]/10 transition-all cursor-pointer min-h-[40px]"
          title="Избранные программы"
        >
          <div className="relative">
            <Heart className="w-4 h-4 shrink-0" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#8B0000] text-[#EFE0CD] text-[9px] font-black flex items-center justify-center shadow-xs">
                {favoritesCount}
              </span>
            )}
          </div>
          <span className="hidden md:inline text-[10px] sm:text-xs">
            {currentLang === 'en' ? 'Saved' : 'Избранное'}
          </span>
        </button>

        <div className="w-px h-5 bg-[#8B0000]/20 mx-0.5 shrink-0" />

        {/* 6. Кнопка «Наверх» */}
        <button
          onClick={scrollToTop}
          className="p-2 sm:px-2.5 rounded-full bg-[#8B0000]/10 hover:bg-[#8B0000] hover:text-[#EFE0CD] text-[#8B0000] font-black text-xs transition-all cursor-pointer shrink-0 min-h-[40px] flex items-center justify-center"
          title="Вернуться наверх"
          aria-label="Прокрутить страницу наверх"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
