// src/components/FicheLogement.js
import React from 'react';
import logements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import './FicheLogement.scss';
import Collapse from '../components/collapse/Collapse';
import Gallery from '../components/gallery/Gallery';


const FicheLogement = () => {

  const { id } = useParams();

  const logement = logements.find(item => item.id === id);

  return (
    <div className="logement">
      <div className="gallerie">
        {/* <Gallery />      */}
      </div>
      <h2>{logement.title}</h2>
      {/* <p>{logement.location}</p>
      <div>{logement.tags}</div>
      <div>{logement.rating}</div>
      <div>{logement.host}</div> */}

      <Collapse title="Description" content={logement.description}/>     
      <Collapse title="Équipements" content={logement.equipments}/>

    </div>
    
  );
}

export default FicheLogement;
