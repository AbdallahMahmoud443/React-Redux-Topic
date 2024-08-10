import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    timeout: 1000,
  });

  export default axiosInstance;