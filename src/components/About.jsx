import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Database,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Native Android Development",
    accent: "android",
    text: "Building robust mobile apps in Android Studio using Java, SQLite, Jetpack Navigation, and Material 3 UI design.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Engineering",
    accent: "web",
    text: "Creating interactive web applications in VS Code with React, JavaScript, Vite, responsive CSS, and state management.",
  },
  {
    icon: Cpu,
    title: "AI & Intelligent Systems",
    accent: "ai",
    text: "Integrating OpenAI APIs, Tesseract OCR, and vector similarity search into Node.js document intelligence workflows.",
  },
  {
    icon: Database,
    title: "Database & Cloud Architecture",
    accent: "db",
    text: "Designing structured schemas with SQLite and MySQL/MariaDB, alongside real-time NoSQL sync with Cloud Firestore.",
  },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <span className="section-tag">
          <Sparkles size={15} /> 01 / PROFESSIONAL PROFILE
        </span>
        <h2>
          Engineering digital experiences with <em>purpose &amp; precision.</em>
        </h2>
      </div>

      <div className="about-layout">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="large-text">
            I'm <strong>Samadhi Hansika Priyadarshani</strong>, a third-year
            Software Engineering undergraduate at <strong>CINEC Campus</strong>.
          </p>

          <p>
            My engineering focus spans both native mobile application
            development and modern full-stack web architectures. I work
            proficiently across two main environments:{" "}
            <strong>Android Studio</strong> for building reliable, database-driven
            Android apps in Java &amp; SQLite, and <strong>VS Code</strong> for
            crafting responsive React web systems, AI backends, and full-stack
            platforms.
          </p>

          <p>
            Whether implementing secure role-based permissions in SQLite,
            integrating OpenAI OCR manual assistants, or building real-time
            municipal waste tracking maps with Leaflet and Firestore, I strive to
            write clean, maintainable, and modular code.
          </p>

          <div className="about-highlight-box">
            <div className="highlight-tag">CURRENT FOCUS</div>
            <p>
              Undergraduate studies at CINEC Campus • Expanding knowledge in
              distributed systems, native Android, and full-stack web applications.
            </p>
          </div>
        </motion.div>

        <div className="about-cards">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                className={`about-card accent-${feature.accent}`}
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className={`card-icon icon-${feature.accent}`}>
                  <Icon size={22} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
