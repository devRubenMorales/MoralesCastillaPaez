import React, { useState } from 'react'
import { ModalAgente } from './ModalAgente/ModalAgente'
import './CardAgentes.css'

export const CardAgentes = ({data}) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal){
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <div className="cardagente-container" onClick={toggleModal}>
        <img src={data.displayIcon} alt={data.displayName} />
        <h2>{data.displayName}</h2>
    </div>
      {modal && <ModalAgente data={data} toggleModal={toggleModal}/>}
    </>
  )
}