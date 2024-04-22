import { Schema, model } from "mongoose";

const categorySchema=Schema({
    afterdeathorgans:{
        type:String
    },
    beforedeathorgans:{
            type:String
    },
    
    
})
const category = model('addcategory',categorySchema);
export default category