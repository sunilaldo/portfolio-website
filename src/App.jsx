import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation';
import Background from './components/Background';
import SocialLinks from './components/SocialLinks';

import HeroAbout from './pages/HeroAbout';
import CallToAction from './pages/CallToAction';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Profiles from './pages/Profiles';
import Journals from './pages/Journals';

function App() {
  const location = useLocation();

  return (
    <>
      <Background />
      <div className="bg-blob"></div>
      <Navigation />
      <SocialLinks />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroAbout />} />
          <Route path="/cta" element={<CallToAction />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
