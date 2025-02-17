import mongoose from "mongoose";
import { Schema } from "mongoose";

const ReviewSchema = new Schema({
    review:{
        type: String,
        required:true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.model('reviews',ReviewSchema)
export default Review