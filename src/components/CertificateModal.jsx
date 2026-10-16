import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import './CertificateModal.css';

export default function CertificateModal({ certificate, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [imageError, setImageError] = useState(false);

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

  if (!certificate) return null;

  const certificateSrc = (imageError && certificate.remoteUrl) 
    ? certificate.remoteUrl 
    : (certificate.certificateUrl || certificate.remoteUrl);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 20, 180));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 20, 60));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const isPdf = certificateSrc && certificateSrc.toLowerCase().includes('.pdf');

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cert-modal-title">
      <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header Toolbar */}
        <div className="cert-modal-header">
          <div className="cert-header-meta">
            <div className="cert-meta-icon">
              <Award size={20} />
            </div>
            <div>
              <div className="cert-header-top">
                <span className="cert-modal-tag">{certificate.category}</span>
                <span className="cert-modal-status">
                  <CheckCircle2 size={12} /> Verified Credential
                </span>
              </div>
              <h3 id="cert-modal-title" className="cert-header-title">{certificate.title}</h3>
              <p className="cert-header-org">{certificate.organization}</p>
            </div>
          </div>

          <div className="cert-header-actions">
            {/* Zoom Controls */}
            <div className="cert-zoom-group">
              <button 
                type="button" 
                onClick={handleZoomOut} 
                className="cert-tool-btn" 
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <button 
                type="button" 
                onClick={handleResetZoom}
                className="zoom-indicator font-mono"
                title="Reset Zoom to 100%"
              >
                {zoomLevel}%
              </button>
              <button 
                type="button" 
                onClick={handleZoomIn} 
                className="cert-tool-btn" 
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
            </div>

            {/* Open in New Tab */}
            {certificateSrc && (
              <a
                href={certificateSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm cert-action-btn"
                title="Open full certificate in a new browser tab"
              >
                <ExternalLink size={14} />
                <span>Open in Tab</span>
              </a>
            )}

            {/* Download Button */}
            {certificateSrc && (
              <a
                href={certificateSrc}
                download={`${certificate.title.replace(/\s+/g, '_')}${isPdf ? '.pdf' : '.jpeg'}`}
                className="btn btn-primary btn-sm cert-action-btn"
                title="Download certificate"
              >
                <Download size={14} />
                <span>Download</span>
              </a>
            )}

            {/* Close Button */}
            <button
              type="button"
              className="cert-close-btn"
              onClick={onClose}
              aria-label="Close certificate viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="cert-viewport">
          <div 
            className="cert-document-stage"
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'top center' 
            }}
          >
            {isPdf ? (
              <iframe
                src={`${certificateSrc}#toolbar=0`}
                title={`${certificate.title} Certificate`}
                className="cert-pdf-frame"
              />
            ) : (
              <img
                src={certificateSrc}
                alt={`${certificate.title} Certificate issued by ${certificate.organization}`}
                className="cert-preview-image"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
