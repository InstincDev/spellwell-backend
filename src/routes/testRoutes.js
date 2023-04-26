import { Router } from "express";
import { connectDB } from "../utils/connectDB.js";
import Test from "../models/testModels.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        await connectDB();
        const test = await Test.create(req.body);
        await test.save();
        res.status(200).json(test);
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        await connectDB();
        const tests = await Test.find();
        res.status(200).json(tests);
    } catch (error) {
        console.log(error.message);
        res.send(error.message).status(400);
    }
});

export default router;
