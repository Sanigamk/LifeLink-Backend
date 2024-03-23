import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";

const mybloodhosptlSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    bloodunit:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    status:{
        type:String,
    },
})
export const mybloodhosptl = model('mybloodhos',mybloodhosptlSchema)