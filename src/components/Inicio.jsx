import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './navbar.jsx'
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './footer.jsx';
import InicioCMMI from './InicioCMMI.jsx';
import Planeacion from './Planeacion.jsx';
import Construccion from './Construccion.jsx';
import Seguimientocontrol from './seguimiento-control.jsx';
import Proveedores from './Proveedores.jsx'
import Tomadecisiones from './toma-decisiones.jsx'
import Facturacion from './Facturacion.jsx';
import Cierre from './Cierre.jsx';



export default function Inicio() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/InicioCMMI" element={<InicioCMMI />} />
          <Route path="/Planeacion" element={<Planeacion />} />
          <Route path="/Construccion" element={<Construccion />} />
          <Route path="/seguimiento-control" element={<Seguimientocontrol />} />
          <Route path="/Proveedores" element={<Proveedores />} />
          <Route path="/toma-decisiones" element={<Tomadecisiones />} />
          <Route path="/facturacion" element={<Facturacion />} />
          <Route path="/Cierre" element={<Cierre />} />
        

        </Routes>

      </BrowserRouter>
      <Footer/>

    </div>
  )
}
