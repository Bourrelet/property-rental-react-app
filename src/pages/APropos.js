// src/components/APropos.js
import React from 'react';
import Banner from '../components/banner/Banner';
import './APropos.scss';
import Collapse from '../components/collapse/Collapse';

const APropos = () => {
  return (
    <div className="apropos-page">
      <Banner />
      <div className="apropos-page__collapse-container">
      <Collapse/>
      <Collapse/>
      <Collapse/>
      <Collapse/>
      </div>
    </div>
  );
}

export default APropos;
