import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://sewa-sathi-backend-jxrg.onrender.com",
    withCredentials: true, 
});

export default axiosInstance;