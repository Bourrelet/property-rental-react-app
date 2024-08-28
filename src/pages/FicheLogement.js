// src/components/FicheLogement.js
import React from 'react';
import './FicheLogement.scss';
import Collapse from '../components/collapse/Collapse';

const FicheLogement = () => {
  return (
    <div className="logement">
      <div className="gallerie">
        <Gallery />
        <Prev />
        <Next />        
      </div>
      <h2>titre dynamique</h2>
      <p> localisation dynamique</p>
      <Tags/>
      <Ratings />
      <Architect />

      <Collapse />     
      <Collapse />

    </div>
    
  );
}

export default FicheLogement;
