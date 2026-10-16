import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Globe, 
  Code, 
  Server, 
  Layers, 
  Bug, 
  Database, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService }) {
  const { services } = portfolioData;

  const serviceIcons = {
    "website-development": <Globe size={24} />,
    "react-frontend": <Code size={24} />,
    "python-backend": <Server size={24} />,
    "full-stack-apps": <Layers size={24} />,
    "website-bug-fixing": <Bug size={24} />,
    "database-integration": <Database size={24} />
  };

  const handleDiscuss = (serviceTitle) => {
    // Notify custom event so Contact form can pre-select the service
    window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
    if (onSelectService) onSelectService(serviceTitle);

    // Scroll smoothly to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 02 . WHAT I OFFER</span>
          </div>
          <h2 className="section-title">Web Development Services</h2>
          <p className="section-subtitle">
            Reliable, practical, and clean web engineering services tailored for businesses, founders, and teams needing dependable implementation.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="coorix-card service-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {serviceIcons[service.id] || <Sparkles size={24} />}
                </div>
                <span className="service-number font-mono">{service.number}</span>
              </div>

              <div className="service-card-body">
                <span className="service-category">{service.category}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.shortDescription}</p>

                {/* Deliverables Checklist */}
                <div className="service-deliverables">
                  <span className="deliverables-heading">Deliverables:</span>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="deliverable-item">
                        <CheckCircle2 size={15} className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="service-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Footer / CTA */}
              <div className="service-card-footer">
                <button
                  type="button"
                  className="btn btn-secondary service-discuss-btn"
                  onClick={() => handleDiscuss(service.title)}
                  aria-label={`Discuss a project for ${service.title}`}
                >
                  <span>Discuss a Project</span>
                  <ArrowRight size={15} className="service-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
