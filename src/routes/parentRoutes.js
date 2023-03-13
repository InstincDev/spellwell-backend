import { Router } from "express";
import { connectDB } from "../utils/connectDB.js";
import Parent from "../models/parentModels.js"

const router = Router()

router.post("/", async(req, res)=>{
    try {
        await connectDB()
        const parent = await Parent.create(req.body)
        await parent.save()
        console.log(req.body);
        res.status(200).json(parent)
    } catch (error) {
        console.log(error.message)
        res.send(error.message).status(400)
    }
});

router.get("/", async(req,res)=>{
    try {
        await connectDB()
        const parent = await Parent.find()
        res.status(200).json(parent)
    } catch (error) {
        console.log(error.message);
        res.send(error.message).status(400)
    }
})

export default router