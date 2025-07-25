import React from "react";
import logo from '../../assets/logo.png';

export const Header = ({handleScroll}) => {
    return(
        <header className="header">
            <div className="container header-content">
                <img src={logo} alt="Lakshya Logo" className="header-logo" />
                <nav className="nav">
                <a href="#events" className="nav-link" onClick={() => handleScroll('events')}>Events of Lakshya</a>
                <a href="#teams" className="nav-link" onClick={() => handleScroll('teams')}>Teams of Lakshya</a>
                </nav>
            </div>
        </header>
)}  