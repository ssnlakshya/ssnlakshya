import React, { useEffect } from 'react';
import './App.css';
import CoreCards from './components/main-page/CoreCards';
import { juniorCoreTeam, seniorCoreTeam } from './components/main-page/CoreMembers';
import { Events_main } from './components/main-page/Events';
import EventCards from './components/main-page/EventCards';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import Teams from './pages/Teams';

function App() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const translateY = (scrollPosition / maxScroll) * 50; // Adjust range (e.g., 50px max shift)
      // document.querySelector('.app-container::after').style.transform = `translateY(-${translateY}px)`; // Parallax for shine overlay
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation); // Cleanup
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Header with Logo and Navigation */}
        <Header handleScroll={handleScroll}/>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.TEAM_PAGE} element={<Teams />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
