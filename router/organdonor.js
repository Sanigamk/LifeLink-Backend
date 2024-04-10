import express from "express";
import organdonor from "../model/organdonors";
const router=express.Router


router.post('/registers',upload.fields([{name:'certificate'},{name:'healthcertificate'},{name:'signature'}]), async (req,res)=>{
    try{
        console.log(req.files);
        if(req.files['healthcertificate']){
            let certificate=req.files['healthcertificate'][0].filename
            req.body={...req.body,healthcertificate:certificate}
        }
        if(req.files['conformationcertificate']){
            let certificate1=req.files['certificate'][0].filename
            req.body={...req.body,certificate:certificate1}
        }
        if(req.files['signature']){
            let certificate2=req.files['signature'][0].filename
            req.body={...req.body,proof:certificate2}
        }
        console.log(req.body);
        const neworgan= new organdonor(req.body)
        const savedorgan = await neworgan.save()
        res.json({message:savedorgan})
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/hosdistrict/:id',async(req,res)=>{
    try{
    let id=req.params.id
    console.log(id);
    let hosdistrict=await user.find({district:id,userType:'hospital'}) 
    console.log(hosdistrict);
    res.json(hosdistrict)
    }
    catch(e){
        res.json(e.message)
    }
})