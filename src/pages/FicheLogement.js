// src/components/FicheLogement.js
import React, {useEffect} from 'react';
import logements from '../data/logements.json';
import { useParams , useNavigate } from 'react-router-dom';
import './FicheLogement.scss';
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
      <div className="gallerie">
        <Gallery logement={logement.pictures} />     
      </div>
      <h2 className='logement__title'>{logement.title}</h2>
      <p className='logement__loc'>{logement.location}</p>

      {logement.tags.map(tag => (
        <div className='logement__tag' key={tag}>{tag}</div>
      ))}
      <div className='logement__review'>
        <div className='logement__rating'>{logement.rating}</div>
        <div className='logement__host'>
          <p className='logement__host__name'>{logement.host.name}</p>
          <img className='logement__host__img' src={logement.host.picture}/>
        </div>
      </div>
      

      <div className='logement_collapse'></div>
      <Collapse title="Description" content={logement.description}/>     
      <Collapse title="Équipements" content={logement.equipments}/>

    </div>
    
  );
}

export default FicheLogement;
