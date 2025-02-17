import mongoose from "mongoose";
import { Schema } from "mongoose";

const RatingSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Rating = mongoose.model('ratings',RatingSchema)
export default Rating