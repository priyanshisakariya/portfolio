import React from 'react';
import { 
  Code2, 
  ShieldCheck, 
  CheckCircle, 
  Smartphone 
} from 'lucide-react';
import './EngineeringApproach.css';

export default function EngineeringApproach() {
  const principles = [
    {
      icon: <Code2 size={24} />,
      title: "Clean, Maintainable Code",
      description: "Code structured into modular components and layered architectures, making handoffs, maintenance, and future iterations straightforward for your team."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Security & Validation First",
      description: "Strict payload validation (Pydantic / Mongoose), encrypted credentials with Bcrypt, and protected routes using stateless JWT authentication and role-based guards."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Transparent Milestones",
      description: "Clear, demonstrable progress updates at every milestone. Realistic planning without overpromising, ensuring deliverables align with your business requirements."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Device Responsiveness",
      description: "Every page, form, and interface is carefully engineered and tested across mobile phones, tablets, and desktop displays for consistent user experience."
    }
  ];

  return (
    <section className="section engineering-approach-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// WORKING STANDARDS</span>
          </div>
          <h2 className="section-title">Why Clients &amp; Teams Choose to Work With Me</h2>
          <p className="section-subtitle">
            Genuine engineering practices, dependable development workflows, and disciplined attention to detail on every engagement.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="approach-grid">
          {principles.map((p, idx) => (
            <div key={idx} className="coorix-card approach-card">
              <div className="approach-icon-box">
                {p.icon}
              </div>
              <h3 className="approach-title">{p.title}</h3>
              <p className="approach-description">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
