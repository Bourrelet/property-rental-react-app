import React, { useState } from 'react';
import './Gallery.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Gallery= ({logement}) => {

    const prevBtn = <FontAwesomeIcon icon={faAngleLeft} />;
    const nextBtn = <FontAwesomeIcon icon={faAngleRight} />;

    const [activeIndex , setActiveIndex] = useState(0);

    const prevImg = () => {
        setActiveIndex((prevState) => (prevState === 0 ? logement.length - 1 : prevState - 1));
    };

    const nextImg = () => {
        setActiveIndex((prevState) => (prevState === logement.length - 1 ? 0 : prevState + 1));
    };

    return (
        <div>
            <div>
                <img src={logement[activeIndex]} alt={`Image ${activeIndex} + 1`}/>

                {logement.length > 1 && (
                    <div>
                        <div onClick={prevImg}>{prevBtn}</div>
                        <div onClick={nextImg}>{nextBtn}</div>
                    </div>
                    )
                }
                
                {logement.length > 1 && (
                    <p>{`${activeIndex + 1} / ${logement.length}`}</p>
                    )
                }  

            </div>
        </div>
    );    
    }

export default Gallery;