import express from "express";
import {
    createvehicelrequest,
    updatevehicelrequest,
    deletevehicelrequest,
    getAllvehicelrequests,
    getvehicelrequestById,
} from "../controllers/vehiclerequestcontroller.js";

const vehiclerequestroute = express.Router();

vehiclerequestroute.post("/add", createvehicelrequest);
vehiclerequestroute.get("/getall", getAllvehicelrequests);
vehiclerequestroute.get("/getbyid/:id", getvehicelrequestById);
vehiclerequestroute.put("/update/:id", updatevehicelrequest);
vehiclerequestroute.delete("/delete/:id", deletevehicelrequest);

export default vehiclerequestroute;  