import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';

import ProjectsSeparator from './components/ProjectsSeparator';
import HorizontalScrollProjects from './components/HorizontalScrollProjects';
import NiholProject from './components/NiholProject';
import AboutMeSection from './components/AboutMeSection';
import AchievementsSection from './components/AchievementsSection';

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <Portfolio />
      <ProjectsSeparator />
      <HorizontalScrollProjects />
      <NiholProject />
      <AboutMeSection />
      <AchievementsSection />
    </div>
  );
}

export default App;
