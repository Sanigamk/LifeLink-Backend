import express from "express";
import { addorgan } from "../model/addorgan.js";
import { mybloodhosptl } from "../model/mybloodrqsthosptl.js";
import { mybloodcollg } from "../model/mybloodrqstcollg.js";
import { myorganrqst } from "../model/myorganrqst.js";
import { upload } from "../multer.js";
import mongoose from "mongoose";
import user from "../model/user.js";
import { collgsendreqst } from "../model/collgsendrqst.js";
import { donorsendrqst } from "../model/blooddonorsendrqst.js";
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



router.post('/mybloodhos',async(req,res)=>{
    console.log(req.body);
    const newMybloodhos = new mybloodhosptl(req.body)
    const savedMybloodhos = await newMybloodhos.save()
    res.json({message:savedMybloodhos})
})




router.post('/mybloodrqstcllg',async(req,res)=>{
    console.log(req.body);
    const newMybldcllgrqst = new mybloodcollg(req.body)
    const savedMybldcllgrqst = await newMybldcllgrqst.save()
    res.json({message:savedMybldcllgrqst})
})
router.get('/vwcollgdetail',async(req,res)=>{
    console.log(req.body)
    let vwcollgdetail = await user.find({userType:'college'})
    console.log(vwcollgdetail);
    res.json(vwcollgdetail)
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







router.get('/vworgandonor/:id',async(req,res)=>{
    let id=req.params.id
    let vworgandonor = await addorgan.find({hospitalId:id})
    console.log(vworgandonor);
    res.json(vworgandonor)
})
router.get('/vwpageorgandnr/:id',async(req,res)=>{
        let id=req.params.id
        let vwpageorgandnr = await addorgan.findById(id)
        console.log(vwpageorgandnr)
        res.json(vwpageorgandnr)
})
router.put('/editorgandnr/:id',upload.fields([{name:"healthcertificate"},{name:'conformationcertificate'}]),async(req,res)=>{
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
    const newEditorgandnr = new editorgandnr(req.body)
    const savedEditorgandnr = await newEditorgandnr.save()
    res.json({message:savedEditorgandnr})
}
catch(e){
    res.json(e.message)
}
})




router.get('/vwpagehosbldrqst/:id',async(req,res)=>{
    let id=req.params.id
    let vwpagehosbldrqst = await user.findById(id)
    console.log(vwpagehosbldrqst);
    res.json(vwpagehosbldrqst)
})

router.get('/get/sendlist/:id',async(req,res)=>{
    let id=req.params.id
    // let vwsendbloodhist = await mybloodhosptl.find({hospitalId:new mongoose.Types.ObjectId(id)})
    let vwsendbloodhist = await mybloodhosptl.aggregate([
        {
            $match:{'hospitalId':new mongoose.Types.ObjectId(id)}
        },
        {
            $lookup:{
                from:"users",
                localField:"hospitalId",
                foreignField:"_id",
                as:"hospitalInfo"
            },  
        },
        {
            $unwind:"$hospitalInfo"
        }
    ])
    console.log(vwsendbloodhist);
    res.json(vwsendbloodhist)
})




router.get('/vwblddonordonationreq/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let vwdonationreq = await donorsendrqst.find()

    console.log(vwdonationreq);
    let responseData =[];
for (const newresponse of vwdonationreq){

    let blddonor=await user.findById(newresponse.userId)
    responseData.push({
        blddonor:blddonor,
        req:newresponse
    });
}
console.log(responseData)
res.json(responseData)

}
catch(e){
    res.json(e.message)
}
})
router.get('/vwpageblddonation/:id',async(req,res)=>{
    let id=req.params.id
    let vwpageblddonation = await donorsendrqst.findById(id)
    console.log(vwpageblddonation);
    let donor=await user.findById(vwpageblddonation.userId)
    res.json(vwpageblddonation,donor)
})
router.put('/mngblddonordonationreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngblddonationreq = await user.findByIdAndUpdate(id,req.body)
    console.log(mngblddonationreq);
    
})






router.get('/viewhosbldrqst/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwbldrqst = await mybloodhosptl.find()
console.log(vwblooddonor);
let responseData =[];
for (const newresponse of vwbldrqst){

    let hosptlset=await user.findById(newresponse.hospitalId)
    responseData.push({
        hosptlset:hosptlset,
        req:newresponse
    });
}
console.log(responseData)
res.json(responseData)
})

router.get('/mnghosbloodrqst/:id',async (req,res)=>{
    let id=req.params.id
    let mnghosbldreq = await mybloodhosptl.findById(id)
    console.log(mnghosbldreq);
    let hos=await user.findById(mnghosbldreq.hospitalId)
    res.json({mnghosbldreq,hos})
})

router.put('/mnghosptlbldrqst/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mnghosptl = await mybloodhosptl.findByIdAndUpdate(id,req.body)
    console.log(mnghosptl);
    
})




router.get('/vwcollgreq/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let vwcollg = await collgsendreqst.find({hospitalId:id});
    console.log(vwcollg)
    let responseData=[];
    for(const newresponse of vwcollg){
        let college = await user.findById(newresponse.userId);
        responseData.push({
            college:college,
            req:newresponse
        })
    } 
    console.log(responseData)
    res.json(responseData)
})
router.put('/mngcllgbldrqst/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngcollg = await collgsendreqst.findByIdAndUpdate(id,req.body)
    console.log(mngcollg);
    
})









router.get('/')
export default router