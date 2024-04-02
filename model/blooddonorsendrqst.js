import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";

const donorsendrqstSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    hospitalId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
   
   date:{
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
export const donorsendrqst = model('donorsendrqst',donorsendrqstSchema) 