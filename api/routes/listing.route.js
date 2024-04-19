import  express from "express";
import { createListing, deleteListing, updateListing, getListing} from '../controllers/listing.controller.js'
import { verifyToken } from '../utiles/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.delete('/delete/:id', deleteListing);
router.post('/update/:id', updateListing);
router.get('/get/:id', getListing);



export default router;