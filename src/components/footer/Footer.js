import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src="/kasalogofooter.png" alt="logo Kasa"/>
        <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
