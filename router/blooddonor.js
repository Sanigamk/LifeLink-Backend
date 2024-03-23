import express  from "express";
import { donorsendrqst } from "../model/blooddonorsendrqst.js";
import user from "../model/user.js";

const router = express.Router()

router.post('/donorsendrqst',async (req,res)=>{
    console.log(req.body);
    const newDonorsendrqst = new donorsendrqst(req.body)
    const savedDonorsendrqst = await newDonorsendrqst.save()
    res.json({message:savedDonorsendrqst})
})


export default router
