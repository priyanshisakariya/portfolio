import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EngineeringApproach from './components/EngineeringApproach';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import HireMeCta from './components/HireMeCta';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Sticky Blurred Navigation Bar */}
      <Navbar />

      {/* Main Semantic Content for SEO & Accessibility */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <EngineeringApproach />
        <Education />
        <Certifications />
        <ResumeSection />
        <HireMeCta />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
