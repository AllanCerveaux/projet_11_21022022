import React from "react";
import { Link } from "react-router-dom";

export default function Errors(){
    return (
      <section className="error">
        <h1>404</h1>
        <p>La page que vous demandez n'existe pas</p>
        <Link to="">Retourner sur la page d'acceuil</Link>
      </section>
    )
}

 