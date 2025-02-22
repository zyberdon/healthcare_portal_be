const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const HospitalHomepage = require('../../models/Home');

// @routes  GET api/home
// @desc    Fetch Hospital homepage
// @access  Private
router.get('/', auth, async (_, res) => {
    try {
        const homepageData = await HospitalHomepage.find();
        const responseObject = {
            title: 'Welcome To Hospital Portal',
            content: homepageData
        };
        res.json(responseObject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', errorMessage: error.message });
    }
});

module.exports = router;