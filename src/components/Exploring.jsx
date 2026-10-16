import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cloud, Server, Container, Workflow, Terminal, GitBranch } from 'lucide-react';
import './Exploring.css';

export default function Exploring() {
  const { exploringTechnologies } = portfolioData;

  const techIcons = {
    "AWS": <Cloud size={24} className="explore-icon" />,
    "Docker": <Container size={24} className="explore-icon" />,
    "Terraform": <Server size={24} className="explore-icon" />,
    "Jenkins": <Workflow size={24} className="explore-icon" />,
    "CI/CD": <GitBranch size={24} className="explore-icon" />,
    "Linux": <Terminal size={24} className="explore-icon" />
  };

  return (
    <section className="exploring-section">
      <div className="container">
        <div className="exploring-header">
          <div className="exploring-pill">
            <span className="status-dot"></span>
            <span>ACTIVE FOCUS</span>
          </div>
          <h3 className="exploring-title">Currently Exploring</h3>
          <p className="exploring-subtitle">
            Deepening hands-on competency in cloud infrastructure, container orchestration, and automated pipelines as noted in my academic profile.
          </p>
        </div>

        <div className="exploring-grid">
          {exploringTechnologies.map((item) => (
            <div key={item.name} className="explore-card">
              <div className="explore-card-top">
                <div className="explore-icon-box">
                  {techIcons[item.name]}
                </div>
                <span className="explore-badge font-mono">In Progress</span>
              </div>
              <h4 className="explore-name">{item.name}</h4>
              <p className="explore-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
