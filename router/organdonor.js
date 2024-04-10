import express from "express";
import organdonor from "../model/organdonors.js";
import { upload } from "../multer.js";
const router=express.Router()


router.post('/registers', upload.fields([{ name: 'conformationcertificate' }, { name: 'healthcertificate' }, { name: 'signature' }]), async (req, res) => {

        console.log(req.files);
        console.log(req.body,'jljljkjhkjh');
        let bodyData = { ...req.body };

        if (req.files['healthcertificate']) {
            let certificate = req.files['healthcertificate'][0].filename;
            bodyData.healthcertificate = certificate;
        }

        if (req.files['conformationcertificate']) {
            let certificate1 = req.files['conformationcertificate'][0].filename;
            bodyData.conformationcertificate = certificate1;
        }

        if (req.files['signature']) {
            let certificate2 = req.files['signature'][0].filename;
            bodyData.signature = certificate2;
        }

        console.log(bodyData);
        const neworgan = new organdonor(bodyData);
        const savedorgan = await neworgan.save();
        res.json({ message: savedorgan });
 
});


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


router.post('/login',async(req,res)=>{
    console.log(req.body);
    let organ=await organdonor.findOne(req.body)
    console.log(organ);
    res.json(organ)
})

export default router