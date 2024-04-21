import express from "express";
import {
    createstaffreqests,
    updatestaffreqests,
    deletestaffreqests,
    getAllstaffreqests,
    getstaffreqestsById
} from "../controllers/staff.request.js";

const staffrequests = express.Router();

staffrequests.post("/add", createstaffreqests);
staffrequests.get("/getall", getAllstaffreqests);
staffrequests.get("/getbyid/:id", getstaffreqestsById);
staffrequests.put("/update", updatestaffreqests);
staffrequests.delete("/delete/:id", deletestaffreqests);

export default staffrequests;
