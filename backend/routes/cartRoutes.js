const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController")


router.post("/", controller.createCartItem)
router.get("/user/:userId", controller.getCartItemsByUserId)
router.put("/:cartItemId", controller.updateCartItem)
router.delete("/:cartItemId", controller.deleteCartItem)


module.exports = router;