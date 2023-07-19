// Imports
const express = require("express");
const {
  getItems,
  getOneItem,
  getAllBrands,
  getAllCategories,
  getAllProductTypes,
  getItemsByBrand,
  getItemsByCategory,
  getItemsByProductType,
} = require("../Controllers/Controllers");

// Initializations
const router = express.Router();

// All Routes

// Get all Items
router.get("/get-items", getItems);

// Get one item
router.post("/get-item", getOneItem);

// Get all brands
router.get("/brands", getAllBrands);

// Get all categories
router.get("/categories", getAllCategories);

// Get all product types
router.get("/product-types", getAllProductTypes);

// Get Item by Brand
router.post("/get-by-brand", getItemsByBrand);

// Get Item by Category
router.post("/get-by-category", getItemsByCategory);

// Get Item by ProductType
router.post("/get-by-product-type", getItemsByProductType);

// Exports
module.exports = router;
