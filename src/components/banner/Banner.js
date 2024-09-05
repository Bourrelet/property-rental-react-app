import React from 'react';
import './Banner.scss';




const Banner = ({bannerImg , bannerAlt}) => {

   
    return (
        
        <div className="banner">
            <img className="banner__img" src={bannerImg} alt={`Paysage naturel de ${bannerAlt}`}/>
            <div className={`banner__overlay ${bannerAlt}`}></div>
            <h1 className={`banner__title ${bannerAlt}`}>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;