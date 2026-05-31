import { useState } from "react";
import "../styles/Navbar.css";
import { NAV_LINKS } from "../data";

export default function Navbar({ activeNav, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link) => {
    onNav(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo" onClick={() => handleNav("Home")}>KV.</div>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <span
                className={`navbar__link${activeNav === link ? " navbar__link--active" : ""}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            className="navbar__cv-btn"
            href="/kumar_vishu_resume.pdf"
            download="Kumar_Vishu_Resume.pdf"
          >
            ⬇ CV
          </a>
          <button className="navbar__hire-btn" onClick={() => handleNav("Contact")}>
            Hire Me
          </button>
        </div>

        <button className="navbar__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <div
              key={link}
              className={`navbar__mobile-item${activeNav === link ? " navbar__mobile-item--active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </div>
          ))}
          <a
            className="navbar__mobile-cv"
            href="/kumar_vishu_resume.pdf"
            download="Kumar_Vishu_Resume.pdf"
          >
            ⬇ Download CV
          </a>
        </div>
      )}
    </>
  );
}
