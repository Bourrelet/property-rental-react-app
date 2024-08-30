import React from 'react';
import './Card.scss';


const Card = ({cover, title}) => {
    return (
    
    <div className="card">
        <img className='card__cover' src={cover} alt={title}/>
        <strong className="card__title">{title}</strong>
    </div>
    );

}

export default Card;