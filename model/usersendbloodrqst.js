import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";

const usersendrqstSchema=Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    acceptedId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },  
    hospitalname:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        default:"pending"
    },
})
export const usersendrqst = model('usersendrqst',usersendrqstSchema)