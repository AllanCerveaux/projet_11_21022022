import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from '../components/Accordion';
import Rating from '../components/Rating';
import { IdGenerator } from '../lib/IdGenerator';
import lodgings from '../lodgings.json';
import Errors from "./Errors";

const findLodging = (lodgingID) => {
    return lodgings.find(lodging => lodging.id === lodgingID);
}

export default function Lodging(){
    const { id } = useParams();
    const [onLoad, setOnload] = useState(true);
    const [lodging, setLodging] = useState(null);
  
    useEffect(() => {
      let lodging = findLodging(id);
      
      setLodging(lodging);
      setOnload(false);
    }, [])

    if(onLoad){
      return <div>im spiner</div>
    }

    if(!lodging && !onLoad){
      return <Errors />
    }

    return (
      <section className="logding">
        <img className="lodging-cover" src={lodging.cover} alt='' />
        <div className='lodging-header'>
          <div className='lodging-header--left'>
            <h1 className='lodging-header--title'>{ lodging.title }</h1>
            <span className='lodging-header--location'>{lodging.location}</span>
            <div className='lodging-header--tags'>
              { lodging?.tags.map(t => (<span className='tag' key={IdGenerator()}>{t}</span>)) || null }
            </div>
          </div>
          <div className='lodging-header--right'>
            <div className='user-profile'>
              <span>{ lodging.host.name }</span>
              <img src={lodging.host.picture} alt='' />
            </div>
            <div className='tags'>
              {
                [...new Array(5)]
                  .map((elm, i) => {
                    return (<Rating key={IdGenerator()} isActive={i+1 <= lodging.rating} />)
                  })
              }
            </div>
          </div>
        </div>
        <div className='lodging-body'>
          <Accordion 
            id="Description"
            status={true}
            title="Description"
            content={lodging.description}
          />
          <Accordion
            className="list-content"
            id="Equipment"
            status={true}
            title="Équipement"
            content={
              lodging.equipments
                .map(e => (<span key={IdGenerator()} className='item'>{e}</span>))
            }
          />
        </div>
      </section>  
    )
}
