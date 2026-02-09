import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        requied:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["customer","provider"],
        required:true,
    },
    services:{
        type:String,
    },
},{timestamps:true})

export default mongoose.model("User", userSchema)


















