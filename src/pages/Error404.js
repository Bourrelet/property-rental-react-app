import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation
import './Error404.scss';

const Error404 = () => {
  return (
    <div className="error">
      <h1 className="error__title1 error__margin">404</h1>
      <h2 className="error__title2 error__margin">Oups! La page que <br/>
      vous demandez n'existe pas.</h2>
      <Link className="error__link error__margin" to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
