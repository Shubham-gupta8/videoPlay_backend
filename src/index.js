import dotenv from 'dotenv';
dotenv.config({path: './.env' });

console.log(process.env.MONGODB_URI);

import connectDB from './db/index.js';

connectDB()











// import dotenv from 'dotenv';
// dotenv.config({path: './.env'});


// import mongoose from "mongoose";
// import { db_name } from "./constants.js";

// import express, { application } from "express";
// const app = express()

// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
//         console.log("Connected to MongoDB");

//         app.on("error",(error)=>{
//             console.error("Error: ",error);
//             throw(error)
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listning on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: ",error)
//         throw error
//     }
// })()


