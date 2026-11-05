import { useState, useEffect } from "react";
import { Menu, X, Smartphone, Code2, Sparkles, Send } from "lucide-react";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects", "13"],
  ["Education", "education"],
  ["Contact", "contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a className="logo" href="#home" onClick={closeMenu}>
        <div className="logo-avatar">SH</div>
        <span className="logo-text">
          SAMADHI<span className="logo-accent">.DEV</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, target, badge]) => (
          <a key={target} href={`#${target}`} className="nav-link">
            <span>{label}</span>
            {badge && <span className="nav-badge">{badge}</span>}
          </a>
        ))}
      </nav>

      <a className="nav-button" href="#contact">
        <span>Hire Me</span>
        <Send size={14} />
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, target, badge]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>
              <span>{label}</span>
              {badge && <span className="nav-badge">{badge}</span>}
            </a>
          ))}
          <a href="#contact" className="mobile-contact-btn" onClick={closeMenu}>
            <span>Get in touch</span>
            <Send size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
