// src/components/Home.js
import React from 'react';
import shore from '../components/banner/assets/shore.png';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card'
import logements from '../data/logements.json';
// logements est le contenu du fichier pa il a ete Importe

import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
    <Banner bannerImg={shore}/>
      <div className="home-page__card-container">
        {logements.map(logement => {
          console.log(logement);
        {<Card id={logement.id} cover={logement.cover} title={logement.title}/>} 
          <div>{logement.title}</div>
          }
        
        )}
        
      </div>
    </div>
  );
}

export default Home;
