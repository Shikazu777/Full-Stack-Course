const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
// calling db config
connectDB();

app.get("/",(req,res)=>{
    res.send('API is running')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log("Server is running at the PORT",PORT))