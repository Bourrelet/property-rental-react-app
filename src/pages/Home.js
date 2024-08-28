// src/components/Home.js
import React from 'react';
import shore from '../components/banner/assets/shore.png';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card'


import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
    <Banner bannerImg={shore}/>
      <div className="home-page__card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
