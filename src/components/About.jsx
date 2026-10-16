import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';
import './About.css';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 01 . Academic Background &amp; Engineering Focus</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            MCA student at Sardar Vallabhbhai Global University building dependable websites, responsive frontends, and practical web applications.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="about-grid">
          {/* Left Narrative Column */}
          <div className="about-narrative-col">
            <div className="coorix-card about-narrative-card">
              <h3 className="about-card-title">Practical Problem Solving &amp; Client Collaboration</h3>
              
              <p className="about-text-lead">
                {personal.aboutBio1}
              </p>
              
              <p className="about-text-body">
                {personal.aboutBio2}
              </p>

              {/* Core Strengths Checklist */}
              <div className="about-strengths-box">
                <span className="strengths-title">Core Development Competencies:</span>
                <div className="strengths-grid">
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>Responsive Website &amp; Landing Page Development</span>
                  </div>
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>React.js Component Architecture &amp; State (Hooks)</span>
                  </div>
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>Python Backend APIs with FastAPI &amp; Pydantic</span>
                  </div>
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>Full-Stack MERN Integration (Node, Express, MongoDB)</span>
                  </div>
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>Database Modeling &amp; Normalization (MySQL, MongoDB)</span>
                  </div>
                  <div className="strength-item">
                    <CheckCircle size={16} className="strength-icon" />
                    <span>Secure JWT Authentication &amp; Role-Based Guards (RBAC)</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="about-meta-row">
                <div className="meta-pill">
                  <span className="meta-pill-label">Location:</span>
                  <span className="meta-pill-value">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="meta-pill">
                  <span className="meta-pill-label">Availability:</span>
                  <span className="meta-pill-value text-teal">Freelance &amp; Contract Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Metrics Column */}
          <div className="about-highlights-col">
            {/* MCA Highlight Card */}
            <div className="coorix-card academic-card mca-card">
              <div className="card-top-indicator">
                <span className="academic-badge active">CURRENT PURSUIT</span>
                <span className="academic-year font-mono">2025 – 2027</span>
              </div>
              <h4 className="academic-degree">Master of Computer Application (MCA)</h4>
              <p className="academic-school">Sardar Vallabhbhai Global University, Ahmedabad</p>
              
              <div className="academic-cgpa-row">
                <div className="cgpa-block highlight">
                  <span className="cgpa-number">8.8</span>
                  <span className="cgpa-label">Semester 2 CGPA</span>
                </div>
                <div className="cgpa-block">
                  <span className="cgpa-number">8.5</span>
                  <span className="cgpa-label">Semester 1 CGPA</span>
                </div>
              </div>
            </div>

            {/* BCA Highlight Card */}
            <div className="coorix-card academic-card">
              <div className="card-top-indicator">
                <span className="academic-badge completed">GRADUATED</span>
                <span className="academic-year font-mono">2022 – 2025</span>
              </div>
              <h4 className="academic-degree">Bachelor of Computer Application (BCA)</h4>
              <p className="academic-school">SMT K.S.N Kansagra Mahila College, Rajkot</p>
              
              <div className="academic-cgpa-row">
                <div className="cgpa-block">
                  <span className="cgpa-number">7.6</span>
                  <span className="cgpa-label">Cumulative CGPA</span>
                </div>
              </div>
            </div>

            {/* Stats Counter Strip */}
            <div className="about-quick-metrics">
              <div className="metric-box">
                <span className="metric-val">5+</span>
                <span className="metric-lbl">Full-Stack Projects</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">15+</span>
                <span className="metric-lbl">REST API Endpoints</span>
              </div>
              <div className="metric-box">
                <span className="metric-val">10</span>
                <span className="metric-lbl">Verified Credentials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
