import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ReportgenerateRouter from '../api/routes/Reportgenerateroutes.js';
import RequestReportRouter from './routes/RequestReportroutes.js';
import PaymentsRouter from './routes/Paymentsroutes.js';
import cors from "cors";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
    }).catch((err) => {
        console.log(err);
    })

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () =>{
    console.log('server is runningn on port 3000');
}
);

app.use('/Reportgenerate',ReportgenerateRouter);
app.use('/RequestReport',RequestReportRouter);
app.use('/Payments',PaymentsRouter);
export default app;