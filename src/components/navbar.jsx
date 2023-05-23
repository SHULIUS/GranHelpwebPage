import React from 'react';
import img from '../img/GRANHELP-LOGO.png';
import { Link } from 'react-router-dom';
import { app } from '../firebase/auth.js';

export default function Navbar() {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={img} alt="" className="navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CMMI
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="dropdown-item">
                  <Link to="/InicioCMMI">Inicio</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/planeacion">Planeación</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/construccion">Construcción</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/seguimiento-control">Seguimiento y Control</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/proveedores">Proveedores</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/toma-decisiones">Toma Formal de Decisiones</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/facturacion">Facturación</Link>
                </div>
                <div className="dropdown-item">
                  <Link to="/cierre">Cierre</Link>
                </div>
              </div>
            </li>

          </ul>
          <div className="ml-auto">
            <button
              className="btn btn-light"
              id="LogOutButton"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
