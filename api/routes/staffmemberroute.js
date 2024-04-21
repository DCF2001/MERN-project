import express from "express";
import {
    createstaffmember,
    updatestaffmember,
    deletestaffmember,
    getAllstaffmember, 
    getstaffmemberById
} from "../controllers/staffmember.js";

const staffmemberroute = express.Router();

staffmemberroute.post("/add", createstaffmember);
staffmemberroute.get("/getall",  getAllstaffmember);
staffmemberroute.put("/update/:id", updatestaffmember);
staffmemberroute.delete("/delete/:id", deletestaffmember );


export default staffmemberroute;