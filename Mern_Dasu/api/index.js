import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/vehicle.manager.route.js';
import authRouter from './routes/authVehicle.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    //listen for reques
    console.log('Connected to the MongoDB');
}).catch((err) => {
    console.log(err);
});

//express app
const app = express();

//allow to access to JSON to server
app.use(express.json());

const PORT = process.env.PORT || 4000; // Use the PORT environment variable or default to 5000

//listen for request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!!`);
});


app.use('/api/uservehicle', userRouter);
app.use('/api/authVehicle', authRouter);
