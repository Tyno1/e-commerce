const express = require("express");
const router = express.Router();
const controller = require("../controllers/statusController");

router.post("/", controller.createStatus);
router.get("/all", controller.getAllStatuses);
router.get("/:id", controller.getStatusById);
router.put("/:id", controller.updateStatus);
router.delete("/:id", controller.deleteStatus);

module.exports = router;
