import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CheckCircle, Award } from "lucide-react";

const coursework = [
  "Mobile Application Development (Android Studio / Java)",
  "Object-Oriented Programming (Java / OOP)",
  "Database Management Systems (SQLite, MySQL, MariaDB)",
  "Web Technologies & Frameworks (React, JavaScript, PHP)",
  "Software Testing & Quality Assurance",
  "Data Structures & Algorithms",
];

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <span className="section-tag">
          <Award size={15} /> 04 / EDUCATION &amp; QUALIFICATIONS
        </span>
        <h2>
          My <em>Academic Journey.</em>
        </h2>
        <p>
          Formal education and academic milestones shaping my engineering fundamentals.
        </p>
      </div>

      <div className="timeline">
        {/* Degree Item */}
        <motion.div
          className="timeline-item featured"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-icon education-icon">
            <GraduationCap size={24} />
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-date">2024 — Present</span>
              <span className="timeline-status-badge">Undergraduate</span>
            </div>

            <h3>BSc (Hons) in Software Engineering</h3>
            <h4>CINEC Campus, Sri Lanka</h4>

            <p>
              Currently in the 3rd year of undergraduate studies, developing
              strong computer science theory and practical skills across native
              mobile development, web systems, database design, and software
              testing methodologies.
            </p>

            <div className="coursework-section">
              <span className="coursework-title">Key Core Subjects &amp; Practical Modules:</span>
              <div className="coursework-grid">
                {coursework.map((course, i) => (
                  <div key={i} className="coursework-tag">
                    <CheckCircle size={13} className="check-icon" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* High School A/L Item */}
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="timeline-icon school-icon">
            <BookOpen size={24} />
          </div>

          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-date">Secondary Education</span>
              <span className="timeline-status-badge secondary">Completed</span>
            </div>

            <h3>G.C.E. Advanced Level (A/L)</h3>
            <h4>Physical Science Stream</h4>

            <p>
              Successfully completed Advanced Level examinations in Combined
              Mathematics, Physics, and Chemistry, laying analytical and
              mathematical foundations for computational problem solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
