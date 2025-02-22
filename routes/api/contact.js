const express = require('express');
const router = express.Router();
const Contact = require('../../models/Contact');

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
    const { username, email } = req.body;
    console.log("username===", username);
    // Validate input
    if (!username || !email) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Create new contact submission
        const newContact = new Contact({
            username,
            email
        });

        const contact = await newContact.save();
        res.status(201).json({ contact, message: 'Contact form submitted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;