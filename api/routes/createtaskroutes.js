import express from "express";
import {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
    getTaskById,
} from "../controllers/createtaskController.js";

const createtaskroutes = express.Router();

createtaskroutes.post("/add", createTask);
createtaskroutes.put("/update", updateTask);
createtaskroutes.delete("/delete/:id", deleteTask);
createtaskroutes.get("/getall",  getAllTask);
createtaskroutes.get("/getbyid/:id",  getTaskById);


export default createtaskroutes; 