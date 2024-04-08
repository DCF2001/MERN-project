import express from "express"
import {CreateResearch } from "../controllers/Research.controller.js";
import {ReadResearch } from "../controllers/Research.controller.js";
import {RReadResearch } from "../controllers/Research.controller.js";
import {RemoveResearch} from "../controllers/Research.controller.js";



const router = express.Router();

router.post('/create', CreateResearch);
router.get('/read',ReadResearch)
router.get('/rread',RReadResearch)
router.get('/remove',RemoveResearch)




export default router;
