const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const { getProfile, getDirectory, getEditProfile, editProfile } = require('../controllers/profileController');

// Profile routes
router.get('/profile/:id', isAuthenticated, getProfile);
router.get('/directory', isAuthenticated, getDirectory);
router.get('/edit-profile', isAuthenticated, getEditProfile);
router.post('/edit-profile', isAuthenticated, editProfile);

module.exports = router; 