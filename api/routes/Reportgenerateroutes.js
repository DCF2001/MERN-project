import express from "express";
import {
    createReportgenerate,
    updateReportgenerate,
    deleteReportgenerate,
    getAllReportgenerate,
    getReportgenerateById
} from "../controllers/Reportgeneratecontroller.js";

const Reportgenerateroutes = express.Router();

Reportgenerateroutes.post("/add", createReportgenerate);
Reportgenerateroutes.put("/update/:id", updateReportgenerate);
Reportgenerateroutes.delete("/delete/:id", deleteReportgenerate);
Reportgenerateroutes.get("/getall", getAllReportgenerate);
Reportgenerateroutes.get("/getbyid/:id", getReportgenerateById);


export default Reportgenerateroutes; 