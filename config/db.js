const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURL');
require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }); 
        console.log("MongoDB connected...");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;