import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";


const mybloodcollgSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    collegeId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    bloodgroup:{
        type:String,
        required:true
    },
    students:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:"pending"
    },
    
})
export const mybloodcollg = model('mybloodcollg',mybloodcollgSchema)


