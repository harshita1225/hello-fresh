const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/emailconfirm", userController.emailConfirm);
router.post("/forgotpass", userController.forgotPass);
router.post("/changepassword", userController.changePass);
router.get("/logout", userController.logout);

module.exports = router;
