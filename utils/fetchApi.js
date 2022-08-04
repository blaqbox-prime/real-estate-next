import axios from "axios";

const HEADERS = {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'f070684b50msha7e21e753af4907p1ed9f9jsn34c40e177884'
  };

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'f070684b50msha7e21e753af4907p1ed9f9jsn34c40e177884'
  }});
  return data;
}