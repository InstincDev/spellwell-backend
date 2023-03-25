import { Router } from "express";
import { connectDB } from "../utils/connectDB.js";
import Assignment from "../models/assignmentModels.js";
import Student from "../models/studentModels.js"

const router = Router();

router.post("/", async (req, res) => {
    try {
        await connectDB()

        const assignment = await Assignment.create(req.body)
        await assignment.save()
    
        await studentAddAssignment(assignment.id, req.body.studentId)
        // console.log(req.body)
        res.json(assignment).status(200);
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});

export default router;

async function studentAddAssignment (assignmentId, studentId){
 const student = await Student.findOne({_id:studentId})

 student.assignments.push(assignmentId)
 await student.save()
console.log(student.assignments);
}