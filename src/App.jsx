import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAndEducation from './components/SkillsAndEducation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <SkillsAndEducation />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
