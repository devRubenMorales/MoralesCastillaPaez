import axios from "axios";

const instance = axios.create({
    baseURL:'https://valorant-api.com/v1'
})

export const GetAgents = async() => {

    const url = '/agents' ;
    const response = await instance.get(url);
    console.log("RESPUESTA 1: " ,response.data.data);
    return response.data.data

}