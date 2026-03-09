import { io } from "socket.io-client";


const SOCKET_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8000" 
    : "https://sewa-sathi-backend-jxrg.onrender.com"; 

const socket = io(SOCKET_URL, {
  withCredentials: true,
});

export default socket;