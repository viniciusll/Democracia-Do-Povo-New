import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://democracia-do-povo.herokuapp.com/'
    baseURL: 'http://localhost:3001/'
  });

  api.interceptors.request.use(async config => {
    return config;
  });

export default api;