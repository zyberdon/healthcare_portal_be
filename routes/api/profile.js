const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @routes  GET api/profile
// @desc    patient profile page route
// @access  Private
router.get('/', auth, (req, res) => res.send('Profile Router'));

module.exports = router;