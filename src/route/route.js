// route principale

const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');
const taskRoutes = require('./task');

// Route per autenticazione
router.post("/login", loginController.loginUser);
router.post("/register", loginController.registerUser);

// Integrazione delle route dei task
router.use('/tasks', taskRoutes);

module.exports = router;