import express from "express"
import {CreateResearch } from "../controllers/Research.controller.js";
import {ReadResearch } from "../controllers/Research.controller.js";
import {RReadResearch } from "../controllers/Research.controller.js";
import {RemoveResearch} from "../controllers/Research.controller.js";
import {UpdateResearch} from "../controllers/Research.controller.js";
import {RetrieveProducts} from "../controllers/Research.controller.js";




const router = express.Router();

router.post('/create', CreateResearch);
router.get('/read',ReadResearch)
router.get('/rread',RReadResearch)
router.delete('/remove/:researchId',RemoveResearch)
router.put('/update/:researchId',UpdateResearch)
router.get('/products',RetrieveProducts)





export default router;
