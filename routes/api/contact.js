const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Contact = require('../../models/Contact');

// @route   POST api/contact
// @desc    Submit non logged user contact form
// @access  Private
router.post('/', auth, async (req, res) => {
    const { username, email, message } = req.body;
    
    // Validate input
    if (!username || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Create new contact submission
        const newContact = new Contact({
            username,
            email,
            message
        });

        const contact = await newContact.save();
        res.status(201).json({ contact, message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;