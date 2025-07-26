import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo clickable to go home */}
        <img
          src={logo}
          alt="Lakshya Logo"
          className="header-logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />

        <nav className="nav">
          {/* Use Link for navigation */}
          <Link to="/events" className="nav-link">Events of <span className="mobile-break">Lakshya</span></Link>
          <Link to="/team-page" className="nav-link">Teams of <span className="mobile-break">Lakshya</span></Link>
        </nav>
      </div>
    </header>
  );
};
