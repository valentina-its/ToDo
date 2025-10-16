// route

const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');

router.post("/login",
    loginController.loginUser
);

router.post("/register",
    loginController.registerUser
);



module.exports = router;