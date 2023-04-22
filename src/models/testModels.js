import { Schema, model } from "mongoose";
import { WordSchema } from "./wordModels.js";

const Test = new Schema({
    title: { type: String, required: true },
    baseWords: { type: [WordSchema] },
    challengeWords: { type: [WordSchema] },
    teacherId: { type: Schema.Types.ObjectId },
});

export default model("Test", Test);
