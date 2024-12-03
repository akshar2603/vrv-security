
const mongoose = require('mongoose');
const userUpload = require('../models/userUpload');
const uploadController  = async(req, res) => {
    try {
        const { filename, path: filePath, size } = req.file; // File metadata
        const currentDate = new Date();

        // Save file details to MongoDB
        const file = new userUpload({
            filename,
            path: filePath,
            size,
            uploadedAt: currentDate,
        });

        await file.save();

        res.json({ message: 'File uploaded successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
}

module.exports = uploadController; 