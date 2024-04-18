import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/vehicle.manager.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();

const PORT = process.env.PORT || 4000; // Use the PORT environment variable or default to 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!!`);
});


app.use('/api/vehicle', userRouter);
