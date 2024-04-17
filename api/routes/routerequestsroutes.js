import express from "express";
import {
    createRouterequest,
    updateRouterequest,
    deleteRouterequest,
    getAllRouterequests,
    getRouterequestById
} from "../controllers/routerequestsController.js";

const routerequestsroutes = express.Router();

routerequestsroutes.post("/add", createRouterequest);
routerequestsroutes.get("/getall", updateRouterequest);
routerequestsroutes.get("/getbyid/:id", deleteRouterequest);
routerequestsroutes.put("/update",  getAllRouterequests);
routerequestsroutes.delete("/delete/:id",  getRouterequestById);


export default routerequestsroutes;