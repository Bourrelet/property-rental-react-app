import './Collapse.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
const openButton = <FontAwesomeIcon icon={faAngleUp} />;
const closeButton = <FontAwesomeIcon icon={faAngleDown} />;

const Collapse = ({title, content}) => {

    const [collapseOpen, setCollaspeOpen] = useState(false);

    

    const toggleCollapse = () => {
        setCollaspeOpen(!collapseOpen);
    }

    const dynamicClass = `${collapseOpen ? 'isOpen' : 'isClosed'}`;

    return (

    <div className="collapse">

        <div className="collapse__container">

            <h2 className="collapse__title">{title}</h2>
            <button onClick={toggleCollapse} className="collapse__btn isClosed">
                {collapseOpen? closeButton : openButton}
            </button>
         
        </div>

        <div className={`collapse__content ${dynamicClass}`}><p >{content}</p></div>          

    </div>
    );

}

export default Collapse;