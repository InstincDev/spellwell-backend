import { Schema, model } from "mongoose"; 

const Parent = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    studentId: [Schema.Types.ObjectId]
})

export default model("Parent", Parent)