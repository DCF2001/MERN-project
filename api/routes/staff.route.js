import express from 'express';
import { test, getListings } from '../controllers/staff.controller.js';


const router = express.Router();

router.get('/test', test);
router.get('/listings', getListings);

export default router; 
