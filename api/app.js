import express from "express";
import cors from "cors";
import "dotenv/config";
import createtaskroutes from "./routes/createtaskroutes.js";
import routerequestsroutes from "./routes/routerequestsroutes.js";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import vehiclerequestRouter from './routes/vehiclerequestroute.js';
import userResearch from './routes/Research.route.js';
import cookieParser from 'cookie-parser';
import reportRouter from './routes/report.route.js';
import { getReports, createReport } from './routes/report.route.js';
// import staffmember from './routes/staffmembers.js';
// import staffrequests from './routes/staffrequests.js';
// import staffsalaries from './routes/staffsalaries.js';
import garbageRouter from './routes/garbageRouteFunction.js';
const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());


app.use(cookieParser());

//Including Routers

app.use('/createtask', createtaskroutes);
app.use('/routerequests', routerequestsroutes);
app.use('/user' , userRouter);
app.use('/auth' ,authRouter);
app.use('/vehiclerequests' ,vehiclerequestRouter);
app.use('/research',userResearch);
app.use('/report' , reportRouter); 
// app.use('/staffmembers',staffmember);
// app.use('/staffrequests',staffrequests);
// app.use('/staffsalaries',staffsalaries);
app.use('/garbageRouter',garbageRouter);

app.get('/', (req, res) => {
    res.send('Server is Running! 🚀');
})

export default app;