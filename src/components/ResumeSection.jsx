import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FileDown, 
  ExternalLink, 
  CheckCircle2, 
  Code, 
  Layers
} from 'lucide-react';
import './ResumeSection.css';

export default function ResumeSection() {
  const { personal } = portfolioData;
  const [activePreview, setActivePreview] = useState('fullstack'); // 'python' or 'fullstack'

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 05 . CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">Download Specialized Resumes</h2>
          <p className="section-subtitle">
            Two distinct resumes tailored for Python API backend positions and Full-Stack web development projects. Both files are verified and ready for download.
          </p>
        </div>

        {/* Dual Resume Download Cards */}
        <div className="dual-resume-cards-grid">
          {/* Card 1: Python Developer Resume */}
          <div className={`coorix-card resume-feature-card ${activePreview === 'python' ? 'active-card' : ''}`}>
            <div className="resume-card-head">
              <div className="resume-icon-badge python">
                <Code size={24} />
              </div>
              <div className="resume-badge-group">
                <span className="specialty-badge">FastAPI &amp; Python 3</span>
              </div>
            </div>

            <h3 className="resume-card-title">Python Developer Resume</h3>
            <p className="resume-card-subtitle">{personal.resumes.python.specialty}</p>

            <ul className="resume-points-list">
              {personal.resumes.python.highlights.map((point, index) => (
                <li key={index} className="resume-point-item">
                  <CheckCircle2 size={15} className="resume-check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="resume-card-actions">
              <a
                href={personal.resumes.python.url}
                download={personal.resumes.python.filename}
                className="btn btn-primary resume-action-btn"
                aria-label="Download Python Developer Resume PDF"
              >
                <FileDown size={16} />
                <span>Download Python Resume</span>
              </a>

              <a
                href={personal.resumes.python.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary resume-action-btn"
                aria-label="Preview Python Developer Resume PDF"
              >
                <ExternalLink size={15} />
                <span>Open PDF</span>
              </a>

              <button
                type="button"
                className={`preview-toggle-btn ${activePreview === 'python' ? 'active' : ''}`}
                onClick={() => setActivePreview('python')}
              >
                <span>View On-Page Summary</span>
              </button>
            </div>
          </div>

          {/* Card 2: Full Stack Developer Resume */}
          <div className={`coorix-card resume-feature-card ${activePreview === 'fullstack' ? 'active-card' : ''}`}>
            <div className="resume-card-head">
              <div className="resume-icon-badge fullstack">
                <Layers size={24} />
              </div>
              <div className="resume-badge-group">
                <span className="specialty-badge">React &amp; MERN Stack</span>
              </div>
            </div>

            <h3 className="resume-card-title">Full Stack Developer Resume</h3>
            <p className="resume-card-subtitle">{personal.resumes.fullstack.specialty}</p>

            <ul className="resume-points-list">
              {personal.resumes.fullstack.highlights.map((point, index) => (
                <li key={index} className="resume-point-item">
                  <CheckCircle2 size={15} className="resume-check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="resume-card-actions">
              <a
                href={personal.resumes.fullstack.url}
                download={personal.resumes.fullstack.filename}
                className="btn btn-primary resume-action-btn"
                aria-label="Download Full Stack Developer Resume PDF"
              >
                <FileDown size={16} />
                <span>Download Full Stack Resume</span>
              </a>

              <a
                href={personal.resumes.fullstack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary resume-action-btn"
                aria-label="Preview Full Stack Developer Resume PDF"
              >
                <ExternalLink size={15} />
                <span>Open PDF</span>
              </a>

              <button
                type="button"
                className={`preview-toggle-btn ${activePreview === 'fullstack' ? 'active' : ''}`}
                onClick={() => setActivePreview('fullstack')}
              >
                <span>View On-Page Summary</span>
              </button>
            </div>
          </div>
        </div>

        {/* On-Page Resume Quick Preview Console */}
        <div className="resume-preview-console coorix-card">
          <div className="preview-console-header">
            <div className="doc-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            
            <div className="preview-tabs">
              <button
                type="button"
                className={`preview-tab-btn ${activePreview === 'python' ? 'active' : ''}`}
                onClick={() => setActivePreview('python')}
              >
                <Code size={14} />
                <span>Python Developer Preview</span>
              </button>
              <button
                type="button"
                className={`preview-tab-btn ${activePreview === 'fullstack' ? 'active' : ''}`}
                onClick={() => setActivePreview('fullstack')}
              >
                <Layers size={14} />
                <span>Full Stack Developer Preview</span>
              </button>
            </div>

            <div className="preview-filename font-mono">
              {activePreview === 'python' ? personal.resumes.python.filename : personal.resumes.fullstack.filename}
            </div>
          </div>

          <div className="preview-console-body">
            {activePreview === 'python' ? (
              <div className="resume-sheet">
                <div className="sheet-header">
                  <h3 className="sheet-name">PRIYANSHI SAKARIYA</h3>
                  <p className="sheet-role">Python Developer • REST API Engineer</p>
                  <p className="sheet-meta font-mono">
                    Ahmedabad, Gujarat | +91 9773188083 | priyanshisakariya89@gmail.com | LinkedIn | GitHub
                  </p>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">PROFESSIONAL SUMMARY</h4>
                  <p className="sheet-text">
                    Detail-oriented Python Developer with hands-on experience in building web applications, REST APIs, and automation scripts using Python and SQL. Proficient in object-oriented programming, data structures, and version control (Git). Strong problem-solving skills with a solid foundation in SDLC, unit testing, and debugging. Eager to contribute to scalable, efficient software solutions.
                  </p>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">EDUCATION</h4>
                  <div className="sheet-edu-row">
                    <div>
                      <strong>Master Of Computer Application (MCA)</strong> — Sardar Vallabhbhai Global University
                      <span className="sheet-sub">SEM 1-CGPA: 8.5 | SEM 2-CGPA: 8.8</span>
                    </div>
                    <span className="font-mono text-muted">2025–2027, Ahmedabad</span>
                  </div>
                  <div className="sheet-edu-row">
                    <div>
                      <strong>Bachelor of Computer Application (BCA)</strong> — SMT K.S.N Kansagra Mahila College
                      <span className="sheet-sub">CGPA: 7.6</span>
                    </div>
                    <span className="font-mono text-muted">2022–2025, Rajkot</span>
                  </div>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">FEATURED PROJECTS</h4>
                  <div className="sheet-project-block">
                    <p className="sheet-proj-title">
                      <strong>Flight Crew Management System</strong> | Python, React.js, FastAPI, SQLAlchemy, Pydantic, PyJWT, Bcrypt, SQLite
                    </p>
                    <ul className="sheet-bullets">
                      <li>Designed relational database schemas (SQLAlchemy 2.0) across 5 core entities with cascade integrity rules.</li>
                      <li>Created a dedicated scheduling engine (<code>conflict_service.py</code>) executing time-interval checks <code>[start - buffer, end + buffer]</code> to prevent concurrent duty assignments.</li>
                      <li>Secured API surface using OAuth2/JWT bearer tokens, password hashing via Bcrypt, and strict role authorization middleware.</li>
                    </ul>
                  </div>

                  <div className="sheet-project-block">
                    <p className="sheet-proj-title">
                      <strong>Campus Project</strong> | React.js, Spring Boot, JWT, RBAC, REST API, PostgreSQL / MySQL
                    </p>
                    <ul className="sheet-bullets">
                      <li>Developed a full-stack Student Project Management System serving 3 user roles with dedicated dashboards.</li>
                      <li>Implemented secure file uploads for PDF proposals, PDF reports, and ZIP source code with faculty approval workflows.</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="resume-sheet">
                <div className="sheet-header">
                  <h3 className="sheet-name">PRIYANSHI SAKARIYA</h3>
                  <p className="sheet-role">Full Stack Developer • MERN &amp; Web Architect</p>
                  <p className="sheet-meta font-mono">
                    Ahmedabad, Gujarat | +91 9773188083 | priyanshisakariya89@gmail.com | LinkedIn | GitHub
                  </p>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">PROFESSIONAL SUMMARY</h4>
                  <p className="sheet-text">
                    Motivated MCA student with practical knowledge of MERN Stack technologies — MongoDB, Express.js, React.js, and Node.js. Experienced in developing web applications, creating REST APIs, managing databases, and designing user-friendly interfaces. Also possess knowledge of Python and a strong willingness to learn new technologies and contribute to client and team goals.
                  </p>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">EDUCATION</h4>
                  <div className="sheet-edu-row">
                    <div>
                      <strong>Master Of Computer Application (MCA)</strong> — Sardar Vallabhbhai Global University
                      <span className="sheet-sub">SEM 1-CGPA: 8.5 | SEM 2-CGPA: 8.8</span>
                    </div>
                    <span className="font-mono text-muted">2025–2027, Ahmedabad</span>
                  </div>
                  <div className="sheet-edu-row">
                    <div>
                      <strong>Bachelor of Computer Application (BCA)</strong> — SMT K.S.N Kansagra Mahila College
                      <span className="sheet-sub">CGPA: 7.6</span>
                    </div>
                    <span className="font-mono text-muted">2022–2025, Rajkot</span>
                  </div>
                </div>

                <div className="sheet-section">
                  <h4 className="sheet-h">FEATURED PROJECTS</h4>
                  <div className="sheet-project-block">
                    <p className="sheet-proj-title">
                      <strong>Smart Timetable Optimizer</strong> | MERN Stack, React.js, Node.js, Express.js, MongoDB, REST API
                    </p>
                    <ul className="sheet-bullets">
                      <li>Automated college timetable generation based on department, semester, division, faculty, rooms, and slots.</li>
                      <li>Implemented separate dashboards for Admin, Faculty, and Students with role-based access and functionality.</li>
                      <li>Designed a responsive, user-friendly portal-style interface using React.js.</li>
                    </ul>
                  </div>

                  <div className="sheet-project-block">
                    <p className="sheet-proj-title">
                      <strong>Campus Project</strong> | React.js, Spring Boot, JWT, RBAC, REST API, PostgreSQL / MySQL
                    </p>
                    <ul className="sheet-bullets">
                      <li>Streamlined academic project lifecycle using JWT authentication, role guards, and 3 dedicated dashboards.</li>
                      <li>Designed and integrated 10+ RESTful API endpoints for proposals, mentor allocation, and milestone reporting.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
