const Makeup = require("../../MongoDB/makeup");

// Get all Items
const getItems = async (req, res) => {
  try {
    const allItems = await Makeup.find({ price: { $ne: 0 } });
    // Filter items where price is not equal to "0" or "0.0"
    const items = allItems.filter(
      (item) => item.price !== "0" && item.price !== "0.0"
    );
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one item
const getOneItem = async (req, res) => {
  try {
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
    // Filter out null values from the brands array
    const filteredBrands = brands.filter((brand) => brand !== null);

    res.status(200).json(filteredBrands);
  } catch (error) {
    res.status(500).json({ error: "Error getting brands" });
  }
};

// Get Items by Brand
const getItemsByBrand = async (req, res) => {
  const brand = req.query.brand;
  try {
    const allItems = await Makeup.find({ brand: brand });
    // Filter items where price is not equal to "0" or "0.0"
    const items = allItems.filter(
      (item) => item.price !== "0" && item.price !== "0.0"
    );
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
    const allItems = await Makeup.find({ category: category });
    // Filter items where price is not equal to "0" or "0.0"
    const items = allItems.filter(
      (item) => item.price !== "0" && item.price !== "0.0"
    );
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
    const allItems = await Makeup.find({ product_type: product_type });
    // Filter items where price is not equal to "0" or "0.0"
    const items = allItems.filter(
      (item) => item.price !== "0" && item.price !== "0.0"
    );
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
