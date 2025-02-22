const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a schema and model for the updates
const patientDashboardSchema = new mongoose.Schema({
    title: String,
    content: Object,
});

// Export the router
module.exports = router;

const PatientDashboard = mongoose.model('PatientDashboard', patientDashboardSchema);

module.exports = PatientDashboard;