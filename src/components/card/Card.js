import React from 'react';
import './Card.scss';


const Card = ({id, title,cover}) => {
    return (

    
    <div className="card-frame">
        <div>{title}</div>
        <strong className="card-frame__title">
            Titre de la <br/> location
            <div>{title}</div>
        </strong>
    </div>
    );

}

export default Card;