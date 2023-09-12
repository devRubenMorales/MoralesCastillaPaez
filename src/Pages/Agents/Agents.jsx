import React, {useEffect, useState} from 'react'
import { GetAgents } from '../../api'
import Navbar from '../../components/Navbar/Navbar';
import { CardAgentes } from '../../components/CardAgentes/CardAgentes';
import './Agents.css'

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

        <div className='agentes-page'>
            <div className='agentes-container'>
                {agentes.filter((agentes) => {
                    return agentes.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9"
                }).map((agentes) => (
                    <CardAgentes key={agentes.uuid} data={agentes} />
                ))}
            </div>
        </div>
        </>
    );

}
export default Agents