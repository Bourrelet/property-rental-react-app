// src/components/APropos.js
import React from 'react';
import mountains from '../components/banner/assets/mountains.png';
import Banner from '../components/banner/Banner';

import './APropos.scss';
import Collapse from '../components/collapse/Collapse';



const APropos = () => {
  return (
    <div className="apropos-page">
      <Banner bannerImg={mountains}/>
      <div className="apropos-page__container">
        <Collapse/>
        <Collapse/>
        <Collapse/>
        <Collapse/>
      </div>
    </div>
  );
}

export default APropos;
