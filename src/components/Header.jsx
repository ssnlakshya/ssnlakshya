import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <span className="logo-text">SSN Lakshya</span>
      </div>
      <nav className="right-section">
        <a href="#" className="nav-link">
          <span className="nav-text">Home</span>
        </a>
        <a href="#" className="nav-link">
          <span className="nav-text">Events</span>
        </a>
        <a href="#teams" className="nav-link">
          <span className="nav-text">Teams</span>
        </a>
      </nav>
    </header>
  );
};

export default Header; 