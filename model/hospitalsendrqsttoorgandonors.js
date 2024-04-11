import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";
import organdonor from "./organdonors.js";


const hossendrequesttoorgandonorsSchema=Schema({
    hospitalId:{
        type:mongoose.Types.ObjectId,
        ref:user

    },
    organdonorId:{
        type:mongoose.Types.ObjectId,
        ref:organdonor
        
    },
    patientname:{
        type:String,
    },
    age:{
        type:Number,
    },
    housename:{
        type:String,
    },
    postoffice:{
        type:String,
    },
    pin:{
        type:Number,
    },
    place:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:String,
    },
    healthcertificate:{
        type:String,
    },
    bloodgroup:{
        type:String,
    },
    organ:{
        type:String,
    },
    patientidproof:{
        type:String,
    },
    doctdername:{
        type:String,
    },
    prescription:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:"pending"
    }


})
export const hossendrequesttoorgandonor = model('hossendrequesttoorgandonor',hossendrequesttoorgandonorsSchema)