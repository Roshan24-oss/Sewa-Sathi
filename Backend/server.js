import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();
connectDB();
const app=express();

app.get('/',(req,res)=>{
    res.send("Server is running yes we dit it");
})


const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});