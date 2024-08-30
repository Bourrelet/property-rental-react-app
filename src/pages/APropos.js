// src/components/APropos.js
import React from 'react';
import mountains from '../components/banner/assets/mountains.png';
import Banner from '../components/banner/Banner';

import './APropos.scss';
import Collapse from '../components/collapse/Collapse';



const APropos = () => {

  const aProposListContent = [
    { "key": "01",
      "title": "Fiabilité",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
     },
    { "key": "02",
      "title": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
     },
    { "key": "03",
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
     },
    { "key": "04",
      "title": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
     }];


  return (
    <div className="apropos-page">
      <Banner bannerImg={mountains}/>
      <div className="apropos-page__container">
        {aProposListContent.map(subject => 
          (<Collapse key={subject.key} title={subject.title} content={subject.content}/>))
          }
        

      </div>
    </div>
  );
}

export default APropos;
