import express from 'express';

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});// we can use any port num like 4000, 5000