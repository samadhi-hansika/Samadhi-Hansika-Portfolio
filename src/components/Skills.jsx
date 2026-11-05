import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    id: "all",
    label: "All Toolkit",
    icon: Sparkles,
  },
  {
    id: "mobile",
    label: "Mobile (Android Studio)",
    icon: Smartphone,
  },
  {
    id: "frontend",
    label: "Frontend & Web (VS Code)",
    icon: Code2,
  },
  {
    id: "backend",
    label: "Backend & Database",
    icon: Database,
  },
  {
    id: "ai-tools",
    label: "AI, Tools & Workflow",
    icon: Cpu,
  },
];

const skillsData = [
  // Mobile (Android Studio)
  {
    name: "Android SDK & Studio",
    category: "mobile",
    level: "Advanced",
    description:
      "Native mobile app architecture, layouts, lifecycles, and Android Studio debugging tools.",
    badge: "Android Studio",
  },
  {
    name: "Java (Android / OOP)",
    category: "mobile",
    level: "Advanced",
    description:
      "Object-Oriented Programming, data structures, event listeners, and Android activities.",
    badge: "Language",
  },
  {
    name: "SQLite Database",
    category: "mobile",
    level: "Advanced",
    description:
      "Local relational database modeling, SQLiteOpenHelper, schema migrations, and CRUD ops.",
    badge: "Database",
  },
  {
    name: "Jetpack Navigation & Fragments",
    category: "mobile",
    level: "Proficient",
    description:
      "Single-activity navigation graphs, NavHostFragment, BottomNavigationView, and safe args.",
    badge: "Android Jetpack",
  },
  {
    name: "Material Design 3 & XML",
    category: "mobile",
    level: "Advanced",
    description:
      "Responsive XML layouts, MaterialCardView, ConstraintLayout, and Edge-to-Edge insets.",
    badge: "UI / UX",
  },
  {
    name: "Android SharedPreferences",
    category: "mobile",
    level: "Advanced",
    description:
      "Local key-value persistence, session preservation, and lightweight user cache storage.",
    badge: "Persistence",
  },

  // Frontend & Web (VS Code)
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    description:
      "Functional components, custom hooks, state management, and modern component hierarchies.",
    badge: "Web Library",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Advanced",
    description:
      "Async/await, DOM manipulation, functional programming, regex, and modern JS runtime.",
    badge: "Core Language",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "frontend",
    level: "Advanced",
    description:
      "Accessible markup, modern semantic elements, and SEO-friendly document structures.",
    badge: "Web Standard",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    level: "Advanced",
    description:
      "Flexbox, CSS Grid, keyframe animations, glassmorphism, and responsive breakpoints.",
    badge: "Styling",
  },
  {
    name: "React Router DOM",
    category: "frontend",
    level: "Proficient",
    description:
      "Dynamic routing, nested routes, protected authentication guards, and history navigation.",
    badge: "Routing",
  },
  {
    name: "Leaflet & OpenStreetMap",
    category: "frontend",
    level: "Proficient",
    description:
      "Interactive map integration, GPS coordinates, custom markers, and route visualizations.",
    badge: "Maps / GIS",
  },
  {
    name: "Chart.js & Recharts",
    category: "frontend",
    level: "Proficient",
    description:
      "Data visualization dashboards, dynamic line/bar metrics, and analytical charting.",
    badge: "Data Viz",
  },

  // Backend & Database
  {
    name: "Node.js & Express.js",
    category: "backend",
    level: "Proficient",
    description:
      "Server-side JavaScript runtime, RESTful API design, middleware, and file stream handling.",
    badge: "Backend",
  },
  {
    name: "Firebase Auth & Firestore",
    category: "backend",
    level: "Proficient",
    description:
      "NoSQL cloud database, real-time listeners, document queries, and secure email/pass auth.",
    badge: "BaaS / Cloud",
  },
  {
    name: "PHP (Server-Side)",
    category: "backend",
    level: "Intermediate",
    description:
      "Backend scripts, session handling, relational database queries, and form processing.",
    badge: "Server-side",
  },
  {
    name: "MySQL & MariaDB",
    category: "backend",
    level: "Proficient",
    description:
      "Relational schema design, SQL queries, joins, indexes, foreign keys, and transactions.",
    badge: "SQL Database",
  },
  {
    name: "EmailJS & jsPDF",
    category: "backend",
    level: "Proficient",
    description:
      "Client-side verification emails, dynamic document rendering, and PDF receipt downloads.",
    badge: "Services",
  },

  // AI & Tools
  {
    name: "OpenAI API Integration",
    category: "ai-tools",
    level: "Proficient",
    description:
      "Prompt engineering, context grounding, streaming completions, and LLM-assisted search.",
    badge: "AI / LLM",
  },
  {
    name: "Tesseract.js OCR",
    category: "ai-tools",
    level: "Proficient",
    description:
      "Optical Character Recognition from PDF manuals, text extraction, and image preprocessing.",
    badge: "Computer Vision",
  },
  {
    name: "Vector Cosine Similarity",
    category: "ai-tools",
    level: "Proficient",
    description:
      "Embedding matching algorithms, semantic ranking, and document intelligence workflows.",
    badge: "AI Retrieval",
  },
  {
    name: "Git & GitHub",
    category: "ai-tools",
    level: "Advanced",
    description:
      "Branch management, code reviews, semantic commits, and open-source collaboration.",
    badge: "Version Control",
  },
  {
    name: "VS Code Ecosystem",
    category: "ai-tools",
    level: "Advanced",
    description:
      "Modern extensions, Vite bundling, ESLint, npm packages, and full-stack workspace configs.",
    badge: "Developer Tool",
  },
  {
    name: "i18next Localization",
    category: "ai-tools",
    level: "Proficient",
    description:
      "Multilingual translation matrices supporting English, Sinhala, and Tamil interfaces.",
    badge: "i18n",
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">
            <Layers size={15} /> 02 / TECHNICAL TOOLKIT
          </span>

          <h2>
            Technologies &amp; <em>Development Stack.</em>
          </h2>

          <p>
            Battle-tested technical skills acquired through university coursework
            at <strong>CINEC Campus</strong>, hands-on software projects in{" "}
            <strong>Android Studio</strong>, and full-stack systems in{" "}
            <strong>VS Code</strong>.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="skills-tabs" aria-label="Skills categories">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.id === "all"
                ? skillsData.length
                : skillsData.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                className={`skill-tab-btn${
                  selectedCategory === cat.id ? " active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
                <span className="skill-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div
              className={`skill-card skill-cat-${skill.category}`}
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.04, 0.3),
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-header">
                <div>
                  <span className="skill-badge-tag">{skill.badge}</span>
                  <h3>{skill.name}</h3>
                </div>

                <span
                  className={`skill-level ${skill.level
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {skill.level}
                </span>
              </div>

              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
