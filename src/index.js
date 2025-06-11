import dotenv from 'dotenv';
dotenv.config({path: './.env' });

console.log(process.env.MONGODB_URI);

import connectDB from './db/index.js';

// Error event listener any wher if error occur app.emit(error) is given and now app.on will handle that error 
// basically it is great for production as it keep the error handling centralized but not good for dubugging
app.on('error', (error) => {
    console.error("An error occurred before server startup:", error);
    // You may also exit the process if needed:
    process.exit(1);
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("database connection error : ", error)
})











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


