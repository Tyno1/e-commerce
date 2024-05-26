require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const userTypeRoutes = require("./routes/userTypeRoutes");
const drugRoutes = require("./routes/drugRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const statusRoutes = require("./routes/statusRoutes");
const cartRoutes = require("./routes/cartRoutes");
const stripe = require("./routes/stripe");
const orderRoutes = require("./routes/orderRoutes");
const mailerSendRoutes = require("./routes/mailerSendRoute");

const app = express();
const uri =
  "mongodb+srv://tynoukus:n1F6tQKubglH3mLk@medikart.x35e3im.mongodb.net/?retryWrites=true&w=majority&appName=medikart";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(
  cors({
    origin: "https://medikart-server.onrender.com", // This allows all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static(process.env.STATIC_DIR));

app.use("/users", userRoutes);
app.use("/userTypes", userTypeRoutes);
app.use("/drugs", drugRoutes);
app.use("/categories", categoryRoutes);
app.use("/reviews", reviewRoutes);
app.use("/status", statusRoutes);
app.use("/cart", cartRoutes);
app.use("/stripe", stripe);
app.use("/orders", orderRoutes);
app.use("/mailersend", mailerSendRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
