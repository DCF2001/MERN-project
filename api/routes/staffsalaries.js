import express from "express";
import {
    createstaffsalary,
    updatestaffsalary,
    deletestaffsalary,
    getAllstaffsalary,
    getstaffsalarytById
} from "../controllers/staff.salary.js";

const staffsalaries = express.Router();

staffsalaries.post("/add", createstaffsalary);
staffsalaries.put("/update/:id", updatestaffsalary); // Assuming you pass id in the URL
staffsalaries.delete("/delete/:id", deletestaffsalary); // Assuming you pass id in the URL
staffsalaries.get("/getall", getAllstaffsalary);
staffsalaries.get("/getbyid/:id", getstaffsalarytById);

export default staffsalaries;
