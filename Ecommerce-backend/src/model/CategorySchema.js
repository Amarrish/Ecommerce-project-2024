import mongoose from 'mongoose'

const CategorySchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    parentcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories',
    },
    level:{
        type:Number,
        required:true,
    }
})

const Category = mongoose.model('categories',CategorySchema)
export default Category

//men
//cloth
//kutra