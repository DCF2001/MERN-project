import express from "express";
import {
    createRequestReport,
    updateRequestReport,
    deleteRequestReport,
    getAllRequestReport,
    getRequestReportById
} from "../controllers/RequestReportcontroller.js";

const RequestReportroutes = express.Router();

RequestReportroutes.post("/add", createRequestReport);
RequestReportroutes.put("/update", updateRequestReport);
RequestReportroutes.delete("/delete/:id", deleteRequestReport);
RequestReportroutes.get("/getall", getAllRequestReport);
RequestReportroutes.get("/getbyid/:id", getRequestReportById);


export default RequestReportroutes; 