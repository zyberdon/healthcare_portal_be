const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @routes  GET api/messages
// @desc    patient messages page route
// @access  Private
router.get('/', auth, (req, res) => res.send('Message Router'));

module.exports = router;