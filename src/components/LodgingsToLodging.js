import React from "react";
import { useNavigate } from 'react-router-dom';

export default function LodgingsToLodging({ lodgings }) {
  const navigate = useNavigate()
  const navigateToLodgingById = (id) => () => navigate(`/lodging/${id}`)
  
  return (
    <section className='logdings'>
      {
        lodgings?.map(l => (
          <article className='card' style={{background: `url(${l.cover})`}} onClick={navigateToLodgingById(l.id)} key={`lodging-${l.id}`}>
            <h2 className='card-title'>{l.title}</h2>
          </article>
        )) || null
      }
    </section>
  )
}
