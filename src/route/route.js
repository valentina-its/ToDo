// route

const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');
const registerController = require('../controller/register');

// Rotta per il login
router.post("/login",
    loginController.loginUser
);

// Rotta per la registrazione
router.post("/register",
    registerController.registerUser
);

module.exports = router;