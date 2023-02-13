import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;
