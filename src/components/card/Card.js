import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';


const Card = ({id, cover, title}) => {

    const navigate = useNavigate();
    const goToLogement = () => {
        navigate(`/logement/${id}`)
    };


    return (
    
    <div className="card" onClick={goToLogement}>
        <img  className='card__cover' src={cover} alt={title}/>
        <strong className="card__title">{title}</strong>
    </div>
    );

}

export default Card;