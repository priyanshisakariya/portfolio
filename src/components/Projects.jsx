import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Eye,
  ExternalLink
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import CaseStudyModal from './CaseStudyModal';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const openModal = (project) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    setActiveModalProject(null);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Full-Stack'
    ? projects.filter(p => p.category.includes('Full-Stack') || p.category.includes('MERN'))
    : activeFilter === 'Python'
    ? projects.filter(p => p.technologies.some(t => t.toLowerCase().includes('python') || t.toLowerCase().includes('fastapi')))
    : activeFilter === 'Backend'
    ? projects.filter(p => p.category.includes('Backend') || p.isBackendProject || p.technologies.includes('FastAPI'))
    : projects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 03 . FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="section-title">Selected Web Projects</h2>
          <p className="section-subtitle">
            Authentic, production-style web applications and backend systems with real source repositories, validated functionality, and transparent architectural documentation.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="projects-filter-bar">
          <button
            type="button"
            className={`proj-filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            className={`proj-filter-btn ${activeFilter === 'Full-Stack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Full-Stack')}
          >
            Full-Stack Web Apps
          </button>
          <button
            type="button"
            className={`proj-filter-btn ${activeFilter === 'Python' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Python')}
          >
            Python &amp; FastAPI
          </button>
          <button
            type="button"
            className={`proj-filter-btn ${activeFilter === 'Backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Backend')}
          >
            Backend &amp; APIs
          </button>
        </div>

        {/* Project Cards List */}
        <div className="projects-stack">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card-wrapper">
              <div className="coorix-card project-card">
                {/* Visual Media Column */}
                <div 
                  className="project-visual-col" 
                  onClick={() => openModal(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') openModal(project); }}
                  aria-label={`Open case study for ${project.title}`}
                >
                  <div className="project-image-box">
                    {project.image ? (
                      <div className="image-zoom-container">
                        <img
                          src={project.image}
                          alt={`${project.title} interface preview`}
                          className="project-main-image"
                          loading="lazy"
                        />
                        <div className="image-hover-overlay">
                          <span className="view-case-study-badge">
                            <Eye size={16} />
                            <span>View Full Case Study</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Backend Architecture Visual Card */
                      <div className="backend-card-visual">
                        <div className="backend-visual-head">
                          <div className="terminal-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <span className="font-mono visual-tag">Spring Boot 3 • MVC Layered Architecture</span>
                        </div>

                        <div className="backend-arch-flow">
                          <div className="flow-step">
                            <span className="flow-badge client">REST Client</span>
                            <span className="flow-detail">Postman / React SPA</span>
                          </div>
                          <span className="flow-arrow">➔</span>
                          <div className="flow-step">
                            <span className="flow-badge controller">Controller</span>
                            <span className="flow-detail">5+ CRUD Endpoints</span>
                          </div>
                          <span className="flow-arrow">➔</span>
                          <div className="flow-step">
                            <span className="flow-badge service">Service &amp; JPA</span>
                            <span className="flow-detail">Hibernate &amp; Pageable</span>
                          </div>
                          <span className="flow-arrow">➔</span>
                          <div className="flow-step">
                            <span className="flow-badge db">MySQL DB</span>
                            <span className="flow-detail">Normalized Schema</span>
                          </div>
                        </div>

                        <div className="backend-visual-snippet font-mono">
                          <p><span className="code-kw">@GetMapping</span>(<span className="code-str">"/api/v1/employees"</span>)</p>
                          <p><span className="code-kw">public</span> ResponseEntity&lt;Page&lt;Employee&gt;&gt; getAll(Pageable p) &#123;</p>
                          <p>&nbsp;&nbsp;<span className="code-kw">return</span> ResponseEntity.ok(service.findAll(p));</p>
                          <p>&#125;</p>
                        </div>

                        <div className="image-hover-overlay">
                          <span className="view-case-study-badge">
                            <Eye size={16} />
                            <span>View Full Case Study</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className="project-content-col">
                  {/* Category & Numeric ID */}
                  <div className="project-meta-top">
                    <span className="project-numeric font-mono">{project.numericId}</span>
                    <span className="project-category-tag">{project.category}</span>
                  </div>

                  <h3 className="project-name">
                    <button
                      type="button"
                      className="project-name-btn"
                      onClick={() => openModal(project)}
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="project-tagline-text">{project.tagline}</p>
                  
                  {/* Problem & Solution Snippet */}
                  <div className="project-problem-solution-box">
                    <div className="problem-snippet">
                      <span className="ps-label">The Challenge:</span>
                      <p>{project.problem}</p>
                    </div>
                    <div className="solution-snippet">
                      <span className="ps-label">The Solution:</span>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* Highlights Checkpoints */}
                  <div className="project-features-list">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="project-feature-bullet">
                        <CheckCircle2 size={15} className="feat-check-icon" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="project-tech-badges">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-cta-row">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => openModal(project)}
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {/* GitHub Button if repo available */}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <FaGithub size={15} />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-teal-outline btn-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="status-env-pill">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
