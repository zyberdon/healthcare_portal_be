const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const PatientDashboard = require('../../models/Dashboard');

// @routes  GET api/dashboard
// @desc    Fetch patient user dashboard
// @access  Private
router.get('/', auth, async (_, res) => {
    try {
        const dashboardData = await PatientDashboard.find();
        const responseObject = dashboardData;
        res.json(responseObject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', errorMessage: error.message });
    }
});

module.exports = router;