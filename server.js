const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/api/auth');
const cors = require('cors'); // Import the cors package
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('API Running'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', require('./routes/api/contact'));

// Define Routes
app.use('/api/home', require('./routes/api/home'));

app.use('/api/dashboard', require('./routes/api/dashboard'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/goals', require('./routes/api/goals'));
app.use('/api/messages', require('./routes/api/messages'));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});