import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    
console.log('Connected to mongoDB!');
}).catch((err) => {
    console.log(err); 
});

//express app
const app = express();

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({mssg:'Welcome to the app'})

})


//listen for requests
app.listen(process.env.PORT,() => {
    console.log('Server is running on port 3000');

});

app.use('/api/user', userRouter);
app.use('/api/auth',authRouter);