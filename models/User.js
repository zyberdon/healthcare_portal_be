const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['patient', 'provider'],
        default: 'patient'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);