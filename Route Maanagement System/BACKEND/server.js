const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO;

mongoose.connect(URL)  
.then(()=>{
    console.log("MongoDB Connection Success!");
    app.listen(PORT,()=>{
        console.log(`Server is up and running on Port Number: ${PORT}`)
    });
}).catch((err)=>{
    console.log(err);
});

const routeRouter = require("./routes/Routes");

http://localhost:3000/Route

app.use("/Route",routeRouter);