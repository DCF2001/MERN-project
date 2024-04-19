import  express from "express";
import { createListing, deleteListing} from '../controllers/listing.controller.js'
import { verifyToken } from '../utiles/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', deleteListing)



export default router;