// route

const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');
router.post("/login",
    loginController.loginUser
);

module.exports = router;
