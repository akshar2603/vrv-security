const mongoose = require('mongoose');

const UserUpload = new mongoose.Schema({
        filename: { type: String, required: true },  // File name
        path: { type: String, required: true },     // Path to file
        size: { type: Number, required: true },     // File size in bytes
        uploadedAt: { type: Date, default: Date.now }, // Timestamp
});



module.exports = mongoose.model('UserUpload', UserUpload);
