import React from "react";

export default function LodgingsToLodging({ lodgings }) {
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
