import express from 'express';
import { signUpDasu } from '../controllers/authVehicle.controller.js';

const router = express.Router();


router.post("/signUpDasu", signUpDasu);

export default router;