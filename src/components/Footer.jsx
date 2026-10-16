import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const { personal, navLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container-wide footer-container">
        {/* Top Row */}
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="footer-mark font-mono">PS</span>
              <span className="footer-brand-name">{personal.name}</span>
            </div>
            <p className="footer-tagline">
              Web Developer Building Modern Websites and Practical Web Applications
            </p>
            <p className="footer-academic-line">
              MCA Student • Sardar Vallabhbhai Global University, Ahmedabad
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Dual Resumes */}
          <div className="footer-social-col">
            <span className="footer-col-title">Connect &amp; Download</span>
            <div className="footer-social-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={15} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                aria-label="Email Me"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>

              <a
                href={personal.resumes.python.url}
                download={personal.resumes.python.filename}
                className="footer-social-btn resume-btn"
                aria-label="Download Python Developer Resume"
              >
                <FileDown size={15} />
                <span>Python Resume</span>
              </a>

              <a
                href={personal.resumes.fullstack.url}
                download={personal.resumes.fullstack.filename}
                className="footer-social-btn resume-btn"
                aria-label="Download Full Stack Developer Resume"
              >
                <FileDown size={15} />
                <span>Full Stack Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 Priyanshi Sakariya. Genuine Portfolio &amp; Verified Project Showcase.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
