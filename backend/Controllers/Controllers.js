const Makeup = require("../MongoDB/makeup");
const mongoose = require("mongoose");

// Get all Items
const getItems = async (req, res) => {
  try {
    const items = await Makeup.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving items" });
  }
};

// Get unique items
const getUniqueItems = async (req, res) => {
  const { field } = req.body;

  try {
    const uniqueItems = await Makeup.distinct(`${field}`);
    res.json(uniqueItems);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving unique items" });
  }
};

// Get number of unique items
const getUniqueItemsCount = async (req, res) => {
  const { field } = req.body;

  try {
    const uniqueItems = await Makeup.aggregate([
      {
        $group: {
          _id: `$${field}`,
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          count: -1, // 1 for ascending order, -1 for descending order
        },
      },
    ]);
    res.json(uniqueItems);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving unique items" });
  }
};

// Exports
module.exports = {
  getItems,
  getUniqueItems,
  getUniqueItemsCount,
};
