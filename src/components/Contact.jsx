import React from 'react'
import img from '../img/yulius.jpg'
import img2 from '../img/sebas.jpg'
import img3 from '../img/timmy.jpg'

export default function Contact() {
  return (

    <div>
    <h1 class="contact-title">Contactos</h1>
    <div class="section-container">
      <div class="column">
        <img class="photo" src={img} alt="Foto 1" />
        <h3 class="title">Julian Rodriguez Olaya</h3>
        <p class="description">(PM Líder del proyecto)</p>
        <p class="contact-info">Teléfono: <span class="phone">+57 305 2326575</span></p>
        <p class="contact-info">Correo electrónico: <span class="email">julian.rodriguezol@amigo.edu.co</span></p>
      </div>
      <div class="column">
        <img class="photo" src={img2} alt="Foto 2" />
        <h3 class="title">Sebastian Guzman Morales</h3>
        <p class="description">(Product Owner)</p>
        <p class="contact-info">Teléfono: <span class="phone">+57 305 4463201</span></p>
        <p class="contact-info">Correo electrónico: <span class="email">sebastian.guzmanmo@amigo.edu.co</span></p>
      </div>
      <div class="column">
        <img class="photo" src={img3} alt="Foto 3" />
        <h3 class="title">Juan Esteban Paja Montoya</h3>
        <p class="description">(Scrum Master)</p>
        <p class="contact-info">Teléfono: <span class="phone">+57 301 4466680</span></p>
        <p class="contact-info">Correo electrónico: <span class="email">juan.pajapa@amigo.edu.co</span></p>
      </div>
    </div>
  </div>
  


  )
}
