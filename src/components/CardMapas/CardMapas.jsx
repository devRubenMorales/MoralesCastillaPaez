import React from 'react'
import "./CardMapas.css"


export const CardMapas = ({data}) => {
  return (
    <div className="cardmapa-container">
    <div className="cardmapa-button">
      <h2>{data.displayName}</h2>
      <img src={data.displayIcon} alt={data.displayName} />
    </div>
  </div>
  )
}
