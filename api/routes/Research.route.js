import express from "express"
import { CreateResearch } from "../controllers/Research.controller.js";


const router = express.Router();

router.post('/create',CreateResearch)

export default router;