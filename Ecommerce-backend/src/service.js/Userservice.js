import User from '../model/Userschema.js'
import Jwtprovider from '../config/Jwtprovider.js';

const usercreate = async(userdata)=>{

    try {
        const {firstname,lastname,email,password} = userdata;
    const existinguser = await User.findOne({email});
    if(existinguser) throw new Error("This account is already exist",email);

    password = await bcrypt.hash(password,8)

    const user = await User.create({firstname,lastname,email,password})

    console.log('created user', user);

    return user;
    } catch (error) {
        throw new Error(error.message)
    }
}


const finduserbyId = async(userId)=>{

    try {
        const user = await User.findById(userId).populate('address')

        if(!user) throw new Error('User not found with this Id :',userId)

        return user
    } catch (error) {
        throw new Error(error.message)
    }
} 

const getuserbyemailId = async(email)=>{

    try {
        const user = await User.findById({email})

        if(!user) throw new Error('User not found with this email :',email)

        return user
    } catch (error) {
        throw new Error(error.message)
    }
} 

const getuserbyprofileId = async(token)=>{

    try {
        const userId  = Jwtprovider.getuserIdfromToken(token)
        const user  = await finduserbyId(userId)
        if(!user) throw new Error('User not found with this Id :',userId)

    } catch (error) {
        throw new Error(error.message)
    }
} 

const getallusers =async()=>{
    try {
        const user = await User.find();
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}


export default {usercreate,finduserbyId,getuserbyemailId,getuserbyprofileId,getallusers}