const express = require("express");
const { uploadUserDetails } = require("../../Controllers/Users/usersDetails");

// Initializations
const router = express.Router();

router.post("/user-details", uploadUserDetails);

module.exports = router;
