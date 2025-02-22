const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define a schema and model for the updates
const updateSchema = new mongoose.Schema({
    title: String,
    description: String,
    readmore: String
});

// Export the router
module.exports = router;

const Update = mongoose.model('Update', updateSchema);

module.exports = Update;