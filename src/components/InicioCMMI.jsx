import React from 'react';
import Foda from '../img/FODA.jpg'

export default function InicioCMMI() {
  return (
    <div className="container">
      <h1 className="title">Inicio</h1>
      <div className="iframe-wrapper">
      <h2 className="title2">Matriz de competencias</h2>
        <iframe
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/1NJ-6viNDq6XlLUqtq2fpO7uM0GfVhP7F/edit#gid=2038572105"
          title="Enlace"
        />
      </div>
      <div className="iframe-wrapper">
      <h2 className="title2">Estimación y presupuesto de alto nivel</h2>
        <iframe
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/1Zscz4T9KjNpOLKaGGv-g0PMdUYW3VV6DkPLTibpZcpM/edit#gid=0"
          title="Enlace"
        />
      </div>
      <div className="iframe-wrapper">
      <h2 className="title2">Cronograma de alto nivel Nuevo </h2>
        <iframe
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/1nwCnuDiUEpttIdmCHoYAY4MCNS05rEFRosumVXKXJiA/edit#gid=0"
          title="Enlace"
        />
      </div>
      <h2 className="title2">FODA</h2>
      <img className="image" src={Foda} alt="" />
    </div>

  );
}
