const mongoose = require('mongoose');
const Dashboard = require('../models/Dashboard');
require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000 // Increase timeout to 5
        }); 

        // const updates = [
        //     {
        //         title: 'COVID-19 Updates',
        //         description: 'Stay informed with the latest COVID-19 updates. Here you can find various resources and information.',
        //         readmore: 'You can find more information at the official documentation'
        //     },
        //     {
        //         title: 'Seasonal Flu Prevention',
        //         description: 'Learn how to protect yourself and others from the seasonal flu. Get tips on vaccination, hygiene, and more.',
        //         readmore: 'Visit the CDC website for more information on flu prevention'
        //     },
        //     {
        //         title: 'Mental Health Awareness',
        //         description: 'Mental health is just as important as physical health. Find resources and support for mental well-being.',
        //         readmore: 'Explore mental health resources at the National Institute of Mental Health'
        //     }
        // ];

        // const dashboard = {
        //     title: 'Wellness Goals',
        //     content: [
        //         {
        //             title: 'Steps',
        //             value: 10000, 
        //             percentage: 80
        //         },
        //         {
        //             title: 'Active Time',
        //             value: 60,
        //             percentage: 75
        //         },
        //         {
        //             title: 'Sleep',
        //             value: 8,
        //             percentage: 90
        //         }
        //     ]
            
        // };

        // Dashboard.insertMany(dashboard)
        //     .then(() => {
        //         console.log('Data inserted...');
        //         mongoose.connection.close();
        //     })
        //     .catch(err => {
        //         console.error('Error inserting data:', err);
        //         mongoose.connection.close();
        //     });
        console.log("MongoDB connected...");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;