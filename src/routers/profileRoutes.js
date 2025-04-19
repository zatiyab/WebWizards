const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth');
const { getProfile, getDirectory } = require('../controllers/profileController');

// Profile routes
router.get('/profile/:id', isAuthenticated, getProfile);
router.get('/directory', isAuthenticated, getDirectory);
router.get('/edit-profile', isAuthenticated, (req, res) => res.render('editProfile.ejs'));

module.exports = router; 