import axios from 'axios'
require("dotenv").config(); //para poder ler as variaveis do .env
const api_url = process.env.REACT_APP_API;
const api = axios.create({
  baseURL: api_url,
});

export default api;