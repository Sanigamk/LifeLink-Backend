import express  from "express";
import { donorsendrqst } from "../model/blooddonorsendrqst.js";
import user from "../model/user.js";
import { usersendrqst } from "../model/usersendbloodrqst.js";

const router = express.Router()

router.post('/donorsendrqst',async (req,res)=>{
    console.log(req.body);
    const newDonorsendrqst = new donorsendrqst(req.body)
    const savedDonorsendrqst = await newDonorsendrqst.save()
    res.json({message:savedDonorsendrqst})
})

router.get('/vwhosdetail',async(req,res)=>{
    console.log(req.body)
    let vwhosdetail = await user.find({userType:'hospital'})
    console.log(vwhosdetail);
    res.json(vwhosdetail)
})

router.get('/viewblddonationhist/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwsendbldrqst = await donorsendrqst.find({userId:id})
console.log(vwsendbldrqst);
let responseData =[];
for (const newresponse of vwsendbldrqst){

    // let hosdetail=await user.findById(newresponse.hospitalId)
    let ho=await user.findById(newresponse.hospitalId)
    responseData.push({
          ho:ho,
        req:newresponse
    });
}
console.log(responseData)
res.json(responseData)
})


router.get('/vwuserreqhist/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwuserreqhist= await usersendrqst.find({acceptedId:id});
    console.log(vwuserreqhist)
    let responseData=[];
    for(const newresponse of vwuserreqhist){
        let users = await user.findById(newresponse.userId);
        responseData.push({
            user:users,
            req:newresponse
        })
    } 
    console.log(responseData)
    res.json(responseData)
})


export default router
