import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  ExternalLink,
  AlertCircle,
  Clock,
  Loader2
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import './Contact.css';

export default function Contact() {
  const { personal, services } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'fallback' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  // Listen to select-service custom event from Services cards
  useEffect(() => {
    const handleSelectService = (e) => {
      if (e.detail) {
        setFormData(prev => ({ ...prev, service: e.detail }));
      }
    };
    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  const validate = (data = formData) => {
    const errs = {};
    if (!data.name || data.name.trim().length < 2) {
      errs.name = 'Please provide your full name or company name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!data.service) {
      errs.service = 'Please choose the service required for your project.';
    }
    if (!data.description || data.description.trim().length < 15) {
      errs.description = 'Please describe your project or requirements (at least 15 characters).';
    }
    return errs;
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...formData, [name]: value }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  // Helper to open pre-filled mailto
  const openMailtoFallback = (data = formData) => {
    const subject = encodeURIComponent(`Project Enquiry: ${data.service || 'Web Development'} - ${data.name}`);
    const body = encodeURIComponent(
      `Hi Priyanshi,\n\nI would like to discuss a project with you.\n\n` +
      `Client / Company: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Service Required: ${data.service || 'Not specified'}\n` +
      `Estimated Budget: ${data.budget || 'Flexible / To be discussed'}\n` +
      `Target Timeline: ${data.timeline || 'Flexible'}\n\n` +
      `Project Overview:\n${data.description}\n`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setTouched({
      name: true,
      email: true,
      service: true,
      description: true
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Formspree / backend endpoint if configured via environment variable
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      if (endpoint) {
        // Submit to configured backend endpoint
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setStatusMessage('Thank you! Your project enquiry has been submitted. I will review your requirements and respond shortly.');
          setFormData({ name: '', email: '', service: '', budget: '', timeline: '', description: '' });
          setTouched({});
        } else {
          throw new Error('Service responded with error');
        }
      } else {
        // Netlify Forms natively handles POST requests in production
        // If in production on Netlify:
        if (window.location.hostname.includes('netlify.app')) {
          const encodedData = new URLSearchParams({
            'form-name': 'project-enquiry',
            ...formData
          }).toString();

          const netlifyRes = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encodedData
          });

          if (netlifyRes.ok) {
            setSubmitStatus('success');
            setStatusMessage('Thank you! Your enquiry has been received via Netlify Forms. I will get back to you shortly.');
            setFormData({ name: '', email: '', service: '', budget: '', timeline: '', description: '' });
            setTouched({});
          } else {
            throw new Error('Netlify form submission failed');
          }
        } else {
          // In local development or standalone environment where no server endpoint is configured:
          // We provide transparent honest feedback and trigger the direct mailto fallback
          setIsSubmitting(false);
          setSubmitStatus('fallback');
          setStatusMessage('Form details verified. Opening your default email client with your pre-filled inquiry...');
          setTimeout(() => {
            openMailtoFallback();
          }, 600);
          return;
        }
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      // In case of network failure or unconfigured delivery:
      setSubmitStatus('error');
      setStatusMessage('Direct transmission encountered a network issue. You can click below to send via your email client instantly:');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="section-label-dot"></span>
            <span>// 06 . GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Start a Project Conversation</h2>
          <p className="section-subtitle">
            Tell me about your web application, website development, or API requirements. Fill out the project enquiry form below or reach out directly.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info-col">
            <div className="coorix-card contact-details-card">
              <h3 className="contact-card-heading">Contact Details</h3>
              <p className="contact-card-sub">
                Feel free to email, call, or reach out via WhatsApp and professional channels.
              </p>

              <div className="contact-info-list">
                {/* Email Item */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Mail size={18} className="contact-item-icon" />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Direct Email</span>
                    <a href={`mailto:${personal.email}`} className="contact-value">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <CheckCircle size={15} className="copied-icon" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <div className="contact-info-item">
                  <div className="contact-icon-box whatsapp">
                    <FaWhatsapp size={18} className="contact-item-icon" />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">WhatsApp Quick Chat</span>
                    <a 
                      href={personal.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-value"
                    >
                      +91 97731 88083
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <Phone size={18} className="contact-item-icon" />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Phone</span>
                    <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-value">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact-info-item">
                  <div className="contact-icon-box">
                    <MapPin size={18} className="contact-item-icon" />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-label">Location &amp; Timezone</span>
                    <span className="contact-value">{personal.location} (IST / UTC+5:30)</span>
                  </div>
                </div>
              </div>

              {/* Toast Feedback */}
              {copiedEmail && (
                <div className="copy-toast font-mono">
                  <span>✓ Email copied to clipboard!</span>
                </div>
              )}

              {/* Social Profiles */}
              <div className="contact-socials-wrapper">
                <span className="socials-label">Professional Profiles</span>
                <div className="contact-socials-btns">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FaGithub size={16} />
                    <span>GitHub</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Freelance Project Enquiry Form */}
          <div className="contact-form-col">
            <div className="coorix-card contact-form-card">
              <div className="form-card-header">
                <div>
                  <h3 className="contact-card-heading">Freelance Project Enquiry</h3>
                  <p className="contact-card-sub">
                    Fill in your project specifications to receive a direct response.
                  </p>
                </div>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="contact-form" 
                name="project-enquiry" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
              >
                {/* Netlify Form Bot-field and Form-name */}
                <input type="hidden" name="form-name" value="project-enquiry" />
                <p className="hidden-honeypot" style={{ display: 'none' }}>
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>

                {/* Row 1: Name and Email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Client / Company Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Alex Johnson or Acme Inc."
                      className={`form-input ${touched.name && errors.name ? 'input-error' : ''}`}
                      required
                    />
                    {touched.name && errors.name && (
                      <span className="field-error-msg">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Work Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. alex@company.com"
                      className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
                      required
                    />
                    {touched.email && errors.email && (
                      <span className="field-error-msg">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Service Required & Estimated Budget */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={() => handleBlur('service')}
                      className={`form-input form-select ${touched.service && errors.service ? 'input-error' : ''}`}
                      required
                    >
                      <option value="">-- Choose a service --</option>
                      {services.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other Consultation">Other Custom Web Requirement</option>
                    </select>
                    {touched.service && errors.service && (
                      <span className="field-error-msg">{errors.service}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-budget" className="form-label">
                      Estimated Budget <span className="opt-tag">(Optional)</span>
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input form-select"
                    >
                      <option value="">-- Select budget range --</option>
                      <option value="Under $500">Under $500 (Small fix / single page)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Landing page / API)</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000 (Full-Stack web app)</option>
                      <option value="$3,000+">$3,000+ (Comprehensive project)</option>
                      <option value="Discuss / Hourly">Flexible / Hourly Rate</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Target Timeline */}
                <div className="form-group">
                  <label htmlFor="contact-timeline" className="form-label">
                    Target Timeline / Deadline <span className="opt-tag">(Optional)</span>
                  </label>
                  <select
                    id="contact-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="">-- Select preferred timeline --</option>
                    <option value="Urgent (1-2 weeks)">Urgent (1 - 2 weeks)</option>
                    <option value="Standard (2-4 weeks)">Standard (2 - 4 weeks)</option>
                    <option value="Flexible (1-2 months)">Flexible (1 - 2 months)</option>
                    <option value="Ongoing Maintenance">Ongoing / Retainer</option>
                  </select>
                </div>

                {/* Row 4: Project Description */}
                <div className="form-group">
                  <label htmlFor="contact-description" className="form-label">
                    Project Overview &amp; Requirements <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={() => handleBlur('description')}
                    placeholder="Briefly describe what you want to build or solve: e.g. target features, existing codebase links, designs, or desired tech stack..."
                    className={`form-input form-textarea ${touched.description && errors.description ? 'input-error' : ''}`}
                    required
                  ></textarea>
                  {touched.description && errors.description && (
                    <span className="field-error-msg">{errors.description}</span>
                  )}
                </div>

                {/* Feedback states */}
                {submitStatus === 'success' && (
                  <div className="form-banner banner-success" role="alert">
                    <CheckCircle size={18} className="banner-icon" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === 'fallback' && (
                  <div className="form-banner banner-info" role="alert">
                    <Clock size={18} className="banner-icon" />
                    <div className="banner-text">
                      <p>{statusMessage}</p>
                      <button
                        type="button"
                        onClick={() => openMailtoFallback()}
                        className="btn btn-primary btn-sm mt-2"
                      >
                        <Mail size={14} /> Send Email Directly
                      </button>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-banner banner-error" role="alert">
                    <AlertCircle size={18} className="banner-icon" />
                    <div className="banner-text">
                      <p>{statusMessage}</p>
                      <button
                        type="button"
                        onClick={() => openMailtoFallback()}
                        className="btn btn-secondary btn-sm mt-2"
                      >
                        <Mail size={14} /> Open in Email App
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Row */}
                <div className="form-submit-row">
                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="spinner" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline direct-email-trigger"
                    onClick={() => openMailtoFallback()}
                    title="Send via your default mail software"
                  >
                    <Mail size={15} />
                    <span>Email Directly</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
