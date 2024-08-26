import React from 'react';
import './Collapse.scss';


const Collapse = () => {
    return (
    <div className="collapse">
        <div className="collapse__container">
            <h2 className="collapse__title">Titre du collapse</h2>
            <p className="collapse__text">Text du collapse</p>  
        </div>
    </div>
    );

}

export default Collapse;