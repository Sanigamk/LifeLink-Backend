import {Schema,model} from "mongoose";

const userSchema=Schema({
    name:{
        type:String,
    },
    age:{
        type:String,
    },
    place:{
        type:String,
    },
    district:{
        type:String,
    },
    contact:{
        type:Number,
    },
    liscence:{
        type:Number,
    },
    proof:{
        type:String,
    },
    conformationCertificate:{
        type:String,
    },
    email:{
        type:String,
        
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
    hospitalname:{
        type:String,
    },
    collegename:{
        type:String,
    },
    bloodgroup:{
        type:String,
    },
    height:{
        type:String,
    },
    weight:{
        type:Number,
    },
    healthcertificate:{
        type:String,
    },
    certificate:{
        type:String,
    },
    password:{
        type:String,
       
    },
    conformpassword:{
        type:String,
    },
    userType:{
        type:String,
       
    },
    status:{
        type:String,
        default:"pending"
    },
})
const user = model('user',userSchema)
export default user