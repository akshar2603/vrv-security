const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const authorize = require('../middleware/role');

// Admin-only route
router.get('/admin', authenticate, authorize('Admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

// Moderator-only route
router.get('/moderator', authenticate, authorize('Moderator'), (req, res) => {
  res.json({ message: 'Welcome Moderator!' });
});

// User-only route
router.get('/user', authenticate, authorize('User', 'Admin'), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

module.exports = router;
