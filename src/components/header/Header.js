import React from 'react';
import { Link , useLocation } from 'react-router-dom'; // Pour la navigation
import './Header.scss';

const Header = () => {

  const location = useLocation();

  return (
    <header>
      <nav className="navbar">
        <img className="navbar__logo" src="/kasalogomobile.png" 
         srcSet="/kasalogomobile.png 768w, /kasalogodesktop.png 769w"
        alt="logo Kasa"/>
        <ul className="navbar__link">
          <li className={location.pathname === '/' ? 'underlined' : ''}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === '/apropos' ? 'underlined' : ''}><Link to="/apropos">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
