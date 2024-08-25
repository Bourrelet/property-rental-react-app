import React from 'react';
import './Banner.scss';

function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src="/shore.png" alt="moutains background"/>
            <div className="banner__overlay"></div>
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;