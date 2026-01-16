import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">Rohith E</div>
      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/Rohith_E_Software_engineer1.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Resume ↓
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="navbar-mobile">
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li>
            <a
              href="/Rohith_E_Frontend_Developer.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="resume-link mobile-resume"
            >
              Resume ↓
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
