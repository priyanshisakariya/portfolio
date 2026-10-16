import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import './HireMeCta.css';

export default function HireMeCta() {
  const { personal } = portfolioData;

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus on the client name input after scrolling
      setTimeout(() => {
        const nameInput = document.getElementById('contact-name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  return (
    <section className="section hire-me-cta-section">
      <div className="container">
        <div className="coorix-card hire-cta-card">
          <div className="hire-cta-ambient" aria-hidden="true"></div>

          <div className="hire-cta-content text-center">
            <div className="section-label">
              <span className="section-label-dot"></span>
              <span>// READY TO COLLABORATE</span>
            </div>

            <h2 className="hire-cta-title">Have a Project in Mind?</h2>
            
            <p className="hire-cta-subtitle">
              Let's discuss your requirements and find a practical solution for your website or web application.
            </p>

            {/* Quick Guarantees / Scope */}
            <div className="hire-cta-badges">
              <div className="hire-badge-item">
                <CheckCircle2 size={15} className="badge-teal-icon" />
                <span>Responsive Frontend &amp; Web Apps</span>
              </div>
              <div className="hire-badge-item">
                <CheckCircle2 size={15} className="badge-teal-icon" />
                <span>FastAPI &amp; RESTful APIs</span>
              </div>
              <div className="hire-badge-item">
                <CheckCircle2 size={15} className="badge-teal-icon" />
                <span>Database Schemas &amp; Integration</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hire-cta-buttons">
              <button
                type="button"
                className="btn btn-primary btn-lg hire-action-btn"
                onClick={handleStartProject}
                aria-label="Start a Project - scroll to contact form"
              >
                <Sparkles size={18} />
                <span>Start a Project</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={`mailto:${personal.email}?subject=Web%20Development%20Project%20Inquiry`}
                className="btn btn-secondary btn-lg hire-action-btn"
                aria-label={`Email Priyanshi at ${personal.email}`}
              >
                <Mail size={18} />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
