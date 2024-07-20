import mongoose from 'mongoose'

const CartSchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users',
        required:true
    },
    cartitems:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cartitems',
        required:true
    },
    totalprice:{
        type:Number,
        required:true,
        default:0
    },
    totalitem:{
        type:Number,
        required:true,
        default:0
    },
    totaldiscountprice:{
        type:Number,
        required:true,
        default:0
    },
    discounts:{
        type:Number,
        required:true,
        default:0
    }
})

const Cart = mongoose.model('cart',CartSchema)
export default Cart