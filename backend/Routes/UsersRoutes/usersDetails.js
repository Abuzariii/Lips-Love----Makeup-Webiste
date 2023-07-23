const express = require("express");
const {
  uploadUserDetails,
  updateUserDetails,
} = require("../../Controllers/Users/usersDetails");

// Initializations
const router = express.Router();

router.post("/user-details", uploadUserDetails);

router.put("/user-details/update", updateUserDetails);

module.exports = router;
