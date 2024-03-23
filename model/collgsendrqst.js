import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";

const collgsendrqstSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    
    hospitalname:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    hospital:{
        type:String,
        required:true
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
        type:String
    }
})
export const collgsendreqst = model('collgsendrqst',collgsendrqstSchema)