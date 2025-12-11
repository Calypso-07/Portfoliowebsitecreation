import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { ResumePage } from './components/ResumePage';
import { GameDetailPage } from './components/GameDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle browser back/forward buttons
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page from URL

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Parse game detail pages
  const isGameDetail = currentPage.startsWith('game/');
  const gameId = isGameDetail ? currentPage.split('/')[1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <motion.main
        key={currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'resume' && <ResumePage />}
        {isGameDetail && gameId && (
          <GameDetailPage gameId={gameId} onNavigate={handleNavigate} />
        )}
      </motion.main>

      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}