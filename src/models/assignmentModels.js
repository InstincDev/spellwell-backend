import { Schema, model } from "mongoose"; 

const Assignment = new Schema({
    teacherId: [Schema.Types.ObjectId],
    studentId: [Schema.Types.ObjectId],
    testId: [Schema.Types.ObjectId],
    hasTaken: {type: Boolean, default: false},
    grade: {type: Number},
    incorrectAnswers: {type: [String]}
    
})

export default model("Assignment", Assignment)