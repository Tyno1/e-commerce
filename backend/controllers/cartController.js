const Cart = require("../models/cart");
const Status = require("../models/status");

// Create a new cart item
exports.createCartItem = async (req, res) => {
  try {
    const { userId, drugId, quantity, status } = req.body;
    const pending = await Status.findOne({ name: "pending" });
    const cartItem = new Cart({
      userId,
      drugId,
      quantity,
      status: pending._id,
    });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all cart items for a user
exports.getCartItemsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartItems = await Cart.find({ userId })
      .populate({
        path: "drugId",
        populate: {
          path: "category",
          model: "Category", // Adjust the model name if necessary
        },
      })
      .populate("status");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get cart items by status ID
exports.getCartItemsByStatusId = async (req, res) => {
  try {
    const statusId = req.params.statusId;
    const cartItems = await Cart.find({ status: statusId })
      .populate("userId")
      .populate("drugId")
      .populate("status");
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update quantity of a cart item
exports.updateCartItem = async (req, res) => {
  try {
    const { quantity, status } = req.body;
    const cartItemId = req.params.cartItemId;
    const updatedCartItem = await Cart.findByIdAndUpdate(
      cartItemId,
      { quantity, status },
      { new: true }
    );
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a cart item
exports.deleteCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    await Cart.findByIdAndDelete(cartItemId);
    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
