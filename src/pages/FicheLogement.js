// src/components/FicheLogement.js
import React from 'react';
import './FicheLogement.scss';
import Collapse from '../components/collapse/Collapse';
import Gallery from '../components/gallery/Gallery';
import Prev from '../components/gallery/prev/Prev';
import Next from '../components/gallery/next/Next';
import Architect from '../components/details/Architect'
import Ratings from '../components/details/Ratings';
import Tags from '../components/details/Tags';


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
