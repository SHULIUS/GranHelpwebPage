import React from 'react';
import { app } from '../firebase/auth.js';
import img from '../img/GRANHELP-LOGO.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(props) {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const iniciarSesion = (correo, password) => {
    app.auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        props.setUsuario(usuarioFirebase);
        toast.success('Inicio de sesión exitoso');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const crearUsuario = (correo, password) => {
    app.auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        props.setUsuario(usuarioFirebase);
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }
    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="image-container">
          <img src={img} alt="Imagen" className="login-image" />
        </div>
        <div className="login-container">
          <form onSubmit={SubmitHandler}>
            <h1 className="login-title">{isRegistrando ? 'Registrate' : 'Iniciar sesión'}</h1>
            <div className="input-container">
              <input
                className="input-field"
                type="text"
                placeholder="email@amigo.edu.co"
                id="emailField"
                title="Debe hacer uso de  correo universitario"
              />
              <input
                className="input-field"
                type="password"
                placeholder="password"
                id="passwordField"
                title="Contraseña mínima de 6 dígitos"
              />
            </div>
            <button type="submit" className="login-button">
              {isRegistrando ? 'regístrese' : 'conectarse'}
            </button>
          </form>
          <button onClick={() => setIsRegistrando(!isRegistrando)} className="register-button">
            {isRegistrando ? '¿tiene una cuenta? inicie sesión' : '¿No tienes cuenta? Crea una gratis '}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
