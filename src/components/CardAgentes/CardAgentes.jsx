import React, { useState } from 'react'

export const CardAgentes = ({data}) => {

const[modal, setModal] = useState(false);

    const abrirModal = () => {
        setModal(!modal);
        console.log("MODAL: " , modal)
    };


    return (
        <div className='cardagente-container'>
            <div onClick={abrirModal} className='cardagente-button'>
                <h2>{data.displayName}</h2>
                
                
            </div>

            {modal ? (
    <div className='cardagente-container'>
        <div className='cardagente-button'>
            
            <img src={data.displayIcon} alt={data.displayName} />
            <span>{data.description} </span>
            <button onClick={abrirModal}>Cerrar</button>
        </div>
    </div>
) : null}

        </div>
        
    )
}