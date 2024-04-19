const Status = require("../models/status");

// Create a new status
exports.createStatus = async (req, res) => {
  try {
    const { name, description } = req.body;
    const status = new Status({ name, description });
    await status.save();
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all statuses
exports.getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.find();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get status by ID
exports.getStatusById = async (req, res) => {
  try {
    const statusId = req.params.id;
    const status = await Status.findById(statusId);
    if (!status) {
      res.status(404).json({ error: "Status not found" });
      return;
    }
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update status
exports.updateStatus = async (req, res) => {
  try {
    const statusId = req.params.id;
    const { name, description } = req.body;
    const updatedStatus = await Status.findByIdAndUpdate(
      statusId,
      { name, description },
      { new: true }
    );
    res.status(200).json(updatedStatus);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete status
exports.deleteStatus = async (req, res) => {
  try {
    const statusId = req.params.id;
    await Status.findByIdAndDelete(statusId);
    res.status(200).json({ message: "Status deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
