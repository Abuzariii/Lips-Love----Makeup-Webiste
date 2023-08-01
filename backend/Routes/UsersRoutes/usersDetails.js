const express = require("express");
const {
  getUserDetails,
  uploadUserDetails,
  updateUserDetails,
} = require("../../Controllers/Users/usersDetails");

// Initializations
const router = express.Router();

router.post("/user-details/get", getUserDetails);

router.post("/user-details/upload", uploadUserDetails);

router.put("/user-details/update", updateUserDetails);

module.exports = router;
