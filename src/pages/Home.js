// src/components/Home.js
import React from 'react';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card'
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="home-page__card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
