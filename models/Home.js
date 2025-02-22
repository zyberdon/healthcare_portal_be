const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a schema and model for the updates
const hospitalHomepageSchema = new mongoose.Schema({
    title: String,
    description: String,
    readmore: String
});

// Export the router
module.exports = router;

const HospitalHomepage = mongoose.model('HospitalHomepage', hospitalHomepageSchema);

module.exports = HospitalHomepage;