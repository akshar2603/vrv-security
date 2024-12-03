
const multer = require('multer');
const path = require('path');

const uploadPath = path.join(__dirname, '../uploading things')
// Configure multer storage
console.log('called storage')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
console.log('called configure')
// Configure multer instance
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        
        if (file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('Only .jpg files are allowed!'), false);
        }
    },
})

module.exports = upload;