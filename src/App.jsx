import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountryLandmarkPreview from './components/CountryLandmarkPreview';
import UniversityFilter from './components/UniversityFilter';
import UniversityCard from './components/UniversityCard';
import UniversityModal from './components/UniversityModal';
import CountryQuiz from './components/CountryQuiz';
import CareerQuiz from './components/CareerQuiz';
import FavoritesModal from './components/FavoritesModal';
import AuthModal from './components/AuthModal';
import LanguageOnboarding from './components/LanguageOnboarding';
import Footer from './components/Footer';

import { universities } from './data/universities';
import { countries } from './data/countries';
import { Search, Compass, Briefcase, Sparkles, Filter, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation tab: 'home' | 'search' | 'countryQuiz' | 'careerQuiz'
  const [activeTab, setActiveTab] = useState('home');

  // Language onboarding state
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('euro_lang') || 'ru';
  });
  const [showLanguageOnboarding, setShowLanguageOnboarding] = useState(() => {
    return !localStorage.getItem('euro_lang');
  });

  // User auth state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('euro_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('euro_favorites');
      return saved ? JSON.parse(saved) : ['tum', 'polimi'];
    } catch {
      return ['tum', 'polimi'];
    }
  });
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

  // University Detail Modal
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // Filter state
  const initialFilters = {
    searchQuery: '',
    selectedCountries: [],
    selectedField: 'all',
    degree: 'all',
    onlyFree: false,
    onlyScholarships: false,
    sortBy: 'rank'
  };
  const [filters, setFilters] = useState(initialFilters);

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('euro_favorites', JSON.stringify(favorites));
    } catch (e) {
      // ignore
    }
  }, [favorites]);

  const handleToggleFavorite = (uniId) => {
    setFavorites((prev) =>
      prev.includes(uniId) ? prev.filter((id) => id !== uniId) : [...prev, uniId]
    );
  };

  const handleLogin = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('euro_user', JSON.stringify(userData));
    } catch (e) {
      // ignore
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('euro_user');
    } catch (e) {
      // ignore
    }
  };

  // Filter and sort universities
  const filteredUniversities = useMemo(() => {
    return universities
      .filter((u) => {
        // Search query
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchesName = u.name.toLowerCase().includes(q);
          const matchesLocal = u.localName.toLowerCase().includes(q);
          const matchesCity = u.city.toLowerCase().includes(q);
          const matchesCountry = u.countryName.toLowerCase().includes(q);
          const matchesProg = u.keyPrograms.some((p) => p.name.toLowerCase().includes(q));
          if (!matchesName && !matchesLocal && !matchesCity && !matchesCountry && !matchesProg) {
            return false;
          }
        }

        // Country filter
        if (filters.selectedCountries.length > 0) {
          if (!filters.selectedCountries.includes(u.countryId)) {
            return false;
          }
        }

        // Field / Direction
        if (filters.selectedField !== 'all') {
          if (!u.fields.includes(filters.selectedField)) {
            return false;
          }
        }

        // Degree filter
        if (filters.degree !== 'all') {
          if (!u.degrees.includes(filters.degree)) {
            return false;
          }
        }

        // Only free tuition
        if (filters.onlyFree && !u.tuition.isFree) {
          return false;
        }

        // Only with scholarships
        if (filters.onlyScholarships && !u.scholarship.available) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'tuitionAsc') {
          return a.tuition.amount - b.tuition.amount;
        }
        if (filters.sortBy === 'costAsc') {
          return a.livingCostMonth - b.livingCostMonth;
        }
        return 0; // default QS order
      });
  }, [filters]);

  // Handlers for cross-component triggers
  const handleStartSearch = () => {
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountrySelectedFromQuiz = (countryId) => {
    setFilters({
      ...initialFilters,
      selectedCountries: [countryId]
    });
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFieldSelectedFromQuiz = (fieldId) => {
    setFilters({
      ...initialFilters,
      selectedField: fieldId
    });
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountrySelectedFromAtlas = (countryId) => {
    setFilters((prev) => ({
      ...prev,
      selectedCountries: [countryId]
    }));
    setActiveTab('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenLanguage={() => setShowLanguageOnboarding(true)}
        user={user}
        currentLang={currentLang}
      />

      {/* Main Dynamic Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onStartSearch={handleStartSearch}
              onStartCountryQuiz={() => setActiveTab('countryQuiz')}
              onStartCareerQuiz={() => setActiveTab('careerQuiz')}
            />

            {/* Interactive Country Landmark Visual Showcase */}
            <CountryLandmarkPreview
              onSelectCountry={handleCountrySelectedFromAtlas}
              selectedCountryId={filters.selectedCountries[0]}
            />

            {/* Featured Universities Preview */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 text-left">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Популярные университеты Европы
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Ведущие программы со стипендиями
                  </h2>
                </div>

                <button
                  onClick={handleStartSearch}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <span>Открыть все {universities.length} университетов</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.slice(0, 6).map((uni) => (
                  <UniversityCard
                    key={uni.id}
                    university={uni}
                    isFavorite={favorites.includes(uni.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectUniversity={setSelectedUniversity}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'search' && (
          <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Filter Controls Component */}
            <UniversityFilter
              filters={filters}
              setFilters={setFilters}
              onReset={() => setFilters(initialFilters)}
              totalFound={filteredUniversities.length}
            />

            {/* University Cards Grid */}
            {filteredUniversities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((uni) => (
                  <UniversityCard
                    key={uni.id}
                    university={uni}
                    isFavorite={favorites.includes(uni.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onSelectUniversity={setSelectedUniversity}
                  />
                ))}
              </div>
            ) : (
              /* Empty Search Result State */
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  По заданным фильтрам ничего не найдено
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Попробуйте снять жесткие ограничения по стоимости или выбрать «Все страны».
                </p>
                <button
                  onClick={() => setFilters(initialFilters)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors"
                >
                  Сбросить все параметры
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'countryQuiz' && (
          <CountryQuiz
            onSelectCountryForCatalog={handleCountrySelectedFromQuiz}
            onNavigateHome={() => setActiveTab('home')}
          />
        )}

        {activeTab === 'careerQuiz' && (
          <CareerQuiz
            onSelectFieldForCatalog={handleFieldSelectedFromQuiz}
            onNavigateHome={() => setActiveTab('home')}
          />
        )}
      </main>

      {/* Global Modals */}
      {/* 1. Language Onboarding Modal */}
      {showLanguageOnboarding && (
        <LanguageOnboarding
          onSelectLanguage={(lang) => {
            setCurrentLang(lang);
            setShowLanguageOnboarding(false);
          }}
          onClose={() => setShowLanguageOnboarding(false)}
        />
      )}

      {/* 2. University Detail View Modal */}
      {selectedUniversity && (
        <UniversityModal
          university={selectedUniversity}
          isOpen={Boolean(selectedUniversity)}
          onClose={() => setSelectedUniversity(null)}
          isFavorite={favorites.includes(selectedUniversity.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* 3. Favorites and Comparison Modal */}
      {isFavoritesModalOpen && (
        <FavoritesModal
          isOpen={isFavoritesModalOpen}
          onClose={() => setIsFavoritesModalOpen(false)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectUniversity={setSelectedUniversity}
        />
      )}

      {/* 4. User Profile & Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          user={user}
          onLogin={handleLogin}
          onLogout={handleLogout}
          favoritesCount={favorites.length}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
