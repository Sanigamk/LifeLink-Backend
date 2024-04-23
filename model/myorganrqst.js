import mongoose, { Schema,model } from "mongoose";
import  user  from "./user.js";
import { addorgan } from "./addorgan.js";
import organdonor from "./organdonors.js";

const myorganrqstSchema=Schema({
    userId:{
       type:mongoose.Types.ObjectId,
       ref:user,
    },
    AcceptedId:{
        type:mongoose.Types.ObjectId,
        ref:user,
    },
    organ:{
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
    address:{
        type:String,
        required:true
    },
    healthcertificate:{
        type:String,
        required:true
    },
    adhaarnumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    patientidproof:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    
    
    bloodgroup:{
        type:String,
        required:true
    },
    doctername:{
        type:String,
        required:true
    },
    prescription:{
        type:String,
        required:true
    },
    bystander:{
        type:String,
        required:true
    },
    bystandercontact:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    
    status:{
        type:String,
        default:'pending'
    },
    donorId:{
        type:mongoose.Types.ObjectId,
        ref:organdonor
    }
})
export const myorganrqst = model('myorganrqst',myorganrqstSchema)