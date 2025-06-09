import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {

        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password: {
            type : String,
            required: true,
        },

        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }
    },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)