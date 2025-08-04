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
      <div className={`navbar-container`}>
        <div className="navbar-logo">MyPortfolio</div>
        <ul className={`navbar-list ${menuOpen ? 'show' : ''}`}>
          {navLinks.map(name => (
            <li key={name}>
              <Link
                to={name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="navbar-link"
                onClick={handleLinkClick}
              >
                {name}
              </Link>
            </li>
          ))}
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
