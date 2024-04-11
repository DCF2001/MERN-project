import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to the MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();

const PORT = 5003; // Change the port number to 5000 or any other available port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!!`);
});
