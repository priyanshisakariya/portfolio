import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Calendar } from 'lucide-react';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 05 . ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal computer science foundations, coursework, and cumulative performance track record.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="education-timeline">
          <div className="timeline-connector-bar"></div>

          {education.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Timeline Marker Dot */}
              <div className={`timeline-marker ${item.current ? 'current' : ''}`}>
                <div className="marker-inner"></div>
              </div>

              {/* Education Card */}
              <div className="coorix-card education-card">
                <div className="edu-card-header">
                  <div>
                    <div className="edu-tag-row">
                      <span className="edu-period font-mono">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="edu-status-badge">CURRENT PROGRAM</span>
                      )}
                    </div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-institution">{item.institution}</p>
                    <p className="edu-location">
                      <MapPin size={13} />
                      {item.location}
                    </p>
                  </div>

                  {/* CGPA Display */}
                  <div className="edu-scores-group">
                    {item.scores.map((score, sIdx) => (
                      <div key={sIdx} className="score-pill">
                        <span className="score-val font-mono">{score.value}</span>
                        <span className="score-lbl">{score.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="edu-divider"></div>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
