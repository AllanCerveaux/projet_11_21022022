import React from "react";
import { useNavigate } from 'react-router-dom';

export default function LodgingsToLodging({ lodgings }) {
  const navigate = useNavigate()
  const navigateToLodgingById = (id) => () => navigate(`/lodging/${id}`)
  
  return (
    <section className='lodgings'>
      {
        lodgings?.map(l => (
          <a className='card' href={`/lodging/${l.id}`} style={{backgroundImage: `url(${l.cover})`}} key={`lodging-${l.id}`}>
            <h2 className='card-title'>{l.title}</h2>
          </a>
        )) || null
      }
    </section>
  )
}
