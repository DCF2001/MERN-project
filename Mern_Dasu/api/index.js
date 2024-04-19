// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/vehicle.manager.route.js';
// import authRouter from './routes/authVehicle.route.js';

// dotenv.config();

// // mongoose.connect(process.env.MONGO).then(() => {
    
// //     //listen for reques
// //     console.log('Connected to the MongoDB')
// // }).catch((err) => {
// //     console.log(err);
// // });

// mongoose.connect("mongodb+srv://garabagemanagement:<12345678910@garbagemanagement.irccf0r.mongodb.net/")
// .then(()=> console.log("Connected to MongoDB"))
// .then(()=> {
//     app.listen(5000);
// })
// .catch((err)=> console.log((err)));

// //express app
// const app = express();

// //allow to access to JSON to server
// app.use(express.json());

// const PORT = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000

// //listen for request
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT} !!!`);
// });


// app.use('/api/uservehicle', userRouter);
// app.use('/api/authVehicle', authRouter);


// console.log("JK");


// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import userRouter from './routes/vehicle.manager.route.js';
// import authRouter from './routes/authVehicle.route.js';

// dotenv.config();
// console.log("Environment Variables:", process.env);

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Connected to MongoDB');
//     // Start the Express.js server after successfully connecting to MongoDB
//     const app = express();
//     app.use(express.json());
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
//     // Mount routers
//     app.use('/api/uservehicle', userRouter);
//     app.use('/api/authVehicle', authRouter);
// })
// .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
// });


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import vehiclerouter from './routes/vehicle.route.js';

dotenv.config();
const app = express();

//Middleware
app.use(express.json());
app.use("/Vehicles", vehiclerouter);


mongoose.connect("mongodb+srv://garabagemanagement:12345678910@garbagemanagement.irccf0r.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));
