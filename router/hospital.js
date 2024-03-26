import express from "express";
import { addorgan } from "../model/addorgan.js";
import { mybloodhosptl } from "../model/mybloodrqsthosptl.js";
import { mybloodcollg } from "../model/mybloodrqstcollg.js";
import { myorganrqst } from "../model/myorganrqst.js";
import { upload } from "../multer.js";
const router= express.Router()

router.post('/addorgan',upload.fields([{name:"healthcertificate"},{name:"conformationcertificate"}]),async (req,res)=>{
    console.log(req.files);
    if(req.files['healthcertificate']){
        let certificate=req.files['healthcertificate'][0].filename
        req.body={...req.body,healthcertificate:certificate}
    }
    if(req.files['conformationcertificate']){
        let conformationcertificate=req.files['conformationcertificate'][0].filename
        req.body={...req.body,conformationcertificate:conformationcertificate}
    }
    const newAddorgan = new addorgan(req.body)
    const savedAddorgan = await newAddorgan.save()
    res.json({message:savedAddorgan})

})
router.post('/addcertficate/:id',upload.fields([{name:'healthcertificate'},{name:'conformationcertificate'}]),async(req,res)=>{
    try{
        if(req.files['healthcertificate']){
            let certificate=req.files['healthcertificate'][0].filename
            req.body={...req.body,healthcertificate:certificate}
        }
        if(req.files['conformationcertificate']){
            let conformationcertificate=req.files['conformationcertificate'][0].filename
            req.body={...req.body,conformationcertificate:conformationcertificate}
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


router.post('/mybloodhos',async(req,res)=>{
    console.log(req.body);
    const newMybloodhos = new mybloodhosptl(req.body)
    const savedMybloodhos = await newMybloodhos.save()
    res.json({message:savedMybloodhos})
})


router.post('/mybloodcllg',upload.fields([{name:'healthcertificate'},{name:'conformationcertificate'}]),async(req,res)=>{
    try{
        if(req.files['healthcertificate']){
            let certificate=req.files['healthcertificate'][0].filename
            req.body={...req.body,healthcertificate:certificate}
        }
        if(req.files['conformationcertificate']){
            let conformationcertificate=req.files['conformationcertificate'][0].filename
            req.body={...req.body,conformationcertificate:conformationcertificate}
        }
    console.log(req,res);
    const newMybloodcollg = new mybloodcollg(req.body)
    const savedMybloodcollg = await newMybloodcollg.save()
    res.json({message:savedMybloodcollg})
}
catch(e){
    res.json(e.message)
}
})



router.post('/myorganrqst/:id',upload.fields([{name:"healthcertificate"}]),async(req,res)=>{
    console.log(req.body);
    if(req.files['healthcertificate']){
        let healthcertificate=req.files['healthcertificate'][0].filename
        req.body={...req.body,healthcertificate:healthcertificate}
    }
    const newMyorganrqst = new myorganrqst(req.body)
    const savedMyorganrqst= await newMyorganrqst.save()
    res.json({message:savedMyorganrqst})
})

router.get('/vworgandonor',async(req,res)=>{
    let vworgandonor = await addorgan.find({userType:'hospital'})
    console.log(vworgandonor);
    res.json(vworgandonor)
})

router.get('/vwpageorgandnr/:id',async(req,res)=>{
        let id=req.params.id
        let vwpageorgandnr = await addorgan.findById(id)
        console.log(vwpageorgandnr)
        res.json(vwpageorgandnr)
  

})



router.get('/')
export default router