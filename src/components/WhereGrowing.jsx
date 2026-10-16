import React from 'react';
import { 
  Terminal, 
  Layers, 
  Workflow, 
  Database, 
  ShieldCheck, 
  Cloud 
} from 'lucide-react';
import './WhereGrowing.css';

export default function WhereGrowing() {
  const steps = [
    {
      num: "01",
      title: "Core Java & OOP",
      desc: "Strong object-oriented paradigms, interfaces, collections framework, and algorithmic problem-solving in Java & Python.",
      icon: <Terminal size={22} className="growth-icon" />
    },
    {
      num: "02",
      title: "Spring Boot & MVC",
      desc: "Clean layered architecture (Controller, Service, Repository) with dependency injection and bean lifecycle management.",
      icon: <Layers size={22} className="growth-icon" />
    },
    {
      num: "03",
      title: "REST API Engineering",
      desc: "Building stateless HTTP APIs with clear URI conventions, input validation, custom error responses, and Postman testing.",
      icon: <Workflow size={22} className="growth-icon" />
    },
    {
      num: "04",
      title: "Database Systems & ORM",
      desc: "Relational schema design, normalization, Spring Data JPA, Hibernate entity mappings, pagination, and sorting in MySQL.",
      icon: <Database size={22} className="growth-icon" />
    },
    {
      num: "05",
      title: "Security & Access Control",
      desc: "Stateless JWT authentication, password hashing, and granular Role-Based Access Control (RBAC) across multi-tier user systems.",
      icon: <ShieldCheck size={22} className="growth-icon" />
    },
    {
      num: "06",
      title: "Cloud & Deployment",
      desc: "Hands-on containerization with Docker and active exploration of AWS (EC2, S3, CloudFront), Terraform, and CI/CD pipelines.",
      icon: <Cloud size={22} className="growth-icon" />
    }
  ];

  return (
    <section className="section growing-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 02 . TECHNICAL ROADMAP</span>
          </div>
          <h2 className="section-title">Where I'm Growing</h2>
          <p className="section-subtitle">
            My intentional engineering progression centered around robust backend design, enterprise Java, and cloud-ready architectures.
          </p>
        </div>

        {/* Growth Pipeline Roadmap */}
        <div className="growing-pipeline">
          {steps.map((item, index) => (
            <div key={item.num} className="growth-step-card">
              <div className="growth-step-header">
                <div className="growth-icon-box">
                  {item.icon}
                </div>
                <span className="growth-num font-mono">{item.num}</span>
              </div>
              <h3 className="growth-step-title">{item.title}</h3>
              <p className="growth-step-desc">{item.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="growth-connector-line"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
