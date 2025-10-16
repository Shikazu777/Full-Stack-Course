const mongoose =require("mongoose");
const dotenv = require('dotenv');
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect((process.env.MONGO_URI || "mongodb://localhost:27017/socialmediadhanraj"),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("DB is connected ...")

    }
    catch(error){
        console.error("Error OPPS",error)
        process.exit(1)
    }
}

module.exports=connectDB