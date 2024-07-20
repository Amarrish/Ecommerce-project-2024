import Userservice from "../service.js/Userservice";
import Jwtprovider from "../config/Jwtprovider";

const register =async(req,res)=>{

   try {
    const user = await Userservice.usercreate(req.body);
    const jwt = Jwtprovider.generatetoken(user._id)

    // await cartService.createCart(user);
    return res.status(200).send({jwt,message:"Registration Successfully"})
   } catch (error) {
    return res.status(500).send({error:error.message})
   }
}

const login = async(req,res)=>{
    const {password,email} = req.body;
    try {
        const user = await Userservice.getuserbyemailId(email)

        if(!user) return res.status(404).send({message:'user not found email:', email});

        const Isvalidpassword = await bcrypt.compare(password,user.password)

        if(!Isvalidpassword) return res.status(403).send({message:'Invalid Password...'})

        const jwt = Jwtprovider.generatetoken(user._id);
        return res.status(200).send({jwt,message:'Login Success...'});    
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export default {register,login}