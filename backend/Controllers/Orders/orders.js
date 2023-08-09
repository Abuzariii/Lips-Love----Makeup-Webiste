const OrdersDetail = require("../../MongoDB/orders");
const jwt = require("jsonwebtoken");

const placeOrder = async (req, res) => {
  const { email, orders } = req.body;
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  try {
    const secret = "abuzar";
    jwt.verify(token, secret);

    let existingOrder = await OrdersDetail.findOne({ email });
    if (existingOrder) {
      existingOrder.orders.push(...orders);
      await existingOrder.save();
      return res
        .status(200)
        .json({ message: `Order added for ${existingOrder.email}` });
    } else {
      const placed_order = await OrdersDetail.create({
        email,
        orders,
      });
      return res
        .status(200)
        .json({ message: `Order placed for ${placed_order.email}` });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ TokenExpiredError: "Token has expired" });
    } else {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};

// Get all orders
const getOrders = async (req, res) => {
  const { email } = req.body;
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  try {
    const secret = "abuzar";
    jwt.verify(token, secret);

    let existingOrder = await OrdersDetail.findOne({ email });

    if (existingOrder) {
      return res.status(200).json(existingOrder);
    } else {
      return res.status(201).json({ message: "No previous orders" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ TokenExpiredError: "Token has expired" });
    } else {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};

module.exports = { placeOrder, getOrders };
