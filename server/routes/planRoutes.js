const express = require("express");
const router = express.Router();

const planController = require("../controllers/planController");

router.post("/add", planController.add);
router.get("/list", planController.list);
router.delete("/delete/:_id", planController.delete);
router.post("/edit", planController.edit);
router.get("/findone", planController.findone);

module.exports = router;
