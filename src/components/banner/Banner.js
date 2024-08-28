import React from 'react';
import './Banner.scss';




const Banner = ({imgUrl}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={imgUrl} alt="Background dynamique, paysage naturel"/>
            <div className="banner__overlay"></div>
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;