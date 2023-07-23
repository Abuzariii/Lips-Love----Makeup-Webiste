// Imports
const express = require("express");
const { placeOrder } = require("../../Controllers/Orders/orders");

// Initializations
const router = express.Router();

router.post("/place-order", placeOrder);

module.exports = router;
