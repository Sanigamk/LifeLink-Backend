import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";

const usersendrqstSchema=Schema({
    userId:{
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
    bloodunit:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
})
export const usersendrqst = model('usersendrqst',usersendrqstSchema)