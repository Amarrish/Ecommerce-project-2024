import mongoose from 'mongoose'

const UserSchema  = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:'CUSTOMER'
    },
    phone:{
        type:String,
    },
    address:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'addresses'
    }
    ],
    payment:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'payment_information'
    }
    ],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'ratings'
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'reviews'
        }
    ],
    created:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model('users',UserSchema)
export default User