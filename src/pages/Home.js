// src/components/Home.js
import React from 'react';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card'
import shore from './assets/shore.png';

import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
    <Banner imgUrl={shore}/>
      <div className="home-page__card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
