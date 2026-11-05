import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  MapPin,
} from "lucide-react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("samadhihansika457@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Open mailto with prepopulated body
    const mailtoUrl = `mailto:samadhihansika457@gmail.com?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;

    window.open(mailtoUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-layout">
        <div className="contact-info">
          <div className="section-heading left-heading">
            <span className="section-tag">05 / GET IN TOUCH</span>
            <h2>
              Let's build something <em className="gradient-text">meaningful.</em>
            </h2>
          </div>

          <p>
            Whether you have an internship opportunity, a software project idea,
            or would like to discuss native Android mobile or full-stack web
            development, my inbox is always open.
          </p>

          <div className="contact-meta-badges">
            <div className="contact-meta-item">
              <MapPin size={16} className="meta-icon" />
              <span>Colombo / Sri Lanka (GMT +5:30)</span>
            </div>
            <div className="contact-meta-item">
              <span className="availability-dot"></span>
              <span>Available for Internships &amp; Collaborations</span>
            </div>
          </div>

          <div className="contact-links">
            {/* Direct Email Card */}
            <div className="contact-card email-card">
              <div className="contact-icon email-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-text">
                <span>Email Network</span>
                <strong>
                  <a
                    href="mailto:samadhihansika457@gmail.com"
                    aria-label="Email samadhihansika457@gmail.com"
                  >
                    Connect via Email
                  </a>
                </strong>
              </div>
              <div className="contact-card-actions">
                <button
                  type="button"
                  className="copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                </button>
                <a
                  href="mailto:samadhihansika457@gmail.com"
                  aria-label="Send Email directly"
                  title="Send Email"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/samadhi-hansika"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon github-icon">
                <Github size={20} />
              </div>
              <div className="contact-card-text">
                <span>GitHub Network</span>
                <strong>Connect on GitHub</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/samadhi-hansika"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon linkedin-icon">
                <Linkedin size={20} />
              </div>
              <div className="contact-card-text">
                <span>LinkedIn Network</span>
                <strong>Connect on LinkedIn</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <h3>Send a Message</h3>
            <p>I typically respond within 24 hours.</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="e.g. john@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="e.g. Internship Inquiry / Software Project"
              value={formState.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="primary-button form-button"
            disabled={submitted}
          >
            {submitted ? (
              <>
                <CheckCircle2 size={18} />
                <span>Opening Mail Client...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={16} />
              </>
            )}
          </button>

          {submitted && (
            <div className="form-success-banner">
              <CheckCircle2 size={16} />
              <span>
                Thank you! Your email client has been prepared with your message.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
