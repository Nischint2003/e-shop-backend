const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

// GET ALL PRODUCTS
router.get("/get-all", productController.getAllProducts);

// GET TOP PRODUCTS
router.get("/top", productController.getTopProducts);

// GET SINGLE PRODUCTS
router.get("/:id", productController.getSingleProduct);

// CREATE PRODUCT
router.post(
  "/create",
  isAuth,
  isAdmin,
  singleUpload,
  productController.createProduct
);

// UPDATE PRODUCT
router.put("/:id", isAuth, isAdmin, productController.updateProduct);

// UPDATE PRODUCT IMAGE
router.put(
  "/image/:id",
  isAuth,
  isAdmin,
  singleUpload,
  productController.updateProductImage
);

// delete product image
router.delete(
  "/delete-image/:id",
  isAuth,
  isAdmin,
  productController.deleteProductImage
);

// delete product
router.delete("/delete/:id", isAuth, isAdmin, productController.deleteProduct);

// REVIEW PRODUCT
router.put("/:id/review", isAuth, productController.productReview);

module.exports = router;
