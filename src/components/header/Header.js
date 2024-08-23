import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation
import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img className="navbar__logo" src="/kasalogomobile.png" alt="logo Kasa"/>
        <ul className="navbar__link">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
