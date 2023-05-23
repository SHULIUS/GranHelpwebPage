import React from 'react';
import { Carousel } from 'react-bootstrap';
import img3 from '../img/IMAGEN3.jpg'
import img2 from '../img/IMAGEN2.jpg'
import img from '../img/IMAGEN4.jpg'
export default function Home() {
  return (
   
     <div className="about-container">
     <div className="carousel-wrapper">
       <Carousel className="carousel-container">
         <Carousel.Item>
           <img
             className="carousel-image"
             src={img}
             alt="Imagen 1"
           />
           <Carousel.Caption className="carousel-caption">
             <h3>Login GRANHELP</h3>
             <p>interfaz del logeo para la aplicacion.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="carousel-image"
             src={img2}
             alt="Imagen 2"
           />
           <Carousel.Caption className="carousel-caption">
             <h3>Guias GRANHELP</h3>
             <p>Apartado de guias de la aplicacion GRANHELP.</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="carousel-image"
             src={img3}
             alt="Imagen 3"
           />
           <Carousel.Caption className="carousel-caption">
             <h3>Herramientas GRANHELP</h3>
             <p>Interfaz de las herramientas que favorece GRANHELP.</p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </div>
   </div>


  );
}
