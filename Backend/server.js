import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors';


dotenv.config();
connectDB();
const app=express();

app.use(cors(
    {
        origin: 'http://localhost:5173', 
        credentials: true, 
    }
));

app.use(express.json())
app.use("/api/auth",authRoutes);

app.get('/',(req,res)=>{
    res.send("Server is running yes we dit it");
})


const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});