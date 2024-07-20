import mongoose from "mongoose";
import { Schema } from "mongoose";

const Orderschema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    orderitem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderitems'
    }],
    OrderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliverydate:{
        type:Date,
    },
    shippingaddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'addresses'
    },
    paymentdetails:{
        paymentmethod:{
            type:String
        },
        transactionId:{
            type:String
        },
        paymentid:{
            type:String
        },
        paymentstatus:{
            type:String,
            default:'PENDING'
        }
    },
    totalprice:{
        type:Number,
        required:true
    },
    totaldiscountprice:{
        type:Number,
        required:true,
    },
    discounts:{
        type:Number,
        required:true,
    },
    orderstatus:{
        type:String,
        required:true,
        default:'PENDING'
    },
    totalitem:{
        type:Number,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

const Order = mongoose.model('orders',Orderschema)
export default Order