import './Collapse.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({title, content}) => {

    const [collapseOpen, setCollaspeOpen] = useState(false);

    

    const toggleCollapse = () => {
        setCollaspeOpen(!collapseOpen);
    }

    const dynamicTag = `${collapseOpen ? 'isOpen' : 'isClosed'}`;
    const dynamicRotation = `${collapseOpen ? 'down' : 'up'}`;

    return (

    <div className="component">

        <div className="collapse">

            <div className="collapse__container">   
                <h2 className="collapse__title">{title}</h2>
                <button onClick={toggleCollapse} className='collapse__btn'>
                    <FontAwesomeIcon icon={faAngleUp} className={dynamicRotation}/>
                </button>
            </div>

            <div className={`collapse__content ${dynamicTag}`}>
                <div className='collapse__data'>
                    {Array.isArray(content)? 
                        content.map((item, index) => <p key={index}>{item}</p>) : <p>{content}</p>
                    }        
                </div>
            </div>               
        </div>

            

    </div>
    );

}

export default Collapse;