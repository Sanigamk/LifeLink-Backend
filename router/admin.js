import express from "express";
import  user  from "../model/user.js";
import { upload } from "../multer.js";
import { donorsendrqst } from "../model/blooddonorsendrqst.js";
import { collgsendreqst } from "../model/collgsendrqst.js";
import { myorganrqst } from "../model/myorganrqst.js";
import { mybloodhosptl } from "../model/mybloodrqsthosptl.js";
import organdonor from "../model/organdonors.js";
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
        const existMail=await user.findOne({email:req.body.email})
        if(existMail){
            return res.status(400).json({message:'mail exist'})
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

router.post('/api/auth/authenticate',async (req,res)=>{
    console.log(req.body);
    let response=await  user.findOne(req.body)
    console.log(response);
    res.json(response)
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

router.get('/vwcollgprofile/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await user.findById(id)
    console.log(response);
    res.json(response)
})
// router.put('/editdonorprofile/:id',upload.fields([{name:'certificate'},{name:'healthcertificate'},{name:'proof'},{name:'conformationcertificate'}]),async(req,res)=>{
//     try{
//         if(req.files['healthcertificate']){
//             let certificate=req.files['healthcertificate'][0].filename
//             req.body={...req.body,healthcertificate:certificate}
//         }
//         if(req.files['certificate']){
//             let certificate1=req.files['certificate'][0].filename
//             req.body={...req.body,certificate:certificate1}
//         }
//         if(req.files['proof']){
//             let certificate2=req.files['proof'][0].filename
//             req.body={...req.body,proof:certificate2}
//         }
//         if(req.files['conformationcertificate']){
//             let conformationcertificate=req.files['conformationcertificate'][0].filename
//             req.body={...req.body,conformationcertificate:conformationcertificate}
//         }
//     let id=req.params.id
//     console.log(req.body);
//     let response = await user.findByIdAndUpdate(id,req.body)
//     console.log(response);
// }
// catch(e){
//     res.json(e.message)
// }
// })

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
router.put('/mnghosptl/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mnghosptl = await user.findByIdAndUpdate(id,req.body)
    console.log(mnghosptl);
    
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
router.put('/mnguser/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngbuser = await user.findByIdAndUpdate(id,req.body)
    console.log(mngbuser);
    
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
router.put('/mngblddonor/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngblddonor = await user.findByIdAndUpdate(id,req.body)
    console.log(mngblddonor);
    
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
router.put('/mngcllg/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngcllg = await user.findByIdAndUpdate(id,req.body)
    console.log(mngcllg);
    
})
router.get('/adminvwblddonordonation/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let vwdonordonation = await donorsendrqst.find()

    console.log(vwdonordonation);
    let responseData =[];
for (const newresponse of vwdonordonation){

    let blddonordonation=await user.findById(newresponse.userId)
    let hoss=await user.findById(newresponse.hospitalId)

    responseData.push({
        blddonordonation:blddonordonation,
        hoss:hoss,
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

router.get('/adminvwcllgrequestdonation/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let vwdcllgreq = await collgsendreqst.find()

    console.log(vwdcllgreq);
    let responseData =[];
for (const newresponse of vwdcllgreq){

    let cllgdonation=await user.findById(newresponse.userId)
    let hoss=await user.findById(newresponse.hospitalId)

    responseData.push({
        cllgdonation:cllgdonation,
        hoss:hoss,
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

router.get('/adminvwblooddonation/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let vwdbldreq = await mybloodhosptl.find()

    console.log(vwdbldreq);
    let responseData =[];
for (const newresponse of vwdbldreq){

    let Accptdhos=await user.findById(newresponse.AcceptedId)
    let hosptls=await user.findById(newresponse.hospitalId)

    responseData.push({
        Accptdhos:Accptdhos,
        hosptls:hosptls,
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

router.get('/adminvworgandonation/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let vwdorganreq = await myorganrqst.find()

    console.log(vwdorganreq);
    let responseData =[];
for (const newresponse of vwdorganreq){

    let Accptdhoss=await user.findById(newresponse.AcceptedId)
    let hoss=await user.findById(newresponse.userId)

    responseData.push({
        Accptdhoss:Accptdhoss,
        hoss:hoss,
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


router.get('/vieworgandonors',async (req,res)=>{
    let organdnr = await organdonor.find()
console.log(organdnr);
res.json(organdnr)

})


router.get('/managorgandonor/:id',async(req,res)=>{
    try{
    let id=req.params.id
    let managorgan = await organdonor.findById(id)

    console.log(managorgan);

    let hospital=await user.findById(managorgan.hospitalId)
    res.json({managorgan,hospital})
  
}

catch(e){
    res.json(e.message)
}
})
router.put('/mngorgandnr/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body)
    let mngorgn = await organdonor.findByIdAndUpdate(id,req.body)
    console.log(mngorgn);
    
})




export default router