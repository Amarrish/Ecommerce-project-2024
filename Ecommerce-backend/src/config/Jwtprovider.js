import jwt from 'jsonwebtoken'

const SECRET_KEY = "Supersecretkey";

const generatetoken =(userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:'48h'})
    return token
}

const getuserIdfromToken = (token)=>{
    const decodetoken = jwt.sign(token,SECRET_KEY)
    return decodetoken.userId
}

export default {generatetoken,getuserIdfromToken}