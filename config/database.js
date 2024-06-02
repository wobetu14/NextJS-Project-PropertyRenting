import mongoose, { connect } from "mongoose";

let connected = false;

const connectDB= async()=>{
    mongoose.set('strictQuery', true);

    // Check the database is already connected and do not connect it again.

    if(connected){
        console.log("MongoDB is already conncted.")
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        connected=true;
        console.log("MongoDB connected successfully.")
    }
    catch (error){
        console.log("Connection error: "+error)
    }
}

export default connectDB;