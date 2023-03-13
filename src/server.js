import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js"


dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors()); 

server.use("/test", testRoutes);
server.use("/teacher", teacherRoutes);
server.use("/student", studentRoutes);
// Set up a home/base route

server.get("/", (req, res) => {
    res.send("Hello World");
});


// Listen with server
server.listen(PORT, () => {
    console.log(`PORT is running on ${PORT}`);
});
