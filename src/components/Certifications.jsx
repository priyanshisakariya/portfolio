import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Eye,
  Award
} from 'lucide-react';
import CertificateModal from './CertificateModal';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 06 . CREDENTIALS</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified academic and industry credentials from Linux Foundation, ScholarHat, freeCodeCamp, Cursa, Coursera, and Google Cloud. Click any card to preview.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="coorix-card cert-card clickable"
              onClick={() => handleOpenCertificate(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleOpenCertificate(cert); }}
              aria-label={`View certificate for ${cert.title}`}
            >
              {/* Top Row */}
              <div className="cert-top-row">
                <div className="cert-icon-wrapper">
                  <Award size={20} className="cert-doc-icon" />
                </div>
                <span className="cert-category-badge">{cert.category}</span>
              </div>

              {/* Content */}
              <div className="cert-content-middle">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.organization}</p>
                <p className="cert-description">{cert.description}</p>
              </div>

              {/* Card Action / Status */}
              <div className="cert-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm cert-view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCertificate(cert);
                  }}
                >
                  <Eye size={15} />
                  <span>View Certificate</span>
                  <ArrowRight size={14} className="cert-arrow-icon" />
                </button>

                <div className="cert-verified-indicator">
                  <CheckCircle2 size={13} className="verified-check" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={handleCloseCertificate}
        />
      )}
    </section>
  );
}
