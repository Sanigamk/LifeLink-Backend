import express from "express";
import  user  from "../model/user.js";
import { upload } from "../multer.js";
const router=express.Router()



router.post('/register',upload.fields([{name:'certificate'},{name:'healthcertificate'},{name:'proof'}]), async (req,res)=>{
    try{
        console.log(req.files);
        if(req.files['healthcertificate']){
            let certificate=req.files['healthcertificate'][0].filename
            req.body={...req.body,healthcertificate:certificate}
        }
        if(req.files['certificate']){
            let certificate1=req.files['certificate'][0].filename
            req.body={...req.body,certificate:certificate1}
        }
        if(req.files['proof']){
            let certificate2=req.files['proof'][0].filename
            req.body={...req.body,proof:certificate2}
        }
        console.log(req.body);
        const newUser= new user(req.body)
        const savedUser = await newUser.save()
        res.json({message:savedUser})
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/vwdonorprofile/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await user.findById(id)
    console.log(response);
    res.json(response)

})

router.get('/vwhosprofile/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await user.findById(id)
    console.log(response);
    res.json(response)
})
router.put('/editdonorprofile/:id',upload.fields([{name:'certificate'},{name:'healthcertificate'},{name:'proof'}]),async(req,res)=>{
    try{
        if(req.files['healthcertificate']){
            let certificate=req.files['healthcertificate'][0].filename
            req.body={...req.body,healthcertificate:certificate}
        }
        if(req.files['certificate']){
            let certificate1=req.files['certificate'][0].filename
            req.body={...req.body,certificate:certificate1}
        }
        if(req.files['proof']){
            let certificate2=req.files['proof'][0].filename
            req.body={...req.body,proof:certificate2}
        }
    let id=req.params.id
    console.log(req.body);
    let response = await user.findByIdAndUpdate(id,req.body)
    console.log(response);
}
catch(e){
    res.json(e.message)
}
})

router.post('/login',async(req,res)=>{
    console.log(req.body);
    let users=await user.findOne(req.body)
    console.log(users);
    res.json(users)
})

router.get('/managehos',async(req,res)=>{
        let managehos = await user.find({userType:'hospital'})
    console.log(managehos);
    res.json(managehos)
    
})
router.get('/mnghos/:id',async (req,res)=>{
    let id=req.params.id
    let mnghos = await user.findById(id)
    console.log(mnghos);
    res.json(mnghos)
})

router.get('/vwuser',async(req,res)=>{
    let vwuser = await user.find({userType:'user'})
    console.log(vwuser);
    res.json(vwuser)
})
router.get('/vwpageuser/:id',async(req,res)=>{
    let id=req.params.id
    let vwpageuser = await user.findById(id)
    console.log(vwpageuser);
    res.json(vwpageuser)
})
router.get('/vwblddonor', async(req,res)=>{
    let vwblddonor = await user.find({userType:'blooddonor'})
    console.log(vwblddonor);
    res.json(vwblddonor)

})
router.get('/vwpageblddonor/:id', async(req,res)=>{
    let id=req.params.id
    let vwpageblddonor = await user.findById(id)
    console.log(vwpageblddonor);
    res.json(vwpageblddonor)
})
router.get('/mngcollege',async(req,res)=>{
    let mngcollege = await user.find({userType:'college'})
    console.log(mngcollege);
    res.json(mngcollege)
})
router.get('/managcollg/:id',async(req,res)=>{
    let id=req.params.id
    let managcollg = await user.findById(id)
    console.log(managcollg)
    res.json(managcollg)
})

export default router