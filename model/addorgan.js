import { Schema,model } from "mongoose";

const organSchema= new Schema({
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
})
export const addorgan = model('addorgan',organSchema)