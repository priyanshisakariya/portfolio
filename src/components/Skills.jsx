import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles,
  Server
} from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const { skillsByCategory } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    "Programming Languages": <Code size={18} />,
    "Frontend Development": <Globe size={18} />,
    "Backend Development": <Server size={18} />,
    "Databases": <Database size={18} />,
    "Tools & Development Workflow": <Wrench size={18} />,
    "Core Computer Science Concepts": <Cpu size={18} />
  };

  const filteredCategories = selectedCategory === 'All' 
    ? skillsByCategory 
    : skillsByCategory.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 04 . TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Verified Technical Skills</h2>
          <p className="section-subtitle">
            Grounded in academic coursework, full-stack implementations, and production-style projects. Clean competencies—no artificial percentage bars.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-bar">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All Competencies
          </button>
          {skillsByCategory.map((cat) => (
            <button
              key={cat.category}
              type="button"
              className={`filter-btn ${selectedCategory === cat.category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.category)}
            >
              {categoryIcons[cat.category] || <Sparkles size={16} />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.category} className="coorix-card category-card">
              <div className="category-header">
                <div className="cat-icon-wrapper">
                  {categoryIcons[cat.category] || <Sparkles size={18} />}
                </div>
                <div>
                  <h3 className="category-title">{cat.category}</h3>
                  <span className="category-count">{cat.skills.length} competencies</span>
                </div>
              </div>

              <div className="skills-chips-wrapper">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`skill-chip ${skill.highlight ? 'highlighted' : ''}`}
                  >
                    <div className="chip-indicator"></div>
                    <div className="chip-details">
                      <span className="chip-name">{skill.name}</span>
                      <span className="chip-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
