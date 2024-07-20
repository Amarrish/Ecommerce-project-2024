import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    streetaddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users'
    },
    mobile:{
        type:String,
        required:true
    }
})

const Address = mongoose.model('addresses',AddressSchema)
export default Address
