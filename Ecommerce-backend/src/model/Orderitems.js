import mongoose from "mongoose";
import { Schema } from "mongoose";

const Orderitemschema = new Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountsprice:{
        type:Number,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    deliverydate:{
        type:Date,
    }
})

const Orderitem = mongoose.model('orderitems',Orderitemschema)
export default Orderitem