const bcrypt = require('bcrypt');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  

// Register a new user
const registerUser = async (req, res) => {
    
    const { username, password, role } = req.body;

    // List of allowed roles
    const allowedRoles = ['user', 'moderator', 'admin'];

    
    if (!username || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate role
    if (!allowedRoles.includes(role)) {
        return res.status(400).json({ message: `Invalid role. Allowed roles are: ${allowedRoles.join(', ')}` });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Generate a JWT token for the new user
        
        const token = jwt.sign({},  process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(token)
        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            token
        });
        await newUser.save();
        // Send response with token
        res.status(201).json({
            message: 'User registered successfully',
            role, 
            token, 
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Login a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Find the user by username
        const user = await User.findOne({ username });
        console.log(user); 
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const payload = {
            user: {
                id: user._id,
                role: user.role,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send success response with the token
        res.status(200).json({
            role: user.role,
            token,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = {registerUser, loginUser};
