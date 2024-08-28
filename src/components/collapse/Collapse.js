import React from 'react';
import './Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const openButton = <FontAwesomeIcon icon={faAngleUp} />;
const closeButton = <FontAwesomeIcon icon={faAngleDown} />;

const Collapse = () => {
    return (
    <div className="collapse">
        <div className="collapse__container">
            <h2 className="collapse__title">Titre du collapse</h2>   

                <button className="collapse__btn open-btn">{openButton}</button>
         
        </div>
        <p className="collapse__text">Text du collapse</p> 
    </div>
    );

}

export default Collapse;