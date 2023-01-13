const express = require("express");
const router = express.Router();

const planController = require("../controllers/planController");

const cartController = require("../controllers/cartController");

router.get("/list", planController.list);
router.get("/findone/:_id", planController.findOne);
router.delete("/delete/:_id", planController.delete);
router.patch("/edit", planController.edit);

router.post("/addtocart", cartController.addToCart);
router.post("/removefromcart", cartController.removeFromCart);
router.get("/listcart/:user", cartController.listCart);
router.post("/updatecart", cartController.updateCart);

module.exports = router;
