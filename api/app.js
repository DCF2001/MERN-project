import express from "express";
import cors from "cors";
import "dotenv/config";
import createtaskroutes from "./routes/createtaskroutes.js";
import routerequestsroutes from "./routes/routerequestsroutes.js";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

app.use(cors());
app.use(express.json());

//Including Routers

app.use('/createtask', createtaskroutes);
app.use('/routerequests', routerequestsroutes);
app.use('/api/user' , userRouter);
app.use('/api/auth' ,authRouter);


app.get('/', (req, res) => {
    res.send('Server is Running! 🚀');
})

export default app;