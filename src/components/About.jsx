import React from 'react'
import img from '../img/IMAGEN1.jpg'



export default function About() {
  return (
    <div className="granhelp-container">
      <div className="granhelp-images">
        <img src={img} alt="GranHelpimg1" />
      </div>
      <h1 className="granhelp-title">GranHelp</h1>
      <p className="granhelp-description">
        GranHelp es una aplicación móvil diseñada para ayudar a los ancianos en diversas tareas de su dispositivo movil.
      </p>
      <div className="granhelp-aspects">
        <div className="aspect-column">
          <h2 className="aspect-title">Aspectos Positivos</h2>
          <ul className="aspect-list">
            <li>Facilita el acceso a servicios médicos</li>
            <li>Ofrece acompañamiento emocional</li>
            <li>Brinda asistencia en tareas domésticas</li>
            <li>Promueve la interacción social</li>
          </ul>
        </div>
        <div className="aspect-column">
          <h2 className="aspect-title">Aspectos Negativos</h2>
          <ul className="aspect-list">
            <li>Dependencia de la tecnología</li>
            <li>Posible brecha generacional</li>
            <li>Limitaciones en la personalización</li>
            <li>Requiere acceso a internet</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
