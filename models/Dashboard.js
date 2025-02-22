const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a schema and model for the updates
const dashboardSchema = new mongoose.Schema({
    title: String,
    content: Object,
});

// Export the router
module.exports = router;

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;