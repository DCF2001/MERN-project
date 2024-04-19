import  express from "express";
import { createListing, deleteListing, updateListing} from '../controllers/listing.controller.js'
import { verifyToken } from '../utiles/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', deleteListing);
router.post('/update/:id', updateListing);



export default router;