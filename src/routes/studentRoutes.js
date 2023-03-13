import { Router } from "express";
import { connectDB } from "../utils/connectDB.js";
import Student from "../models/studentModels.js"

const router = Router()

router.post("/", async(req, res)=>{
    try {
        await connectDB()
        const student = await Student.create(req.body)
        await student.save()
        console.log(req.body);
        res.status(200).json(student)
    } catch (error) {
        console.log(error.message)
        res.send(error.message).status(400)
    }
});

router.get("/", async(req,res)=>{
    try {
        await connectDB()
        const student = await Student.find()
        res.status(200).json(student)
    } catch (error) {
        console.log(error.message);
        res.send(error.message).status(400)
    }
})

export default router