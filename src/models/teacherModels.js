import { Schema, model} from "mongoose";

const Teacher = new Schema({
    name: {type:String, required: true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    testsId: [Schema.Types.ObjectId]
    // classId: class taught
})

export default model("Teacher", Teacher)