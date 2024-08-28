import React from 'react';
import './Banner.scss';




const Banner = ({bannerImg}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={bannerImg} alt="Background dynamique, paysage naturel"/>
            <div className="banner__overlay"></div>
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;