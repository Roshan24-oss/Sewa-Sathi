import {io} from 'socket.io-client';
const socket=io("https://sewa-sathi-backend-jxrg.onrender.com",{
    withCredentials:true,

});

export default socket;