const express = require("express");
const router = express.Router();
const controller = require("../controllers/drugController");

router.get("/all", controller.findAll);
router.post("/", controller.create);
router.get("/category/:categoryId", controller.findByCategoryId);
router.get("/:id", controller.findById);
router.delete("/:id", controller.deleteById);
router.get("/search/:name", controller.findDrugsByName);


module.exports = router;
