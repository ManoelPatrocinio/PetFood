import axios from 'axios'
require("dotenv").config(); //para poder ler as variaveis do .env

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export default api;