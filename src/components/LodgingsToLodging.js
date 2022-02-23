import React from "react";
import { useNavigate } from 'react-router-dom';

export default function LodgingsToLodging({ lodgings }) {
  const navigate = useNavigate()

  return (
    <section className='logdings'>
      {
        lodgings?.map(l => (
          <article className='card' onClick={() => navigate(`/lodging/${l.id}`)} key={`lodging-${l.id}`}>
            <h2 className='card-title'>{l?.title}</h2>
            <img className='card-image' src={l?.cover} alt={ `${l?.title} - ${l?.location}` }/>
          </article>
        )) || null
      }
    </section>
  )
}
