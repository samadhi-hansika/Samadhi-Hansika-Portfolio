import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#home" className="footer-logo">
          SAMADHI<span className="logo-accent">.DEV</span>
        </a>

        <p>
          BSc (Hons) Software Engineering Undergraduate
          <br />
          CINEC Campus • Sri Lanka
        </p>
      </div>

      <div className="footer-center">
        <p className="footer-tech-stack">
          Crafted with <strong>React</strong>, <strong>Framer Motion</strong> &amp; <strong>Vite</strong>.
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Samadhi Hansika Priyadarshani. All rights reserved.
        </p>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/samadhi-hansika"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          title="GitHub: @samadhi-hansika"
        >
          <Github size={18} />
        </a>

        <a
          href="mailto:samadhihansika457@gmail.com"
          aria-label="Send Email"
          title="Email"
        >
          <Mail size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/samadhi-hansika"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn Profile"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="#home"
          className="back-top"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
