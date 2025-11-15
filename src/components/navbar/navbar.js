import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const navLinks = ['Home', 'About', 'Education', 'Work', 'Projects', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">KR</div>
        <ul className={`navbar-list ${menuOpen ? 'show' : ''}`}>
          {navLinks.map(name => (
            <li key={name}>
              <Link
                to={name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="active"
                className="navbar-link"
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Resume Button */}
          <li>
            <a
              href="/resume.pdf" // put your PDF inside "public" folder
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
