import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h1>Mon Application</h1>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
