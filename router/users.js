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
router.get('/uservwpro/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await user.findById(id)
    console.log(response);
    res.json(response)
})
router.put('/updatepro/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let update= await user.findByIdAndUpdate(id,req.body)
    console.log(update);
    res.json(update)
    }
    catch(e){
        res.json(e.message)
    }
    
})


router.get('/vwuseraccptdreqhist/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwuserreqhist= await usersendrqst.findById(id);
    console.log(vwuserreqhist)
    console.log(vwuserreqhist.acceptedId,'ii');
        let users = await user.findById(vwuserreqhist.acceptedId); 
        console.log(users,'ooo');
    console.log({vwuserreqhist,users})
    res.json({vwuserreqhist,users})
})
router.post('/authenticate',async (req,res)=>{
    console.log(req.body);
    let response=await  user.findOne(req.body)
    console.log(response);
    res.json(response)
})


export default router