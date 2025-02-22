const express = require('express');
const router = express.Router();

// @routes  GET api/profile
// @desc    TEST route
// @access  public

router.get('/', (req, res) => res.send('Profile Router'));

module.exports = router;