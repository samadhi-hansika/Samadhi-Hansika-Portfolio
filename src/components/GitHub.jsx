import { motion } from "framer-motion";
import { Github, ArrowUpRight, GitBranch, Terminal, Star, Code2 } from "lucide-react";

function GitHub() {
  return (
    <section className="github-section section">
      <motion.div
        className="github-card"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="github-icon-glow">
          <Github size={42} />
        </div>

        <span className="section-tag-inline">
          <GitBranch size={14} /> OPEN SOURCE &amp; CODEBASE REPOSITORIES
        </span>

        <h2>
          Explore the Source Code on
          <br />
          <em className="gradient-text">GitHub.</em>
        </h2>

        <p>
          Dive into the source code of native Android applications, React web
          apps, full-stack systems, and AI assistant modules. Review commit
          histories, database schemas, and architectural patterns.
        </p>

        {/* GitHub Stats Row */}
        <div className="github-stats-bar">
          <div className="gh-stat">
            <span className="stat-value">13+</span>
            <span className="stat-desc">Featured Projects</span>
          </div>
          <div className="gh-stat">
            <span className="stat-value">2 IDEs</span>
            <span className="stat-desc">Android Studio &amp; VS Code</span>
          </div>
          <div className="gh-stat">
            <span className="stat-value">5+</span>
            <span className="stat-desc">Core Languages</span>
          </div>
        </div>

        <div className="github-actions">
          <a
            href="https://github.com/samadhi-hansika"
            target="_blank"
            rel="noreferrer"
            className="primary-button gh-button"
          >
            <span>Visit @samadhi-hansika</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default GitHub;
