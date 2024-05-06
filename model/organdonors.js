import { Schema, model } from "mongoose";
import user from "./user.js";

const organdonorSchema = Schema({
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: user
    },
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    address: {
        type: String,
    },
    email:{
        type:String,
        unique:true
    },
    adhaarnumber: {
        type: String,
        unique:true
    },
    gender:{
        type: String,
    },
    conformationcertificate: {
        type: String,
    },
    healthcertificate: {
        type: String,
    },
    bloodgroup: {
        type: String,
    },
    height: {
        type: String,
    },
    weight: {
        type: String,
    },
    healthissue: {
        type: String,
    },
    reasonofdeath: {
        type: String,
    },
    dateofbirth: {
        type: Date
    },
    dateofdeath: {
        type: Date
    },
    contact:{
        type:String,
        unique:true
    },
    signature:{
        type:String,
    },
    time:{
        type:String,
    },
    nominie: {
        type: String,
    },
    nominiecontact: {
        type: String,
        unique:true,
    },
    nominierelation: {
        type: String,
    },
    nominiepassword:{
        type:String,
    },
    password: {
        type: String,
    },
    Conformpassword: {
        type: String,
    },
    organsBeforeDeath: {
        heart: {
            type: Boolean,
            default: false
        },
        liver: {
            type: Boolean,
            default: false
        },
        kidney: {
            type: Boolean,
            default: false
        },
        lung: {
            type: Boolean,
            default: false
        },
        pancreas: {
            type: Boolean,
            default: false
        },
        skin: {
            type: Boolean,
            default: false
        },
        Bonemarrow: {
            type: Boolean,
            default: false
        }
    },
    organsAfterDeath: {
        heart: {
            type: Boolean,
            default: false
        },
        liver: {
            type: Boolean,
            default: false
        },
        kidney: {
            type: Boolean,
            default: false
        },
        lung: {
            type: Boolean,
            default: false
        },
        pancreas: {
            type: Boolean,
            default: false
        },
        cornea: {
            type: Boolean,
            default: false
        },
        skin: {
            type: Boolean,
            default: false
        },
        bone: {
            type: Boolean,
            default: false
        },
        tissue: {
            type: Boolean,
            default: false
        }
    },
    status: {
        type: String,
        default: "pending"
    },
});

const organdonor = model('organdonor', organdonorSchema);
export default organdonor;
