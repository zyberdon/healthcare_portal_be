const express = require('express');
const router = express.Router();

// @routes  GET api/messages
// @desc    TEST route
// @access  public

router.get('/', (req, res) => res.send('Message Router'));

module.exports = router;