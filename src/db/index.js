import mongoose from "mongoose";
import {db_name} from "../constants.js";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        console.log(db_name);
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
        
    }
}

export default connectDB;