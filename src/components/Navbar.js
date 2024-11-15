import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => (
  <nav className="navbar-container">
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 className="navbar-logo">FacesearchAI</h1>
    </Link>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/features" className="nav-link">Features</Link>
      <Link to="/token" className="nav-link">Token</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </div>
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  </nav>
);

export default Navbar;
