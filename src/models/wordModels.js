import { Schema } from "mongoose";

export const WordSchema = new Schema({
    word: { type: String, required: true },
    sentence: { type: String, required: true },
});

