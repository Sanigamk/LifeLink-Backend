import express, { Router } from "express";
import { collgsendreqst } from "../model/collgsendrqst.js";

const router=express.Router()

router.post('/cllgsendrqst',async(req,res)=>{
    console.log(req.body);
    const newCllgsendrqst = new collgsendreqst(req.body)
    const savedCllgsendrqst = await newCllgsendrqst.save()
    res.json({message:savedCllgsendrqst})

})
export default router