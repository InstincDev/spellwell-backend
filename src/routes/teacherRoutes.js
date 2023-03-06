import {Router} from "express";
import {connectDB} from "../utils/connectDB.js";
import Teacher from "../models/teacherModels.js"

const router = Router()

router.post("/", async (req, res) =>{
    try {
        await connectDB()
        const teacher= await Teacher.create(req.body)
        await teacher.save()
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error.message)
        res.send().status(400)        
    }
})

export default router