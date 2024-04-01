import express from "express";
import { usersendrqst } from "../model/usersendbloodrqst.js";
import user from "../model/user.js";

const router = express.Router()

router.post('/usersendrqst',async(req,res)=>{
    console.log(req.body);
    const newUsersendrqst = new usersendrqst(req.body)
    const savedUsersendrqst = await newUsersendrqst.save()
    res.json({message:savedUsersendrqst})
})
router.get('/uservwsendrqst/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await usersendrqst.find({userId:id})
    console.log(response);
    res.json(response)
})
export default router