import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";


const mybloodcollgSchema=Schema({
    userId:{
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
    status:{
        type:String,

    },
    
})
export const mybloodcollg = model('mybloodcollg',mybloodcollgSchema)


