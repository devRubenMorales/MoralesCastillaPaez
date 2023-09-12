import React, {useEffect, useState} from 'react'
import { GetMaps } from '../../api'
import Navbar from '../../components/Navbar/Navbar';
import { CardMapas } from '../../components/CardMapas/CardMapas';
import "./Maps.css"

export const Maps = () => {

  const[mapas, setMapas] = useState([])
  useEffect( ()=> {
    const fetchData = async() => {
        try {
            const data = await GetMaps();
            setMapas(data);
        } catch (error) {
            console.error('error en traer datos de api', error);
        }
    };
    fetchData();
    
},[]);
console.log("MAPAS: " ,mapas);

  return (
    <>
    <Navbar />
      <div className='mapas-page'>
        <h1>Mapas</h1>
        <div className='mapas-container'>
          {mapas.filter((mapas) => {
              return mapas.uuid != "ee613ee9-28b7-4beb-9666-08db13bb2244"
          }).map((mapas) => (
              <CardMapas key={mapas.uuid} data={mapas} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Maps