const express = require('express');
const router = express.Router();
const Dashboard = require('../../models/Dashboard');

// @routes  GET api/dashboard
// @desc    Fetch health updates dashboard

router.get('/', async (_, res) => {
    try {
        const dashboardData = await Dashboard.find();
        const responseObject = dashboardData;
        res.json(responseObject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', errorMessage: error.message });
    }
});

module.exports = router;