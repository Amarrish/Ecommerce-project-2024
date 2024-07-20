import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountsprice:{
        type:Number,
        required:true
    },
    discountspercent:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    color:{
        type:String
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageurl:{
        type:String
    },
    rating:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'ratings'
    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'reviews'
    }],
    numratings:{
        type: Number,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'reviews'
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Product = mongoose.model('products',ProductSchema)
export default Product