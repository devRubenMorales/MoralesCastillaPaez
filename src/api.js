import axios from "axios";

const instance = axios.create({
    baseURL:'https://valorant-api.com/v1'
})

export const GetAgents = async() => {

    const url = '/agents' ;
    const response = await instance.get(url);
    return response.data.data

}

export const GetMaps = async () => {
    const url = "/maps" 
    const response = await instance.get(url);
    return response.data.data;
}