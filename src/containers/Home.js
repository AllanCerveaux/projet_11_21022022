import React, { useEffect, useState } from "react";
import LodgingsToLodging from "../components/LodgingsToLodging";
import data from '../lodgings.json';


export default function Home(){
    const [lodgings, setLodgings] = useState(null);
    
    useEffect(() => {
        setLodgings(data);
    }, []);

    return (
      <>
        <section className='hero'>
          <h1 className='hero-title'>Chez vous, partour et ailleur</h1>
        </section>
        <LodgingsToLodging lodgings={lodgings} />
      </>
    )
}

 