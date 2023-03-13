import { Schema, model } from "mongoose"; 

const Student = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    teacherId: [Schema.Types.ObjectId],
    assignments: [Schema.Types.ObjectId],
    // TODO: add parents 
})

export default model("Student", Student)