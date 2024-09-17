import React, {useEffect} from 'react';
import { useParams , useNavigate } from 'react-router-dom';

import './FicheLogement.scss';
import logements from '../data/logements.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Collapse from '../components/collapse/Collapse';
import Gallery from '../components/gallery/Gallery';



const FicheLogement = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find(item => item.id == id);

  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement">

      <div className="gallery">
        <Gallery logement={logement.pictures} />     
      </div>

      <div className='logement__content-flexbox'>

        <div className='logement__property-flexbox'>
          <h1 className='logement__title'>{logement.title}</h1>
          <p className='logement__loc'>{logement.location}</p>
          <div className='logement__tags'>
            {logement.tags.map(tag => (
              <div className='logement__tag' key={tag}>{tag}</div>
            ))}
          </div>
        </div>

        <div className='logement__review-flexbox'>
          <div className='logement__rating'>
            {Array(5).fill(0).map((_, i) => 
            (<FontAwesomeIcon 
              key={i} 
              icon={faStar} 
              className={i < logement.rating ? "star-red" : "star-grey"} 
            />)
            )}
          </div>
          <div className='logement__host'>
            <p className='logement__host__name'>{logement.host.name}</p>
            <img className='logement__host__img' src={logement.host.picture}/>
          </div>
        </div>

      </div>

      <div className='logement__collapse'>
        <Collapse title="Description" content={logement.description}/>     
        <Collapse title="Équipements" content={logement.equipments}/>
      </div>


    </div>
    
  );
}

export default FicheLogement;
