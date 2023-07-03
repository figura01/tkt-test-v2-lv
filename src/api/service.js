import axios from 'axios';

export const service = axios.create({
  baseURL: 'https://test.wertkt.com/api/',
  withCredentials: false
});

export const getAll = async (endPoint) => {
  try {
    const { data, status } = await service.get(endPoint);
    if(status === 200)
    return { data, status }
    
  } catch(error){
    return error
  } 
}

export const getOne = async (endPoint) => {
  try {
    const data = await service.get(endPoint);
    if(data) {
      return data
    }
  } catch(error){

    return error
  } 
}


export default {
  service,
  getOne,
  getAll,
}


