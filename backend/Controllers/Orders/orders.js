const OrdersDetail = require("../../MongoDB/orders");

const placeOrder = async (req, res) => {
  const { email, orders } = req.body;

  try {
    // Find the existing order document with the given email
    let existingOrder = await OrdersDetail.findOne({ email });

    if (existingOrder) {
      // If the order exists, update the "orders" array by appending the new orders
      existingOrder.orders.push(...orders);
      await existingOrder.save();

      return res
        .status(200)
        .json({ message: `Order added for ${existingOrder.email}` });
    } else {
      // If the order doesn't exist, create a new order document
      const placed_order = await OrdersDetail.create({
        email,
        orders,
      });

      return res
        .status(200)
        .json({ message: `Order placed for ${placed_order.email}` });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { placeOrder };
