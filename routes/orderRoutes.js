const express = require("express");
const { isAdmin, isAuth } = require("../middleware/authMiddleware.js");
const orderController = require("../controller/orderController.js");

const router = express.Router();

//rroutes
// ============== ORDERS ROUTES ==================

// CREATE ORDERS
router.post("/create", isAuth, orderController.createOrder);

//  GET ALL ORDERS
router.get("/my-orders", isAuth, orderController.getAllOrders);

//  GET SINGLE ORDER DETAILS
router.get("/my-orders/:id", isAuth, orderController.singleOrderDetails);

// accept payments
router.post("/payments", isAuth, orderController.paymets);

/// ======== ADMIN PART ============

// get all order
router.get("/admin/get-all-orders", isAuth, isAdmin, orderController.getAllOrders);

// change order status
router.put("/admin/order/:id", isAuth, isAdmin, orderController.changeOrderStatus);

// ====================================================================

module.exports = router;
