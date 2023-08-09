// Imports
const express = require("express");
const { placeOrder, getOrders } = require("../../Controllers/Orders/orders");

// Initializations
const router = express.Router();

router.post("/place-order", placeOrder);

router.post("/get-orders", getOrders);

module.exports = router;
