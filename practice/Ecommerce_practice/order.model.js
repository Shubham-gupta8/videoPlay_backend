import mongoose, { Schema } from "mongoose"

const orderDetailSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        Quantity: {
             type: Number,
             required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref : true,
            required  :true
        },
        orderPrice: {
             type: Number,
             required: true
        },
        orderDetails: {
             type: [orderDetailSchema],
             required: true
        },
        status:{
            type: String,
            enum: ["pending","delivered","cancelled"],
            default: pending
        }
    },{timestamps:true}

)

export const Order = mongoose.model("Order",orderSchema)


/*

orderDetails mai mujhe product toh chahiye hi tha pr sath mai quatity bhi chahiye thi
iske liye ab mai productSchema ko toh change kruga nhi toh nya schema bna leta hu 
or iss schma ki jrurat baki files mai nhi h toh ismai locally bna ke use kr leta hu

restricted choices ke liye enum use kra h


*/ 