import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  UserCheck
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import './CaseStudyModal.css';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-category-row">
              <span className="font-mono modal-num">{project.numericId}</span>
              <span className="modal-cat">{project.category}</span>
              <span className="modal-status-pill">{project.status}</span>
            </div>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Visual Preview */}
          <div className="modal-preview-wrapper">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} application screenshot preview`}
                className="modal-preview-img"
              />
            ) : (
              <div className="modal-backend-preview">
                <div className="backend-banner-head">
                  <div className="backend-terminal-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="font-mono text-muted text-xs">EmployeeController.java • Spring Boot MVC</span>
                </div>
                <div className="backend-code-snippet font-mono">
                  <p><span className="code-kw">@RestController</span></p>
                  <p><span className="code-kw">@RequestMapping</span>(<span className="code-str">"/api/v1/employees"</span>)</p>
                  <p><span className="code-kw">public class</span> <span className="code-type">EmployeeController</span> &#123;</p>
                  <p className="indent"><span className="code-kw">@GetMapping</span>(<span className="code-str">"/search"</span>)</p>
                  <p className="indent"><span className="code-kw">public</span> ResponseEntity&lt;Page&lt;EmployeeDTO&gt;&gt; search(</p>
                  <p className="indent-2">@RequestParam String query, Pageable pageable) &#123;</p>
                  <p className="indent-3"><span className="code-kw">return</span> ResponseEntity.ok(employeeService.searchEmployees(query, pageable));</p>
                  <p className="indent">&#125;</p>
                  <p>&#125;</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Links Bar */}
          <div className="modal-actions-bar">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <FaGithub size={16} />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="modal-demo-badge">
                <span>Status: {project.status}</span>
              </span>
            )}
          </div>

          {/* Roles & Tech Badges */}
          <div className="modal-section">
            <h4 className="modal-section-heading">My Role &amp; Technologies Utilized</h4>
            <div className="modal-roles-row">
              {project.roles && project.roles.map((r, i) => (
                <span key={i} className="modal-role-pill">
                  <UserCheck size={13} />
                  <span>{r}</span>
                </span>
              ))}
            </div>
            <div className="modal-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="modal-two-col">
            <div className="modal-box">
              <h4 className="modal-box-title problem-title">The Challenge</h4>
              <p className="modal-box-text">{project.problem}</p>
            </div>
            <div className="modal-box">
              <h4 className="modal-box-title solution-title">The Solution</h4>
              <p className="modal-box-text">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h4 className="modal-section-heading">Implemented Features &amp; Capabilities</h4>
            <ul className="modal-feature-list">
              {project.keyFeatures.map((feat, index) => (
                <li key={index} className="modal-feature-item">
                  <CheckCircle2 size={16} className="modal-feat-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div className="modal-section">
              <h4 className="modal-section-heading">Layered System Architecture</h4>
              <div className="modal-arch-grid">
                {project.architecture.map((arch, index) => (
                  <div key={index} className="modal-arch-card">
                    <Layers size={16} className="modal-arch-icon" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Contribution */}
          <div className="modal-section">
            <h4 className="modal-section-heading">My Contribution &amp; Implementation Details</h4>
            <div className="modal-contribution-box">
              <p>{project.myContribution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
