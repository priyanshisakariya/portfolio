import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileDown, 
  ChevronDown,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ['home', 'about', 'services', 'projects', 'skills', 'certifications', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResumeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-wide navbar-container">
        {/* Brand Identity */}
        <a href="#home" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-logo-mark">
            <span>PS</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{portfolioData.personal.name}</span>
            <span className="brand-sub">Web Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {portfolioData.navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions & Socials */}
        <div className="navbar-actions">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="Priyanshi Sakariya GitHub Profile"
            title="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="Priyanshi Sakariya LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

          {/* Dual Resume Trigger Dropdown */}
          <div className="nav-resume-wrapper" ref={dropdownRef}>
            <button
              type="button"
              className="btn btn-secondary btn-sm nav-resume-btn"
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              aria-expanded={resumeDropdownOpen}
              aria-label="Download Resume Options"
            >
              <FileDown size={15} />
              <span>Resume</span>
              <ChevronDown size={14} className={`dropdown-chevron ${resumeDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {resumeDropdownOpen && (
              <div className="resume-dropdown-menu">
                <a
                  href={portfolioData.personal.resumes.python.url}
                  download={portfolioData.personal.resumes.python.filename}
                  className="resume-dropdown-item"
                  onClick={() => setResumeDropdownOpen(false)}
                >
                  <div className="dropdown-item-header">
                    <span className="dropdown-item-title">Python Developer Resume</span>
                    <span className="badge-tag">FastAPI</span>
                  </div>
                  <span className="dropdown-item-desc">FastAPI, Python 3, REST APIs, SQLAlchemy</span>
                </a>

                <div className="dropdown-divider"></div>

                <a
                  href={portfolioData.personal.resumes.fullstack.url}
                  download={portfolioData.personal.resumes.fullstack.filename}
                  className="resume-dropdown-item"
                  onClick={() => setResumeDropdownOpen(false)}
                >
                  <div className="dropdown-item-header">
                    <span className="dropdown-item-title">Full Stack Developer Resume</span>
                    <span className="badge-tag">React + MERN</span>
                  </div>
                  <span className="dropdown-item-desc">React.js, Node.js, Express, MongoDB, Spring Boot</span>
                </a>
              </div>
            )}
          </div>

          {/* Hire Me CTA Button */}
          <a href="#contact" className="btn btn-primary btn-sm nav-hire-btn">
            <Sparkles size={14} />
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {portfolioData.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-resume-options">
              <span className="mobile-resume-heading">Download Resume:</span>
              <div className="mobile-resume-btns">
                <a
                  href={portfolioData.personal.resumes.python.url}
                  download={portfolioData.personal.resumes.python.filename}
                  className="btn btn-secondary btn-sm"
                  onClick={closeMobileMenu}
                >
                  <FileDown size={14} />
                  <span>Python Resume</span>
                </a>
                <a
                  href={portfolioData.personal.resumes.fullstack.url}
                  download={portfolioData.personal.resumes.fullstack.filename}
                  className="btn btn-secondary btn-sm"
                  onClick={closeMobileMenu}
                >
                  <FileDown size={14} />
                  <span>Full Stack Resume</span>
                </a>
              </div>
            </div>

            <div className="mobile-socials">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              className="btn btn-primary btn-sm mobile-hire-cta"
              onClick={closeMobileMenu}
            >
              <MessageSquare size={16} />
              <span>Discuss a Project</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
