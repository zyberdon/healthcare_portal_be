const express = require('express');
const router = express.Router();

// @routes  GET api/goals
// @desc    TEST route
// @access  public

router.get('/', (req, res) => res.send('goals Router'));

module.exports = router;