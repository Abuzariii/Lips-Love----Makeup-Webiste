// Imports
const express = require("express");
const {
  getItems,
  getUniqueItems,
  getUniqueItemsCount,
} = require("../Controllers/Controllers");

// Initializations
const router = express.Router();

// All Routes

// Get all Items
router.get("/get-items", getItems);

// Get unique product types
router.post("/get-unique-items", getUniqueItems);

// Get count of unique product types
router.post("/get-unique-items-count", getUniqueItemsCount);

// Exports
module.exports = router;
