import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
