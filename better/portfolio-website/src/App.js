import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <TechStack />
      <FeaturedProjects />
      <Certificates />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;