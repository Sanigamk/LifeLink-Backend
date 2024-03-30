import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";

const collgsendrqstSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    hospitalId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    
    campname:{
        type:String,
        required:true
    },
    discription:{
          type:String,
          required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
})
export const collgsendreqst = model('collgsendrqst',collgsendrqstSchema)