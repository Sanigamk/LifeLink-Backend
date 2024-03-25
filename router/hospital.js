import express from "express";
import { addorgan } from "../model/addorgan.js";
import { mybloodhosptl } from "../model/mybloodrqsthosptl.js";
import { mybloodcollg } from "../model/mybloodrqstcollg.js";
import { myorganrqst } from "../model/myorganrqst.js";
const router= express.Router()

router.post('/addorgan',async (req,res)=>{
    console.log(req.body);
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
router.post('/mybloodcllg',async(req,res)=>{
    console.log(req,res);
    const newMybloodcollg = new mybloodcollg(req.body)
    const savedMybloodcollg = await newMybloodcollg.save()
    res.json({message:savedMybloodcollg})
})
router.post('/myorganrqst',async(req,res)=>{
    console.log(req.body);
    const newMyorganrqst = new myorganrqst(req.body)
    const savedMyorganrqst= await newMyorganrqst.save()
    res.json({message:savedMyorganrqst})
})


router.get('/')
export default router