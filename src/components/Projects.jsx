import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Smartphone,
  Code2,
  Sparkles,
  Layers,
  Search,
  X,
  CheckCircle2,
  Database,
  Cpu,
} from "lucide-react";

export const allProjects = [
  // --- ANDROID STUDIO PROJECTS ---
  {
    id: 1,
    title: "Class Management System",
    platform: "Android Studio",
    platformType: "android",
    category: "Mobile Development",
    type: "Academic Management Android App",
    featured: true,
    description:
      "A complete native Android application built with SQLite database for managing academic operations. Features secure role-based authentication (Admin, Lecturer, Student) using hashed credentials, timetable scheduling, real-time student attendance tracking, course enrollments, and automated letter-grade calculation.",
    highlights: [
      "Role-based authorization for Admin, Lecturer, and Student profiles",
      "Persistent SQLite database (mysqlite_cms.db) with SHA-256 password hashing",
      "Interactive timetable viewer, course enrollment, and attendance records",
      "Grading module with automated score-to-letter grade (A+ to F) conversion",
    ],
    technologies: [
      "Java",
      "Android Studio",
      "SQLite",
      "Android SDK",
      "Material Design",
      "MessageDigest Security",
      "XML Layouts",
    ],
    image: "/images/project-cms.svg",
    github: "https://github.com/samadhi-hansika",
    demo: "#",
    status: "Completed",
  },

  {
    id: 2,
    title: "Health & Wellness Tracker",
    platform: "Android Studio",
    platformType: "android",
    category: "Mobile Development",
    type: "Lifestyle & Fitness Mobile App",
    featured: true,
    description:
      "A comprehensive native Android health application using Jetpack Navigation and Fragment architecture. Offers dynamic Body Mass Index (BMI) assessment, personalized dietary nutrition advice, hydration tracking, and customized daily wellness guidelines.",
    highlights: [
      "Single-activity architecture powered by Android Jetpack Navigation",
      "Modular Fragments for Home, BMI calculation, Nutrition, and Health Tips",
      "Real-time BMI calculation with metric input validation",
      "Material Design 3 Bottom Navigation bar with smooth transitions",
    ],
    technologies: [
      "Java",
      "Android Studio",
      "Jetpack Navigation",
      "Fragments",
      "Material UI",
      "BottomNavigationView",
    ],
    image: "/images/project-health.svg",
    github: "https://github.com/samadhi-hansika",
    demo: "#",
    status: "Completed",
  },

  {
    id: 3,
    title: "Smart BMI & Diet Assistant",
    platform: "Android Studio",
    platformType: "android",
    category: "Mobile Development",
    type: "Health Utility Android App",
    featured: false,
    description:
      "An intuitive Android mobile fitness tool developed for CINEC academic curriculum. Features accurate Body Mass Index computation with gender toggle (Male/Female), needle gauge visualization, categorized body evaluation, and automated dietary suggestions.",
    highlights: [
      "Interactive gender toggle with custom state selectors",
      "Visual needle gauge and color-coded indicator arcs for weight classification",
      "Personalized recommendations based on Underweight, Normal, and Overweight status",
      "Clean Material CardView interface with edge-to-edge support",
    ],
    technologies: [
      "Java",
      "Android Studio",
      "Material CardView",
      "Custom Gauge UI",
      "Android SDK",
      "CINEC Project",
    ],
    image: "/images/project-bmi.svg",
    github: "https://github.com/samadhi-hansika",
    demo: "#",
    status: "Completed",
  },

  // --- VS CODE / FULL-STACK, WEB & AI PROJECTS ---
  {
    id: 4,
    title: "UrbanEats Cloud Kitchen",
    platform: "VS Code",
    platformType: "vscode",
    category: "Full-Stack Web",
    type: "Cloud Kitchen & Food Ordering Platform",
    featured: true,
    description:
      "A comprehensive cloud kitchen web application engineered with PHP 8 and MySQL. Features role-based accounts (Customer, Kitchen Staff, Administrator), dynamic food menus with categorisation and search, real-time inventory quantity tracking with low-stock alerts, stock movement ledger, transactional order checkout, and sales analytics reports.",
    highlights: [
      "Role-based multi-dashboard architecture (Customer, Kitchen Staff, Admin)",
      "Real-time inventory movement ledger tracking ingredient & dish levels",
      "Full order lifecycle tracking: Received ➔ Preparing ➔ Ready ➔ Delivered",
      "Transactional checkout with coupon redemption, payments, and sales report exports",
    ],
    technologies: [
      "PHP 8",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Apache / XAMPP",
      "Relational DB Design",
    ],
    image: "/images/urbaneats.png",
    github: "https://github.com/samadhi-hansika",
    demo: "#",
    status: "Completed",
  },

  {
    id: 5,
    title: "Zenvy E-Commerce Store",
    platform: "VS Code",
    platformType: "vscode",
    category: "Frontend Development",
    type: "Modern E-Commerce & Retail Platform",
    featured: true,
    description:
      "A sleek, user-friendly e-commerce platform designed to provide an effortless shopping journey. Features curated product catalogs across Electronics, Clothing, and Gourmet Food, interactive shopping cart, multi-step checkout with order confirmation, customer profile management, and a vendor/admin product & order management console.",
    highlights: [
      "Multi-page architecture with Category Browsing, Cart, Checkout, and Confirmation",
      "Admin & Vendor management portal to add, update, and manage inventory and orders",
      "Dynamic shopping cart with persistent LocalStorage state and quantity modifiers",
      "Modern responsive UI with intuitive search, category filters, and product cards",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "LocalStorage API",
      "Responsive UI",
      "Admin Dashboard",
    ],
    image: "/images/zenvy.png",
    github: "https://github.com/samadhi-hansika",
    demo: "#",
    status: "Completed",
  },

  {
    id: 6,
    title: "ParkLink",
    platform: "VS Code",
    platformType: "vscode",
    category: "Full-Stack Web",
    type: "Smart Parking Reservation System",
    featured: true,
    description:
      "A smart parking discovery and bay reservation platform built with React and Cloud Firestore. Drivers can locate nearby parking facilities, inspect real-time bay occupancy status, reserve parking slots with instant confirmation, and manage booking passes, while administrators control parking rates and bay availability.",
    highlights: [
      "Live bay occupancy visualization with color-coded availability states",
      "Instant reservation system linked to Cloud Firestore real-time listeners",
      "Driver booking history management, digital parking passes, and QR check-in",
      "Administrator portal for managing parking garage layouts and hourly tariffs",
    ],
    technologies: [
      "React.js",
      "Firebase Auth",
      "Cloud Firestore",
      "React Router",
      "JavaScript",
      "CSS3",
    ],
    image: "/images/parklink.png",
    github: "https://github.com/samadhi-hansika/Smart-Parking-Reservation-System",
    demo: "#",
    status: "Completed",
  },

  {
    id: 7,
    title: "rich-answer-ai",
    platform: "VS Code",
    platformType: "vscode",
    category: "AI & Backend",
    type: "AI Assistant for Technical Manuals",
    featured: true,
    description:
      "An intelligent AI assistant and document intelligence backend. Ingests industrial and technical PDF manuals using pdf-poppler and Tesseract.js OCR, vectorizes extracted text with cosine similarity embeddings, and queries OpenAI API to deliver accurate, context-grounded answers for complex engineering questions.",
    highlights: [
      "Automated PDF extraction pipeline with pdf-poppler and Tesseract OCR engine",
      "High-precision semantic search using vector cosine similarity ranking",
      "Context-augmented prompt generation for OpenAI GPT models",
      "RESTful API architecture built on Express 5.x with Multer file uploads",
    ],
    technologies: [
      "Node.js",
      "Express 5.x",
      "OpenAI API",
      "Tesseract.js OCR",
      "Cosine Similarity",
      "PDF-Poppler",
      "Canvas",
      "Multer",
    ],
    image: "/images/rich-answer-ai.png",
    github: "https://github.com/Nikini-Thathsarani/rich-answer-ai",
    demo: "#",
    status: "Completed",
  },

  {
    id: 8,
    title: "KUNULINK",
    platform: "VS Code",
    platformType: "vscode",
    category: "Full-Stack Web",
    type: "Smart Waste Management Platform",
    featured: true,
    description:
      "A role-based municipal waste management platform connecting citizens, collectors, and admins. Citizens submit collection requests with interactive map pickups via Leaflet & OpenStreetMap, while collectors manage routes and administrators analyze trends through Recharts and generate jsPDF dispatch manifests.",
    highlights: [
      "Interactive map-based pickup requests using Leaflet & OpenStreetMap",
      "Role-based routing and permissions for Citizens, Collectors, and Administrators",
      "Real-time Cloud Firestore synchronization and Firebase Auth security",
      "Visual analytics dashboards with Recharts and one-click PDF reports via jsPDF",
    ],
    technologies: [
      "React",
      "Firebase Auth",
      "Cloud Firestore",
      "Leaflet",
      "OpenStreetMap",
      "Recharts",
      "jsPDF",
      "React Router",
    ],
    image: "/images/project-kunulink.svg",
    github: "https://github.com/Chanulaw/KunuLink",
    demo: "#",
    status: "Completed",
  },

  {
    id: 9,
    title: "National E-ID System",
    platform: "VS Code",
    platformType: "vscode",
    category: "Full-Stack Web",
    type: "Digital Identity Management Platform",
    featured: true,
    description:
      "A national digital identity management portal built with React, Vite, and Firebase. Features citizen self-registration, EmailJS verification workflows, admin verification pipelines, multilingual support (English, Sinhala, Tamil via i18next), and dynamic QR Code generation for seamless identity presentation.",
    highlights: [
      "Citizen registration pipeline with EmailJS automated verification emails",
      "Dynamic QR Code generator embedding verified citizen credentials",
      "Trilingual interface (English, Sinhala, Tamil) integrated with i18next",
      "Interactive administrative dashboard with Chart.js demographic graphs",
    ],
    technologies: [
      "React",
      "Vite",
      "Firebase Auth",
      "EmailJS",
      "React Router",
      "i18next (Multilingual)",
      "Chart.js",
      "QRCode React",
    ],
    image: "/images/project-eid.svg",
    github: "https://github.com/Nikini-Thathsarani/National-E-ID-System",
    demo: "#",
    status: "Completed",
  },

  {
    id: 10,
    title: "RiceLink Traders",
    platform: "VS Code",
    platformType: "vscode",
    category: "Web Development",
    type: "Paddy Buying & Inventory Management",
    featured: false,
    description:
      "A web-based paddy procurement and inventory management system designed for agricultural supply chains. Farmers submit crop harvest offers with volume and location; administrators manage live pricing, verify deliveries, and generate official PDF billing receipts.",
    highlights: [
      "Farmer crop submission portal with harvest quantity and location logging",
      "Admin price management module updating per-kilogram rates across grades",
      "Chart.js data visualizers showing seasonal harvest intake volumes",
      "Automated printable PDF payment receipt generation for farmers",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "MariaDB",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Chart.js",
    ],
    image: "/images/ricelink.png",
    github: "https://github.com/samadhi-hansika/RiceLink",
    demo: "#",
    status: "Completed",
  },

  {
    id: 11,
    title: "CodeBot Assistant",
    platform: "VS Code",
    platformType: "vscode",
    category: "Frontend Development",
    type: "Rule-Based Interactive Code Assistant",
    featured: false,
    description:
      "A responsive, browser-based coding chatbot built with pure vanilla JavaScript and CSS3. Utilizes intelligent keyword pattern-matching algorithms to provide explanations, syntax breakdowns, and interactive examples for programming concepts and data structures.",
    highlights: [
      "Intelligent regex pattern-matching engine for computer science concepts",
      "Syntax-highlighted code snippet cards returned for relevant queries",
      "Lightweight zero-dependency architecture with instantaneous responses",
      "Fully responsive dark terminal UI optimized for developers",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "DOM API",
      "Regex Engine",
    ],
    image: "/images/project-chatbot.svg",
    github: "https://github.com/samadhi-hansika/ChatBot",
    demo: "#",
    status: "Completed",
  },

  {
    id: 12,
    title: "Soft-Mart Marketplace",
    platform: "VS Code",
    platformType: "vscode",
    category: "Frontend Development",
    type: "Software Blueprint Marketplace",
    featured: false,
    description:
      "A modern multi-page digital commerce prototype where software engineers and designers explore curated design patterns, UI kits, and architectural blueprints. Features category filtering, interactive product showcase, shopping cart, and mock checkout.",
    highlights: [
      "Multi-page architecture with Category, Marketplace, FAQ, and Checkout flows",
      "Dynamic shopping cart with live item summation and checkout simulation",
      "Clean responsive design patterns compatible with all viewports",
      "Engaging product cards with interactive preview triggers",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "Modern JavaScript",
      "Responsive Layouts",
    ],
    image: "/images/soft-mart.png",
    github: "https://github.com/samadhi-hansika/Soft-Mart",
    demo: "#",
    status: "Completed",
  },

  {
    id: 13,
    title: "CineMate Discovery",
    platform: "VS Code",
    platformType: "vscode",
    category: "Frontend Development",
    type: "Cinema & Movie Discovery Website",
    featured: false,
    description:
      "A sleek, cinema-inspired media discovery frontend built with responsive layouts. Incorporates high-resolution poster card carousels, genre filtering, movie trailers view, and adaptive dark mode styling for cinematic immersion.",
    highlights: [
      "Cinematic dark aesthetic with high-impact hero banners and media posters",
      "Interactive category filters for Action, Sci-Fi, Thriller, and Drama",
      "Detailed modal mockups displaying cast, rating, and runtime information",
      "Fluid CSS Grid system with mobile-first responsive breakpoints",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "CSS Grid & Flexbox",
    ],
    image: "/images/cinemate.png",
    github: "https://github.com/samadhi-hansika/CineMate",
    demo: "#",
    status: "Completed",
  },
];

