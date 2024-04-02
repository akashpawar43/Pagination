import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import { Todo } from "./models/Todo.js";
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/todo-full")
app.use(express.json());

app.use(cors());
app.get("/", async (req, res) => {
    
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;
    
    const skip = (page - 1) * limit;
    
    const data = await Todo.find({}).skip(skip).limit(limit);
    let len = await Todo.find({}).countDocuments();

    // if (len % 2 !== 0) {
    //     len += 1;
    // }

    res.json({
        data,
        len
    })
})


app.listen(4000, () => {
    console.log("Server is running");
})

