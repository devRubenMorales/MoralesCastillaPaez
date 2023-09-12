import React from 'react'
import "./ModalAgente.css"

export const ModalAgente = ({data, toggleModal}) => {
  return (
        <div className='modal-container' onClick={toggleModal}>
             <div className="modal-content">
              <div className='modal-izquierda'>
                <div className="modal-image">
                  <img className='img-portrait' src={data.fullPortraitV2} alt={data.displayName} />
                  <img className='img-background' src={data.background} alt={data.displayName} />
                </div>
              </div>
              <div className='modal-derecha'>  
              <div className='h2-container'>
                <h1>{data.displayName}</h1>
              </div>
              <div className="modal-info">
                <img src={data.role.displayIcon} alt="" />
                  <h2>Habilidades:</h2>
                <div className='abilities-container'>
                    {data.abilities.map((habilidad, i) =>
                      <img key={i} src={habilidad.displayIcon} alt="" />
                    )}
                </div>
                <p>{data.description}</p>
              </div>
              </div>  
            </div> 
        </div>
  )
}

export default ModalAgente