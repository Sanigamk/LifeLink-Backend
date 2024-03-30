import express, { Router } from "express";
import { collgsendreqst } from "../model/collgsendrqst.js";
import user from "../model/user.js";
import { mybloodcollg } from "../model/mybloodrqstcollg.js";

const router=express.Router()

router.post('/cllgsendrqst',async(req,res)=>{
    console.log(req.body);
    const newCllgsendrqst = new collgsendreqst(req.body)
    const savedCllgsendrqst = await newCllgsendrqst.save()
    res.json({message:savedCllgsendrqst})

})
router.get('/vwcollgrqst/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwcollgrqst=await collgsendreqst.find({userId:id})
    console.log(vwcollgrqst)
    let responseData=[];
    for(const newresponse of vwcollgrqst){
        let hospital= await user.findById(newresponse.hospitalId);
        responseData.push({
            hospital:hospital,
            req:newresponse
        })
    } 
    console.log(responseData)
    res.json(responseData)
})
router.get('/cllgdistrict/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let cllgdistrict=await user.find({district:id,userType:'college'}) 
    console.log(cllgdistrict);
    res.json(cllgdistrict)
})

router.get('/hosdistrict/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let hosdistrict=await user.find({district:id,userType:'hospital'}) 
    console.log(hosdistrict);
    res.json(hosdistrict)
})

router.get('/vwhosreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwhosreq=await mybloodcollg.find()
    console.log(vwhosreq)
    let responseData=[];
    for(const newresponse of vwhosreq){
        let hospital = await user.findById(newresponse.userId);
        responseData.push({
            hospital:hospital,
            req:newresponse
        })
    } 
    console.log(responseData)
    res.json(responseData)
})


export default router