const filterCategories = [
  { label: "All Projects (13)", value: "All" },
  { label: "Android Studio (3)", value: "Android" },
  { label: "VS Code & Web (10)", value: "VSCode" },
  { label: "Full-Stack Web", value: "Full-Stack Web" },
  { label: "AI & Backend", value: "AI & Backend" },
  { label: "Frontend", value: "Frontend Development" },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Filter by platform or category
      let matchesFilter = true;
      if (activeFilter === "Android") {
        matchesFilter = project.platformType === "android";
      } else if (activeFilter === "VSCode") {
        matchesFilter = project.platformType === "vscode";
      } else if (activeFilter !== "All") {
        matchesFilter = project.category === activeFilter;
      }

      // Filter by search query
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span className="section-tag">
          <Layers size={15} /> 03 / PORTFOLIO SHOWCASE
        </span>
        <h2>
          Featured &amp; <em>Selected Work.</em>
        </h2>
        <p>
          A curated collection of completed software solutions engineered across{" "}
          <strong>Android Studio</strong> (Native Mobile) and{" "}
          <strong>VS Code</strong> (Full-Stack Web &amp; AI Systems).
        </p>
      </div>

      {/* Control Bar: Filters + Live Search */}
      <div className="projects-controls">
        <div className="project-filters" aria-label="Filter projects">
          {filterCategories.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-button${
                activeFilter === f.value ? " active" : ""
              }`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.value === "Android" && <Smartphone size={14} />}
              {f.value === "VSCode" && <Code2 size={14} />}
              {f.value === "All" && <Sparkles size={14} />}
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="project-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search by tech (Java, React, SQLite, PHP, Node)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchQuery("")}
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Count Indicator */}
      <div className="projects-meta-bar">
        <span>
          Showing <strong>{filteredProjects.length}</strong> of{" "}
          <strong>{allProjects.length}</strong> projects
        </span>
        {activeFilter !== "All" && (
          <button
            type="button"
            className="reset-filter-btn"
            onClick={() => setActiveFilter("All")}
          >
            Show All
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.article
            className={`project-card ${project.platformType}`}
            key={project.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4) }}
          >
            {/* Project Index Number */}
            <span className="project-number">
              #{String(project.id).padStart(2, "0")}
            </span>

            {/* Platform Badge */}
            <div className={`platform-pill ${project.platformType}`}>
              {project.platformType === "android" ? (
                <>
                  <Smartphone size={13} />
                  <span>Android Studio</span>
                </>
              ) : (
                <>
                  <Code2 size={13} />
                  <span>VS Code</span>
                </>
              )}
            </div>

            {/* Project Image Preview */}
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="project-image-placeholder">
                <span>{project.title}</span>
              </div>

              {/* Hover Overlay */}
              <div className="project-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="View Source on GitHub"
                >
                  <Github size={20} />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="overlay-details-btn"
                  title="View Project Architecture & Details"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>

            {/* Project Card Body */}
            <div className="project-content">
              <div className="project-header-meta">
                <span className="project-type">{project.type}</span>
                {project.status && (
                  <span
                    className={`status-pill ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Technologies List */}
              <div className="tech-list">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="tech-chip more">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="project-footer">
                <span className="project-category">{project.category}</span>
                <button
                  type="button"
                  className="view-project"
                  onClick={() => setSelectedProject(project)}
                >
                  Project Details <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="no-projects-found">
          <p>No projects matched your search criteria.</p>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              setActiveFilter("All");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div
                  className={`platform-pill ${selectedProject.platformType}`}
                >
                  {selectedProject.platformType === "android" ? (
                    <>
                      <Smartphone size={13} />
                      <span>Android Studio Project</span>
                    </>
                  ) : (
                    <>
                      <Code2 size={13} />
                      <span>VS Code Project</span>
                    </>
                  )}
                </div>
                <h2>{selectedProject.title}</h2>
                <span className="modal-subtitle">
                  {selectedProject.type} • {selectedProject.category}
                </span>
              </div>

              <div className="modal-body">
                <div className="modal-image-wrap">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                {selectedProject.highlights && (
                  <div className="modal-section">
                    <h4>Key Architecture &amp; Implemented Modules</h4>
                    <ul className="modal-highlights">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i}>
                          <CheckCircle2
                            size={16}
                            className="highlight-check"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-section">
                  <h4>Technologies &amp; Libraries Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  <Github size={18} />
                  <span>View Source Code</span>
                </a>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
