import mongoose from "mongoose";

const porductSchema = new mongoose.Schema(
    {
        productName : {
            type: String,
            required: true
        },
        productPrice:{
            type: Number,
            required: true,
            default: 0
        },
        category: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Category"
        },
        image: {
            type  :String
        },
        stock:{
            type: Number,
            default: 0
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps: true}
)

export const Product = mongoose.model("Product",porductSchema)


/*

storing images in database is not a good practice and it need a lot of processing 
instead we can use cloudinary aws to store image and can get a string that can be used to 
show images in the website

now for different image quality we can store image in multiple quality and then in type of 
image array can be used which will be used accordingly
*/