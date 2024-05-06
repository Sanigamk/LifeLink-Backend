import express from "express";
import organdonor from "../model/organdonors.js";
import { upload } from "../multer.js";
import user from "../model/user.js";
import { hossendrequesttoorgandonor } from "../model/hospitalsendrqsttoorgandonors.js";
import { myorganrqst } from "../model/myorganrqst.js";
import category from "../model/addcategory.js";
const router=express.Router()


router.post('/registers', upload.fields([{ name: 'conformationcertificate' }, { name: 'healthcertificate' }, { name: 'signature' }]), async (req, res) => {

        console.log(req.files);
        console.log(req.body,'jljljkjhkjh');
        let id=req.params.id
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
        const existMail=await organdonor.findOne({email:req.body.email})
        if(existMail){
            return res.status(400).json({message:'mail exist'})
        }
        const contact=await organdonor.findOne({contact:req.body.contact})
        if(contact){
            return res.status(400).json({message:'contact exist'})
        }
        const adhaar=await organdonor.findOne({adhaarnumber:req.body.adhaarnumber})
        if(adhaar){
            return res.status(400).json({message:'adhaar exist'})
        }
        const nominecontact=await organdonor.findOne({nominiecontact:req.body.nominiecontact})
        if(nominecontact){
            return res.status(400).json({message:'nominie contact exist'})
        }
        
        

        console.log(bodyData);
        const neworgan = new organdonor(bodyData);
        const savedorgan = await neworgan.save();
        res.json({ message: savedorgan });
 
});

router.get('/viewcategory',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await category.find()
    console.log(response);
    res.json(response)
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


router.post('/login',async(req,res)=>{
    console.log(req.body);
    let organ=await organdonor.findOne(req.body)
    console.log(organ);
    res.json(organ)
})




router.get('/vwhosrequest/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response = await hossendrequesttoorgandonor.find({organdonorId:id});
    console.log(response,'pppppppppppppppppppppppppppppppppp');
    let responsedata=[]
    for(let newresponse of response){
    let hosp =await user.findById(newresponse.hospitalId);
    let reqDetails=await myorganrqst.findById(newresponse.requestId)
    console.log(hosp,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    responsedata.push({
        request:newresponse,
        hospital:hosp,
        reqDetials:reqDetails

    })
    
    
}
res.json(responsedata)
 
   // console.log(hosp);
    // res.json(hosp)
})

router.get('/vwpagehosrequest/:id',async (req,res)=>{
    let id=req.params.id
    let vwpagehosreq = await hossendrequesttoorgandonor.findById(id)
    console.log(vwpagehosreq);
    let hos=await user.findById(vwpagehosreq.hospitalId)
    let reqDetails=await myorganrqst.findById(vwpagehosreq.requestId)
    res.json({vwpagehosreq,hos,reqDetails})
})
router.put('/mnghosptlorganrqst/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    console.log(req.body,'------------------------')
    let mnghosptlorganrqst = await hossendrequesttoorgandonor.findByIdAndUpdate(id,req.body)
    let rqst=await hossendrequesttoorgandonor.findById(id)
    console.log(rqst,'======================================');
    if(rqst){
        const requestId = rqst.requestId;
        const donorUpdate = await organdonor.findByIdAndUpdate(rqst.organdonorId, { $set: { [`organsBeforeDeath.${rqst.organ}`]: false } });        console.log(donorUpdate,'=-=--9098yhjk-----');

        let rqstUpdate=await myorganrqst.findByIdAndUpdate(rqst?.requestId,req.body)
        let del=await hossendrequesttoorgandonor.deleteMany({requestId:rqst?.requestId,status:'pending'})
        console.log(rqstUpdate,'==========================');
    }
        console.log(mnghosptlorganrqst);
        res.json(mnghosptlorganrqst)
    
})

router.get('/vwhosendrequest/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response = await hossendrequesttoorgandonor.find({organdonorId:id});
    console.log(response,'pppppppppppppppppppppppppppppppppp');
    let responsedata=[]
    for(let newresponse of response){
    let hosp =await user.findById(newresponse.hospitalId);
    let requestDetail=await myorganrqst.findById(newresponse.requestId)
    console.log(hosp,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    responsedata.push({
        request:newresponse,
        hospital:hosp,
        requestDetail:requestDetail

    })
    
    
}
res.json(responsedata)
})


router.post('/loginnominie',async(req,res)=>{
    console.log(req.body);
    let organs=await organdonor.findOne(req.body)
    res.json(organs)
})

router.get('/vworganprofile/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await organdonor.findById(id)
    console.log(response);
    res.json(response)
})

router.put('/editdonorprofile/:id',upload.fields([{name:'certificate'},{name:'healthcertificate'},{name:'proof'},{name:'conformationcertificate'}]),async(req,res)=>{
    try{
        if(req.files['signature']){
            let signature=req.files['signature'][0].filename
            req.body={...req.body,signature:signature}
        }
        if(req.files['certificate']){
            let certificate1=req.files['certificate'][0].filename
            req.body={...req.body,certificate:certificate1}
        }
        if(req.files['conformationcertificate']){
            let conformationcertificate=req.files['conformationcertificate'][0].filename
            req.body={...req.body,conformationcertificate:conformationcertificate}
        }
    let id=req.params.id
    console.log(req.body,'-------------------------');
    let response = await organdonor.findByIdAndUpdate(id,req.body)
    console.log(response);
}
catch(e){
    res.json(e.message)
}
})


router.post('/authenticate',async (req,res)=>{
    console.log(req.body);
    let response=await  organdonor.findOne(req.body)
    console.log(response);
    res.json(response)
})



export default router