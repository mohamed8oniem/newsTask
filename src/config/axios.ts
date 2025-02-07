import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'X-API-Key': apiKey,
  },
});

export default axiosInstance;
