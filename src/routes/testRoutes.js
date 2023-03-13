import { Router } from "express";
import {connectDB} from "../utils/connectDB.js";
import Test from "../models/testModels.js"


const router = Router();

router.post("/", async (req, res) => {
    try {
        const {baseWords, challengeWords} = req.body
        // check if base and challenge words are undefined
        if (baseWords == undefined || challengeWords == undefined) throw Error('Base and or Challenge Words undefined')  
        // check if base and challenge words length > 0 
        if (baseWords.length <= 0 || challengeWords.length <= 0) throw Error('Insufficient Words Provided')    

       await connectDB(); 
        const test = await Test.create(req.body)
        await test.save()
        res.status(200).json(test);
    } catch (error) {
        console.log(error.message);
        res.status(400).send();
    }
});

router.get("/", async (req,res) =>{
    try {
        await connectDB();
       const test = await Test.find() 
       console.log(test);
        res.status(200).send()
    } catch (error) {
       console.log(error.message);
       res.send(error.message).status(400) 
    }
})

export default router