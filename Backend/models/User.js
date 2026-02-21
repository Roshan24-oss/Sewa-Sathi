import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,   // ❗ also fix spelling (you wrote requied)
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
        enum:["Plumber","Electrician","Tutor","Carpenter","Doctor","Cleaner","Other"]
    },

    
    address:{
        type:String,
    },
    experience:{
        type:Number,
    },
    skills:{
        type:String,
    },
    availability:{
        type:String,
    },
    about:{
        type:String,
    }

},{timestamps:true})

export default mongoose.model("User", userSchema)
