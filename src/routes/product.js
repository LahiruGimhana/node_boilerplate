const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const authenticate = require("../middleware/auth");

// GET /products - List all products (authenticated)
router.get("/", authenticate, async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
