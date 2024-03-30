import mongoose, { Schema,model } from "mongoose";
import user from "./user.js";

const organSchema= new Schema({
    hospitalId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    healthcertificate:{
        type:String,
        
    },
    pin:{
        type:Number,
        required:true
    },
    postoffice:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    conformationcertificate:{
        type:String,
        
    },
    organ:{
        type:String,
    },
    witnessname:{
        type:String,
        required:true
    },
    witnesscontact:{
        type:Number,
        required:true
    },
    housename:{
        type:String,
        required:true
    },
    
})
export const addorgan = model('addorgan',organSchema)