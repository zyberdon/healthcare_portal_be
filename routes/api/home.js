const express = require('express');
const router = express.Router();
const Update = require('../../models/Home');

// @routes  GET api/home
// @desc    Fetch health updates
// @access  public

router.get('/', async (_, res) => {
    try {
        const updates = await Update.find();
        const responseObject = {
            title: 'Health Updates',
            content: updates
        };
        res.json(responseObject);
    } catch (error) {
        res.status(500).json({ message: 'Server error', errorMessage: error.message });
    }
});

module.exports = router;