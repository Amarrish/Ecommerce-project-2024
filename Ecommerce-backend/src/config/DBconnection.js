import mongoose from 'mongoose'

const DATABASE = 'mongodb+srv://amarrishms732:mern@cluster0.5ofua26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const conndectDB =()=>{
    return mongoose.connect(DATABASE)
}

export default conndectDB