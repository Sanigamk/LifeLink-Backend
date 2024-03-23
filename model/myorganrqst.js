import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";

const myorganrqstSchema=Schema({
    userId:{
       type:mongoose.Types.ObjectId,
       ref:user,
    },
    organ:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    patientname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    healthcertificate:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    status:{
        type:String
    }
})
export const myorganrqst = model('myorganrqst',myorganrqstSchema)