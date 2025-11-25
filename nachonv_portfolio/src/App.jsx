import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';

import ProjectsSeparator from './components/ProjectsSeparator';
import HorizontalScrollProjects from './components/HorizontalScrollProjects';

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <Portfolio />
      <ProjectsSeparator />
      <HorizontalScrollProjects />
    </div>
  );
}

export default App;
