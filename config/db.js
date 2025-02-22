const mongoose = require('mongoose');
const Dashboard = require('../models/Dashboard');
require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000
        }); 

        console.log("MongoDB connected...");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;