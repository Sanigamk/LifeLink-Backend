import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";

const donorsendrqstSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
   district:{
    type:String,
    required:true
   },
   hospital:{
    type:String,
    required:true
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
    type:String
   },
})
export const donorsendrqst = model('donorsendrqst',donorsendrqstSchema) 