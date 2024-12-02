const express = require('express');
const router = express.Router();
const {registerUser, loginUser } = require('../controllers/authUser'); // Import the controller function

// POST request to register a const someFunction = require('../controllers/someController');

router.post('/register', registerUser);
router.post('/login', loginUser); 

module.exports = router;
