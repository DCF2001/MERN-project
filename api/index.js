import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userResearch from './routes/Research.route.js';

dotenv.config();

const app = express();

// Increase the size of payload
app.use(express.urlencoded({ extended: true, parameterLimit: 100000, limit: '1000mb' }));
app.use(express.json({ limit: '1000mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });


app.use('/api/research', userResearch);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
