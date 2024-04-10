import { mongoose, Schema } from "mongoose";
import user from "./user.js";

const organdonorSchema=Schema({

 hospitalId:{
        type:mongoose.Types.ObjectId,
        ref:user
    },

name:{
    type:String,
},
age:{
    type:Number
},
place:{
    type:String
},
Address:{
    type:String,
},  
adhaarnumber:{
    type:String,
},
conformationcerti:{
    type:String,
},
healthcerti:{
    type:String,
},
Bloodgroup:{
    type:String,
},
height:{
    type:String,
},
weight:{
    type:String,
},
healthissue:{
    type:String,
},
reasonofdeath:{
    type:String,
},
dateofbirth:{
    type:Date
},
dateofdeath:{
    type:Date
},
reasonofdeath:{
    type:String,
},
nominee:{
    type:String,
},
nomineecontact:{
      type:Number,
},
nomineerelation:{
    type:String,
},
password:{
    type:String,
},
Conformpassword:{
    type:String,
},
organ:[{
type:String
}],
status:{
    type:String,
    default:"pending"
},

})
const organdonor =mongoose.model('organdonor',organdonorSchema)
export default organdonor
