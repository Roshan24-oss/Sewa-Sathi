import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js"
import providerRoutes from "./routes/providerRoutes.js"
import cors from 'cors';
import cookieParser from 'cookie-parser';
import requestRoutes from './routes/requestRoutes.js';


dotenv.config();
connectDB();
const app=express();

app.use(cors(
    {
        origin: 'http://localhost:5173', 
        credentials: true, 
    }
));

app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/provider",providerRoutes);
app.use("/api/requests",requestRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running yes we dit it");
})


const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});