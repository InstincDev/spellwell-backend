import {Schema, model} from "mongoose";

const Test = new Schema({
    title: {type:String, required: true},
    baseWords:{type: [String], required: true},
    challengeWords: {type: [String], required:true},
    teacherId: {type: Schema.Types.ObjectId}
    
})

export default model("Test", Test)