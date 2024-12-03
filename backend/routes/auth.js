const express = require('express');
const router = express.Router();
const {registerUser, loginUser } = require('../controllers/authUser'); // Import the controller function
const uploadController = require('../controllers/uploadController')
const uploadMult = require('../middleware/multer-config')
// POST request to register a const someFunction = require('../controllers/someController');

router.post('/register', registerUser);
router.post('/login', loginUser); 
router.post('/upload',uploadMult.single('file'),uploadController);
module.exports = router;
