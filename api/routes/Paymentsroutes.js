import express from "express";
import {
    createPayments,
    updatePayments,
    deletePayments,
    getAllPayments,
    getPaymentsById
} from "../controllers/Paymentscontroller.js";

const Paymentsroutes = express.Router();

Paymentsroutes.post("/add", createPayments);
//Paymentsroutes.put("/update", updatePayments);
Paymentsroutes.put("/update/:id", updatePayments);
Paymentsroutes.delete("/delete/:id", deletePayments);
Paymentsroutes.get("/getall", getAllPayments);
Paymentsroutes.get("/getbyid/:id", getPaymentsById);


export default Paymentsroutes; 