import React from 'react'

export default function Planeación() {
  return (
    <div>
      <div className="container">
      <h1 className="title">Planeacion</h1>
      <div className="iframe-wrapper">
      <h2 className="title2">Metodologia</h2>
        <iframe
          className="iframe"
          src="https://docs.google.com/document/d/1rS2OvDwz_tBh43Si0KorRdu7asD0r3rWb_vc-ij8CsI/edit#heading=h.3znysh7"
          title="Enlace"
        />
      </div>
      <div className="iframe-wrapper">
      <h2 className="title2">Matriz de Riesgo</h2>
        <iframe
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/1WGATnwkgGFelzH4CFuzjkMNiMOtlLfdcpx1zLRFtxRM/edit#gid=0"
          title="Enlace"
        />
      </div>
     </div>
    </div>
  )
}
