import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from '../components/Accordion';
import Gallery from '../components/Gallery';
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
    const detailDefault = {
      description: {status: true, id: 'description'},
      equipments: {status: true, id: 'equipments'}
    }
    const [detailData, setDetailData] = useState(detailDefault);
  
    const handleClick = (id) => {
      setDetailData({
        ...detailDefault,
        [id]: {...detailData[id], status: !detailData[id].status}
      })
    }
  
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
        <Gallery lodging={ lodging }/>
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
            handleClick={handleClick}
            id={detailData.description.id}
            status={detailData.description.status}
            title="Description"
            content={lodging.description}
          />
          <Accordion
            handleClick={handleClick}
            id={detailData.equipments.id}
            status={detailData.equipments.status}
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
