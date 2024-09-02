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
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>

      {logement.tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}
      <div>
        <div>{logement.rating}</div>
        <div>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture}/>
        </div>
      </div>
      


      <Collapse title="Description" content={logement.description}/>     
      <Collapse title="Équipements" content={logement.equipments}/>

    </div>
    
  );
}

export default FicheLogement;
