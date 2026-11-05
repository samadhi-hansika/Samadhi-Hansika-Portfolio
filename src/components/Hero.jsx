import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
  Smartphone,
  Database,
} from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="availability-dot"></span>
          <span>BSc (Hons) Software Engineering • CINEC Campus</span>
        </motion.div>

        <motion.p
          className="hero-small-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Samadhi
          <br />
          <span className="gradient-text">Hansika</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Software Engineer &amp; Full-Stack / Android Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Passionate 3rd-year Software Engineering undergraduate at CINEC Campus.
          Experienced in building native mobile apps with{" "}
          <strong>Java &amp; SQLite in Android Studio</strong>, and scalable
          full-stack web &amp; AI systems with{" "}
          <strong>React, Node.js &amp; Firebase in VS Code</strong>.
        </motion.p>

        {/* Quick Stats Grid */}
        <motion.div
          className="hero-stats-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className="hero-stat">
            <span className="stat-number">13+</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">03</span>
            <span className="stat-label">Android Studio Apps</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">10</span>
            <span className="stat-label">VS Code / Web Systems</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="stat-number">3rd Yr</span>
            <span className="stat-label">CINEC Student</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a href="#projects" className="primary-button">
            <span>Explore All 13 Projects</span>
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-button">
            <span>Get In Touch</span>
            <Mail size={17} />
          </a>

          <a href="/cv/Samadhi_CV.pdf" download className="secondary-button">
            <span>Download CV</span>
            <Download size={17} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="https://github.com/samadhi-hansika"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub: @samadhi-hansika"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:samadhihansika457@gmail.com"
            aria-label="Email Me"
            title="samadhihansika457@gmail.com"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/samadhi-hansika"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="Connect on LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Hero Visual Area with Animated Tech Orbits */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>

        {/* Central Profile Image */}
        <div className="hero-center profile-photo">
          <img
            src="/images/profile.jpeg"
            alt="Samadhi Hansika Priyadarshani"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="profile-fallback">SH</div>
        </div>

        {/* Floating Tech Badges */}
        <motion.div
          className="floating-card floating-card-one android-badge"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Smartphone size={16} className="badge-icon-android" />
          <span>Android Studio</span>
        </motion.div>

        <motion.div
          className="floating-card floating-card-two vscode-badge"
          animate={{ y: [0, 14, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2 size={16} className="badge-icon-vscode" />
          <span>VS Code &amp; React</span>
        </motion.div>

        <motion.div
          className="floating-card floating-card-three java-badge"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Database size={16} className="badge-icon-java" />
          <span>Java &amp; SQLite</span>
        </motion.div>

        <motion.div
          className="floating-card floating-card-four ai-badge"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={16} className="badge-icon-ai" />
          <span>AI &amp; Full-Stack</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
