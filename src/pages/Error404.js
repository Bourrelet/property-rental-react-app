// src/components/Error404.js
import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation

const Error404 = () => {
  return (
    <div className="error">
      <h1 className="error__title1">404</h1>
      <h2 className="error__title2">This is the Error404 Page.</h2>
      <Link className="error__link" to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
