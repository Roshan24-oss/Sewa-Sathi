import mongoose from "mongoose";

const requestSchema =new mongoose.Schema({

    customerId:objectId,
    providerId:objectId,
    serviceType:String,
    date:Date,
    time:String,
    status:{
        type:String,
        enum:["pending","accepted","rejected"]
    }
},{timestamps:true})



export default mongoose.model("Request",requestSchema)