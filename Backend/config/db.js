import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("mongodb connection error:", error.message);

    }
}

export default connectDB;