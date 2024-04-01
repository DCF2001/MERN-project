import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userResearch from './routes/Research.route.js';

dotenv.config();


mongoose.connect(process.env.MONGO).then(() =>{
  console.log("Connected to mongoDB");
}).catch ((err) =>{
  console.log(err);
})

const app = express();

app.use (express.json());

app.use('/api/research',userResearch);




app.listen(3000,()=>{
  console.log ('Server is running on port 3000');
}
);


//middleware for error haddlig.. 
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

