import React from 'react'
import { useEffect } from 'react'

import { app } from "../firebase/auth.js"
import Inicio from './Inicio.jsx'
import Login from './Login.jsx'


export default function App() {
  const [usuario, setUsuario] = React.useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    })
  }, []);
  return (
    <div>
      {usuario ? <Inicio/> : <Login setUsuario={setUsuario} />}
      
    </div>
    

  )
}
