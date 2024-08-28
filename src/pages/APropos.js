// src/components/APropos.js
import React from 'react';
import Banner from '../components/banner/Banner';

import './APropos.scss';
import Collapse from '../components/collapse/Collapse';
import mountains from '../components/banner/assets/mountains.png';


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
