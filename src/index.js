// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose, { connect, mongo } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

// const connectDB = async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log('\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}');
        
//     }catch (error) {
//         console.log("MONGODB connection error", error);
//         process.exit(1)
//     }
// }

// export default connectDB

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on pirt : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed", err);
    
})











// approcah 1
// import express from 'express'

// const app = express()
// // function connectDB(){}

// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERR: ", error);
//             throw error
//         })
        
//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     }
//     catch(error){
//         console.error("ERROR: ", error)
//         throw err
        
//     }
// })

// // ; safety measure