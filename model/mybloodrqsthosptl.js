import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";

const mybloodhosptlSchema=new Schema({
    hospitalId:{
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
        default:"pending"
    },
})
export const mybloodhosptl = model('mybloodhos',mybloodhosptlSchema)