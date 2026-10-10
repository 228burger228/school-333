import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountriesScreen from './components/CountriesScreen';
import DirectionsScreen from './components/DirectionsScreen';
import UniversityListScreen from './components/UniversityListScreen';
import UniversityDetailModal from './components/UniversityDetailModal';
import WatercolorTransition from './components/WatercolorTransition';
import CountryQuiz from './components/CountryQuiz';
import CareerQuiz from './components/CareerQuiz';
import FavoritesModal from './components/FavoritesModal';
import AuthModal from './components/AuthModal';
import LanguageOnboarding from './components/LanguageOnboarding';
import AdmissionGuideScreen from './components/AdmissionGuideScreen';
import FreeAuditModal from './components/FreeAuditModal';
import FloatingQuickNav from './components/FloatingQuickNav';
import Footer from './components/Footer';

import { universities } from './data/universities';
import { countries } from './data/countries';
import { studyDirections } from './data/directions';

export default function App() {
  // Screens: 'home' | 'countries' | 'directions' | 'universities' | 'countryQuiz' | 'careerQuiz' | 'guide'
  const [activeScreen, setActiveScreen] = useState('home');

  // Audit Modal state
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditTargetUniversity, setAuditTargetUniversity] = useState(null);

  const handleOpenAudit = (uni = null) => {
    setAuditTargetUniversity(uni);
    setIsAuditModalOpen(true);
  };

  // Currently selected country and direction
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // default Spain
  const [selectedDirection, setSelectedDirection] = useState(studyDirections[1]); // default IT

  // Watercolor animation state
  const [watercolorState, setWatercolorState] = useState({
    isActive: false,
    origin: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    directionTitle: '',
    directionIcon: ''
  });

  // Language onboarding
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('euro_lang') || 'ru';
  });
  const [showLanguageOnboarding, setShowLanguageOnboarding] = useState(false);

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
      return saved ? JSON.parse(saved) : ['uab', 'tum', 'polimi'];
    } catch {
      return ['uab', 'tum', 'polimi'];
    }
  });
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);

  // University Detail Modal
  const [selectedUniversityForModal, setSelectedUniversityForModal] = useState(null);

  // Simultaneous Live Filters State
  const initialFilters = {
    searchQuery: '',
    countryId: 'all',
    directionId: 'all',
    tuitionRange: 'all', // 'all' | 'free' | 'low' | 'mid'
    onlyScholarships: false,
    onlyFree: false,
    examRequirement: 'all' // 'all' | 'noExam' | 'englishOnly'
  };
  const [filters, setFilters] = useState(initialFilters);

  // Sync favorites
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

  // Step 1: Open Countries list (triggered by «⋯» or from hero)
  const handleOpenCountries = () => {
    setActiveScreen('countries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step 2: Country selected -> go to directions
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setFilters((prev) => ({
      ...prev,
      countryId: country.id
    }));
    setActiveScreen('directions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Step 3 & 4: Direction selected -> trigger watercolor animation -> open universities
  const handleSelectDirection = (direction, originCoordinates) => {
    setSelectedDirection(direction);
    setFilters((prev) => ({
      ...prev,
      directionId: direction.id
    }));

    setWatercolorState({
      isActive: true,
      origin: originCoordinates || { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      directionTitle: direction.title,
      directionIcon: direction.icon
    });
  };

  const handleWatercolorComplete = () => {
    setWatercolorState((prev) => ({ ...prev, isActive: false }));
    setActiveScreen('universities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter universities based on simultaneous filters
  const filteredUniversities = useMemo(() => {
    return universities.filter((u) => {
      // Search text
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = u.name.toLowerCase().includes(q);
        const matchesCity = u.city.toLowerCase().includes(q);
        const matchesCountry = u.countryName.toLowerCase().includes(q);
        const matchesProg = u.keyPrograms.some((p) => p.name.toLowerCase().includes(q));
        if (!matchesName && !matchesCity && !matchesCountry && !matchesProg) {
          return false;
        }
      }

      // Country filter
      if (filters.countryId !== 'all' && u.countryId !== filters.countryId) {
        return false;
      }

      // Direction filter
      if (filters.directionId !== 'all') {
        if (!u.fields.includes(filters.directionId)) {
          return false;
        }
      }

      // Tuition range
      if (filters.tuitionRange === 'free' && !u.tuition.isFree) {
        return false;
      }
      if (filters.tuitionRange === 'low' && u.tuition.amount > 3000) {
        return false;
      }
      if (filters.tuitionRange === 'mid' && (u.tuition.amount < 3000 || u.tuition.amount > 8000)) {
        return false;
      }

      // Only scholarships
      if (filters.onlyScholarships && !u.scholarship.available) {
        return false;
      }

      // Only 0€
      if (filters.onlyFree && !u.tuition.isFree) {
        return false;
      }

      // Language Exam
      if (filters.examRequirement === 'noExam' && !u.languageReq.noExamOption) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Quiz navigation handlers
  const handleCountryFromQuiz = (countryId) => {
    const matched = countries.find((c) => c.id === countryId) || countries[0];
    handleSelectCountry(matched);
  };

  const handleFieldFromQuiz = (fieldId) => {
    const matched = studyDirections.find((d) => d.id === fieldId) || studyDirections[0];
    setSelectedDirection(matched);
    setFilters((prev) => ({
      ...prev,
      directionId: fieldId
    }));
    setActiveScreen('universities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAggregatorSubmit = ({ fundingOption, selectedLanguage, selectedExam }) => {
    setFilters((prev) => ({
      ...initialFilters,
      tuitionRange: fundingOption === 'free' ? 'free' : 'all',
      onlyFree: fundingOption === 'free',
      onlyScholarships: fundingOption === 'scholarship',
      examRequirement: selectedExam === 'Пока не сдавал' ? 'noExam' : 'all'
    }));
    setActiveScreen('universities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFE0CD] text-[#2D1810] font-sans selection:bg-[#8B0000] selection:text-[#EFE0CD]">
      {/* Top Navigation Bar with «⋯» button */}
      <Navbar
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCountries={handleOpenCountries}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenLanguage={() => setShowLanguageOnboarding(true)}
        onOpenAudit={() => handleOpenAudit(null)}
        user={user}
        currentLang={currentLang}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {/* SCREEN 1: Home */}
        {activeScreen === 'home' && (
          <div>
            <Hero
              onOpenCountries={handleOpenCountries}
              onStartSearch={() => {
                setFilters(initialFilters);
                setActiveScreen('universities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartCountryQuiz={() => {
                setActiveScreen('countryQuiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onStartCareerQuiz={() => {
                setActiveScreen('careerQuiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenGuide={() => {
                setActiveScreen('guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onAggregate={handleAggregatorSubmit}
              currentLang={currentLang}
            />
          </div>
        )}

        {/* SCREEN 2: 13 Countries Grid */}
        {activeScreen === 'countries' && (
          <CountriesScreen
            onSelectCountry={handleSelectCountry}
            onBack={() => setActiveScreen('home')}
          />
        )}

        {/* SCREEN 3: Study Directions */}
        {activeScreen === 'directions' && (
          <DirectionsScreen
            country={selectedCountry}
            onSelectDirection={handleSelectDirection}
            onBackToCountries={handleOpenCountries}
            onShowAllInCountry={() => {
              setFilters({
                ...initialFilters,
                countryId: selectedCountry.id
              });
              setActiveScreen('universities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* SCREEN 4: Universities 3D Flip Cards & Simultaneous Filters */}
        {activeScreen === 'universities' && (
          <UniversityListScreen
            universities={filteredUniversities}
            filters={filters}
            setFilters={setFilters}
            onResetFilters={() => setFilters(initialFilters)}
            selectedCountry={filters.countryId !== 'all' ? countries.find((c) => c.id === filters.countryId) : null}
            selectedDirection={filters.directionId !== 'all' ? studyDirections.find((d) => d.id === filters.directionId) : null}
            onBackToDirections={() => {
              if (selectedCountry) {
                setActiveScreen('directions');
              } else {
                setActiveScreen('countries');
              }
            }}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenDetails={(uni) => setSelectedUniversityForModal(uni)}
            currentLang={currentLang}
          />
        )}

        {/* SCREEN 5: Country Quiz */}
        {activeScreen === 'countryQuiz' && (
          <CountryQuiz
            onSelectCountryForCatalog={handleCountryFromQuiz}
            onNavigateHome={() => setActiveScreen('home')}
          />
        )}

        {/* SCREEN 6: Career Quiz */}
        {activeScreen === 'careerQuiz' && (
          <CareerQuiz
            onSelectFieldForCatalog={handleFieldFromQuiz}
            onNavigateHome={() => setActiveScreen('home')}
          />
        )}

        {/* SCREEN 7: Admission Guide, Timeline & Scholarships */}
        {activeScreen === 'guide' && (
          <AdmissionGuideScreen
            onBack={() => {
              setActiveScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCatalog={handleOpenCountries}
            onNavigateToCountryUniversities={(countryId) => {
              setFilters({
                ...initialFilters,
                countryId
              });
              setActiveScreen('universities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currentLang={currentLang}
          />
        )}
      </main>

      {/* Watercolor Transition Animation */}
      <WatercolorTransition
        isActive={watercolorState.isActive}
        origin={watercolorState.origin}
        directionTitle={watercolorState.directionTitle}
        directionIcon={watercolorState.directionIcon}
        onComplete={handleWatercolorComplete}
      />

      {/* University Detail Page Modal */}
      {selectedUniversityForModal && (
        <UniversityDetailModal
          university={selectedUniversityForModal}
          isOpen={Boolean(selectedUniversityForModal)}
          onClose={() => setSelectedUniversityForModal(null)}
          isFavorite={favorites.includes(selectedUniversityForModal.id)}
          onToggleFavorite={handleToggleFavorite}
          onRequestAudit={handleOpenAudit}
          currentLang={currentLang}
        />
      )}

      {/* Free Express Audit Modal */}
      <FreeAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => {
          setIsAuditModalOpen(false);
          setAuditTargetUniversity(null);
        }}
        preselectedUniversity={auditTargetUniversity}
        currentLang={currentLang}
      />

      {/* Favorites and Comparison Modal */}
      {isFavoritesModalOpen && (
        <FavoritesModal
          isOpen={isFavoritesModalOpen}
          onClose={() => setIsFavoritesModalOpen(false)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectUniversity={(uni) => setSelectedUniversityForModal(uni)}
        />
      )}

      {/* User Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          user={user}
          onLogin={(userData) => setUser(userData)}
          onLogout={() => setUser(null)}
          favoritesCount={favorites.length}
        />
      )}

      {/* Language Onboarding */}
      {showLanguageOnboarding && (
        <LanguageOnboarding
          currentLang={currentLang}
          onSelectLanguage={(lang) => {
            setCurrentLang(lang);
            localStorage.setItem('euro_lang', lang);
            setShowLanguageOnboarding(false);
          }}
          onClose={() => setShowLanguageOnboarding(false)}
        />
      )}

      {/* Floating Quick Navigation Dock */}
      <FloatingQuickNav
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCountries={handleOpenCountries}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesModalOpen(true)}
        onOpenAudit={() => handleOpenAudit(null)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer onNavigate={(screen) => setActiveScreen(screen)} currentLang={currentLang} />
    </div>
  );
}
