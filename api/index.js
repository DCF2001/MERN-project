import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/staffmemberroute.js';
import staffsalaries from './routes/staffsalaries.js';
import staffrequests from './routes/staffrequests.js';

//import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
        console.log('Connected to the MongoDB');
     }).catch((err) => {
         console.log(err);
     });
    
     const app = express();
    
    app.use(express.json());
    
     const PORT = 3000; // Change the port number to 5000 or any other available port
    
     app.listen(PORT, () => {
        console.log('Server is running on port ${PORT} !!!');
     });

app.use('/api/staffmember' , userRouter);
app.use('/api/staffsalaries',staffsalaries);
app.use('/api/staffrequests',staffrequests);
//app.use('/api/auth' ,authRouter);

