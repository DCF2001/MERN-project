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
createtaskroutes.get("/getall", updateTask);
createtaskroutes.get("/getbyid/:id", deleteTask);
createtaskroutes.put("/update",  getAllTask);
createtaskroutes.delete("/delete/:id",  getTaskById);

// packagesRouter.get("/getAllAprovedPackages", getAllApprovedPackages);
// packagesRouter.get("/allApprovedPackages",getAllApprovedPackages);
// packagesRouter.put("/approvePackage", approvePackage);
// packagesRouter.get("/getUnapprovedPackages", getUnapprovedPackages);

export default createtaskroutes;