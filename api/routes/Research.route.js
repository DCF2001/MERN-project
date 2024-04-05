import express from "express"
import {CreateResearch } from "../controllers/Research.controller.js";
import {ReadResearch } from "../controllers/Research.controller.js";
import {UploadImg} from "../controllers/Research.controller.js";



const router = express.Router();

router.post('/create', CreateResearch);
router.get('/read',ReadResearch)
router.post('/upload',UploadImg)

export default router;
