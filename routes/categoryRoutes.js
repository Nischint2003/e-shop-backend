const express = require("express");
const { isAdmin, isAuth } = require("../middleware/authMiddleware.js");
const categoryController = require("../controller/categoryController.js");

const router = express.Router();

//rroutes
// ============== CAT ROUTES ==================

// CREATE CATEGORY
router.post("/create", isAuth, isAdmin, categoryController.createCategory);

// GET ALL CATEGORY
router.get("/get-all", categoryController.getAllCategories);

// DELETE  CATEGORY
router.delete(
  "/delete/:id",
  isAuth,
  isAdmin,
  categoryController.deleteCategory
);

// UPDATE ALL CATEGORY
router.put("/update/:id", isAuth, isAdmin, categoryController.updateCategory);

// ====================================================================

module.exports = router;
