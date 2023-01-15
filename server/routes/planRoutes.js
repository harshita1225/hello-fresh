const express = require("express");
const router = express.Router();

const planController = require("../controllers/planController");

router.post("/add", planController.add);
router.get("/list", planController.list);
router.delete("/delete/:_id", planController.delete);
router.patch("/edit", planController.edit);

module.exports = router;
