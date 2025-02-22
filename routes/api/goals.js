const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @routes  GET api/goals
// @desc    patient wellness goals route
// @access  Private
router.get('/', auth, (req, res) => res.send('goals Router'));

module.exports = router;