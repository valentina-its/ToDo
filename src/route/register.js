// register route
const express = require('express');
const router = express.Router();
const userController = require('../controller/register');

router.post("/register",
    userController.registerUser
);

module.exports = router;
