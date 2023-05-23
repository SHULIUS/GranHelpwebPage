import React from 'react'

export default function seguimientocontrol() {
  return (
    <div className="container">
    <h1 className="title">Seguimiento y Control</h1>
    <div className="iframe-wrapper">
    <h2 className="title2">Matriz de responsabilidades</h2>
      <iframe
        className="iframe"
        src="https://docs.google.com/spreadsheets/d/1X7evztgN4jGiM9FspSaXKH8iagvLPKc7k4b6LfEh_Z8/edit#gid=0"
        title="Enlace"
      />
    </div>
    <div className="iframe-wrapper">
    <h2 className="title2">Estimación y presupuesto detallado</h2>
      <iframe
        className="iframe"
        src="https://docs.google.com/spreadsheets/d/1xGgRhaBzGDH62Oe8DGvaBxMIcwV0afhOTnOuFd63kRE/edit#gid=380871640"
        title="Enlace"
      />
    </div>
    <div className="iframe-wrapper">
    <h2 className="title2">Cronograma detallado</h2>
      <iframe
        className="iframe"
        src="https://docs.google.com/spreadsheets/d/1vq477MM8TGvjYmrfNk2ovY5GXOVhW8L2ITY7PbRKQ0Q/edit#gid=87224258"
        title="Enlace"
      />
    </div>
    </div>
  )
}
