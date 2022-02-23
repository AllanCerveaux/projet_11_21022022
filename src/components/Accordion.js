import React from "react";

export default function Accordion({status, content, title, handleClick, id}){

    const trigger = () => handleClick(id);
    const arrow = () => status ? (<span className='accordion-hearder--icon'>&and;</span>) : (<span className='accordion-hearder--icon'>&or;</span>)

    return (
      <article className='accordion'>
        <div className='accordion-header' onClick={trigger}>
          <h2>{title}</h2>
          {arrow()}
        </div>
        <div className={`accordion-body ${[!status && "hidden" ]}`}>
          {content}
        </div>
      </article>
    )
}
