import React, { useState } from "react";
import Accordion from "../components/Accordion";

const accordeonDefault = {
  fiability: { status: false, title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.", id:"fiability"},
  respect: { status: false, title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.", id:"respect"},
  service: { status: false, title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.", id:"service"},
  responsibility: { status: false, title: "responsabilité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.", id:"responsibility"},
}

export default function About(){
    const [aboutData, setAboutData] = useState(accordeonDefault);

    const handleClick = (id) => {
        setAboutData({
            ...accordeonDefault,
            [id]: {
                ...aboutData[id],
                status: !aboutData[id].status
            }
        });
    }

  return (
      <section className='about'>
        <img className='hero-image' src='./images/about.png' alt='' />
        <Accordion 
            handleClick={handleClick}
            id={aboutData.fiability.id}
            status={aboutData.fiability.status}
            title={aboutData.fiability.title}
            content={aboutData.fiability.content}
        />
        <Accordion 
            handleClick={handleClick}
            id={aboutData.respect.id}
            status={aboutData.respect.status}
            title={aboutData.respect.title}
            content={aboutData.respect.content} 
        />
        <Accordion 
            handleClick={handleClick}
            id={aboutData.service.id}
            status={aboutData.service.status}
            title={aboutData.service.title}
            content={aboutData.service.content} 
        />
        <Accordion 
            handleClick={handleClick}
            id={aboutData.responsibility.id}
            status={aboutData.responsibility.status}
            title={aboutData.responsibility.title}
            content={aboutData.responsibility.content} 
        />
      </section>
    )
}

 