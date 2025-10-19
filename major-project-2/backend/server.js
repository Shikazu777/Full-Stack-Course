const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());
// calling db config
connectDB();

app.get("/",(req,res)=>{
    res.send('API is running')
})

app.use('/api/auth',authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log("Server is running at the PORT",PORT))