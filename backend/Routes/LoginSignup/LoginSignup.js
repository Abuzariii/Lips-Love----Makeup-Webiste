// Imports
const express = require("express");
const { signUp, Login } = require("../../Controllers/LoginSignup/LoginSignup");

// Initializations
const router = express.Router();

router.post("/signup", signUp);

router.post("/login", Login);

module.exports = router;
