import React, {useEffect, useState} from 'react'
import { GetAgents } from '../../api'
import Navbar from '../../components/Navbar/Navbar';

export const Agents = () => {

    const[agentes, setAgentes] = useState([])

    useEffect( ()=> {
        const fetchData = async() => {
            try {
                const data = await GetAgents();
                setAgentes(data);
            } catch (error) {
                console.error('error en traer datos de api', error);
            }
        };
        fetchData();
        
    },[]);
    console.log("PJ: " ,agentes);
    
    return (
        <>
        <Navbar/>

        <div>
            <h1>Agentes</h1>
            <ul>
                {agentes.map((agente, index) => (
                    <li key={index}>
                        <strong>Nombre:</strong> {agente.displayName}<br />
                        <img src={agente.displayIcon} alt={`Imagen de ${agente.displayName}`} />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );

}
export default Agents