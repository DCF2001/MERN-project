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
routerequestsroutes.put("/update/:id", updateRouterequest);
routerequestsroutes.delete("/delete/:id", deleteRouterequest);
routerequestsroutes.get("/getall", getAllRouterequests);
routerequestsroutes.get("/getbyid/:id", getRouterequestById);


export default routerequestsroutes; 