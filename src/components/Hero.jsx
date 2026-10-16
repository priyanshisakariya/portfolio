import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  MapPin, 
  GraduationCap,
  Sparkles,
  ExternalLink,
  CheckCircle,
  X,
  Layers,
  Code
} from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { personal } = portfolioData;
  const [showResumeModal, setShowResumeModal] = useState(false);
  const modalRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowResumeModal(false);
    };
    if (showResumeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showResumeModal]);

  return (
    <section id="home" className="hero-section">
      {/* Background Ambient Orbs */}
      <div className="ambient-glow-1" aria-hidden="true"></div>
      <div className="ambient-glow-2" aria-hidden="true"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Narrative (58%) */}
        <div className="hero-content">
          {/* Top Status & Freelance Availability Strip */}
          <div className="hero-top-strip">
            <div className="hero-category-badge">
              <span>{personal.focus}</span>
            </div>

            <div className="hero-status-pill" title={personal.statusDetail}>
              <span className="status-dot"></span>
              <span>{personal.status}</span>
            </div>
          </div>

          {/* Main H1 - Single H1 for SEO */}
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name-label">{personal.name}</span>
            <span className="hero-statement gradient-text">
              {personal.headline}
            </span>
          </h1>

          {/* Subtext Description */}
          <p className="hero-description">
            {personal.heroBio}
          </p>

          {/* Metadata Highlights */}
          <div className="hero-meta-strip">
            <div className="hero-meta-item">
              <GraduationCap size={16} className="hero-meta-icon" />
              <span>MCA (2025–2027) • Sardar Vallabhbhai Global Univ</span>
            </div>
            <div className="hero-meta-item">
              <MapPin size={16} className="hero-meta-icon" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View My Work</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-teal-outline hero-btn">
              <Sparkles size={16} />
              <span>Hire Me</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary hero-btn"
              onClick={() => setShowResumeModal(true)}
              aria-haspopup="dialog"
              aria-expanded={showResumeModal}
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Quick Technical Highlights */}
          <div className="hero-quick-tech">
            <span className="quick-tech-label">CORE TECHNOLOGIES:</span>
            <div className="quick-tech-tags">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Python (FastAPI)</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">Docker &amp; Git</span>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-Layered Portrait Presentation (42%) */}
        <div className="hero-visual">
          <div className="hero-portrait-stage">
            {/* Ambient soft radial glow */}
            <div className="portrait-ambient-glow" aria-hidden="true"></div>

            {/* Subtle geometric halo ring for depth */}
            <div className="portrait-backdrop-ring" aria-hidden="true"></div>

            {/* Multi-Layer Glass Bezel Frame */}
            <div className="portrait-outer-frame">
              <div className="portrait-glass-layer">
                <div className="portrait-canvas">
                  <img
                    src={personal.avatar}
                    alt="Priyanshi Sakariya - Web Developer & Software Engineer"
                    className="real-profile-photo"
                    loading="eager"
                  />
                  <div className="portrait-edge-vignette" aria-hidden="true"></div>
                </div>
              </div>
            </div>

            {/* Floating Freelance Availability Pill */}
            <div className="portrait-floating-badge">
              <span className="floating-dot"></span>
              <div className="floating-text">
                <span className="floating-title">Open for Freelance</span>
                <span className="floating-sub">Web &amp; API Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Resume Download Modal */}
      {showResumeModal && (
        <div 
          className="modal-overlay" 
          onClick={() => setShowResumeModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div 
            className="coorix-card resume-download-modal" 
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-modal-header">
              <div>
                <span className="section-label">Select Tailored Resume</span>
                <h3 id="resume-modal-title" className="resume-modal-title">Download Resume</h3>
                <p className="resume-modal-sub">
                  Choose the specialized resume aligned with your project requirements:
                </p>
              </div>
              <button 
                type="button" 
                className="resume-modal-close"
                onClick={() => setShowResumeModal(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="resume-modal-cards">
              {/* Option 1: Python Developer */}
              <div className="resume-choice-card">
                <div className="choice-icon-box">
                  <Code size={22} className="choice-icon" />
                </div>
                <div className="choice-content">
                  <div className="choice-title-row">
                    <h4 className="choice-title">Python Developer Resume</h4>
                    <span className="choice-tag">FastAPI &amp; APIs</span>
                  </div>
                  <p className="choice-specialty">{personal.resumes.python.specialty}</p>
                  <ul className="choice-points">
                    {personal.resumes.python.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={13} className="choice-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="choice-actions">
                    <a
                      href={personal.resumes.python.url}
                      download={personal.resumes.python.filename}
                      className="btn btn-primary btn-sm"
                      onClick={() => setShowResumeModal(false)}
                    >
                      <FileDown size={15} />
                      <span>Download Python PDF</span>
                    </a>
                    <a
                      href={personal.resumes.python.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Preview</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Option 2: Full Stack Developer */}
              <div className="resume-choice-card">
                <div className="choice-icon-box">
                  <Layers size={22} className="choice-icon" />
                </div>
                <div className="choice-content">
                  <div className="choice-title-row">
                    <h4 className="choice-title">Full Stack Developer Resume</h4>
                    <span className="choice-tag">React &amp; MERN</span>
                  </div>
                  <p className="choice-specialty">{personal.resumes.fullstack.specialty}</p>
                  <ul className="choice-points">
                    {personal.resumes.fullstack.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={13} className="choice-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="choice-actions">
                    <a
                      href={personal.resumes.fullstack.url}
                      download={personal.resumes.fullstack.filename}
                      className="btn btn-primary btn-sm"
                      onClick={() => setShowResumeModal(false)}
                    >
                      <FileDown size={15} />
                      <span>Download Full Stack PDF</span>
                    </a>
                    <a
                      href={personal.resumes.fullstack.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Preview</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
