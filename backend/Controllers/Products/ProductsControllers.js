const jwt = require("jsonwebtoken");
const Makeup = require("../../MongoDB/makeup");

// Get all Items
const getItems = async (req, res) => {
  try {
    const items = await Makeup.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one item
const getOneItem = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "abuzar");
    req.user = decoded; // Save the user information in the request object for later use

    // Proceed with the database query and sending the response
    const id = req.query.id;
    try {
      const item = await Makeup.findById(id);
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: "No such item exists" });
    }
  } catch (error) {
    res.status(403).json(error); // Return the error response here if token verification fails
  }
};

// Get all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await Makeup.distinct("brand");
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: "Error getting brands" });
  }
};

// Get Items by Brand
const getItemsByBrand = async (req, res) => {
  const brand = req.query.brand;
  try {
    const items = await Makeup.find({ brand: brand });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error getting items by brand" });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const category = await Makeup.distinct("category");
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error getting categories" });
  }
};

// Get Items by Category
const getItemsByCategory = async (req, res) => {
  const category = req.query.category;
  try {
    const items = await Makeup.find({ category: category });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error getting items by category" });
  }
};

// Get all Product Types
const getAllProductTypes = async (req, res) => {
  try {
    const product_type = await Makeup.distinct("product_type");
    res.status(200).json(product_type);
  } catch (error) {
    res.status(500).json({ error: "Error getting categories" });
  }
};

// Get Items by ProductType
const getItemsByProductType = async (req, res) => {
  const product_type = req.query.product_type;
  try {
    const items = await Makeup.find({ product_type: product_type });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Error getting items by product type" });
  }
};

// Exports
module.exports = {
  getItems,
  getOneItem,
  getAllBrands,
  getAllCategories,
  getAllProductTypes,
  getItemsByBrand,
  getItemsByCategory,
  getItemsByProductType,
};
