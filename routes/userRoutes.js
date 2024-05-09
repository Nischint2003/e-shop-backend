const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { singleUpload } = require("../middleware/multer");

//routes
// register
router.post("/register", userController.register);

//login
router.post("/login", userController.login);

//user profile
router.get("/profile", authMiddleware.isAuth, userController.getUserProfile);

//logout
router.get("/logout", authMiddleware.isAuth, userController.logout);

//update userProfile
router.put(
  "/update-profile",
  authMiddleware.isAuth,
  userController.updateProfile
);

//update password
router.put(
  "/update-password",
  authMiddleware.isAuth,
  userController.updatePassword
);

//update profile picture
router.put(
  "/update-password",
  authMiddleware.isAuth,
  singleUpload,
  userController.updateProfilePic
);

// FORGOT PASSWORD
router.post("/reset-password", userController.passwordReset);

module.exports = router;
