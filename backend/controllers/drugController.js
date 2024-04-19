const Drug = require("../models/drug");
const mongoose = require("mongoose");

// create a drug
module.exports.create = async (req, res, next) => {
  try {
    const {
      name,
      description,
      imageUrl,
      drug_form,
      price,
      category,
      dose,
      manufacturer,
    } = req.body;

    if (!name) throw new Error("No name provided");
    if (!description) throw new Error("No description provided");
    if (!imageUrl) throw new Error("No image provided");
    if (!drug_form) throw new Error("No drug form provided");
    if (!price) throw new Error("No price provided");
    if (!category) throw new Error("No category provided");
    if (!manufacturer) throw new Error("No manufacturer provided");
    if (!dose) throw new Error("No dose provided");

    // const options = {
    //   use_filename: true,
    //   unique_filename: false,
    //   overwrite: true,
    // };

    // let response = await cloudinary.uploader.upload(imageUrl, options);

    const newDrug = new Drug({
      name,
      description,
      imageUrl,
      drug_form,
      price,
      category,
      manufacturer,
      dose,
    });
    await newDrug.save();
    res.status(201).json(newDrug);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error?.message });
  }
};

// read all drugs
module.exports.findAll = async (req, res, next) => {
  const limit = 25;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  // Get the category ID parameter from the request query
  const categoryId = req.query.categoryId;

  try {
    let drugs;
    // If categoryId parameter is provided, add category filter to the query
    if (categoryId) {
      drugs = await Drug.find({ category: categoryId })
      .populate("category")
      .skip(skip)
      .limit(limit)
      .exec();
    } else {
      drugs = await Drug.find()
      .populate("category")
      .skip(skip)
      .limit(limit)
      .exec();
    }

    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// read drug by id
module.exports.findById = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id).populate("category");
    if (!drug) {
      res.status(404).json({ error: "Drug not found" });
      return;
    }
    res.status(200).json(drug);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//   find drug by category id
module.exports.findByCategoryId = async (req, res) => {
  try {
    const drugs = await Drug.find({ category: req.params.categoryId }).populate(
      "category"
    );
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a drug by ID
module.exports.deleteById = async (req, res) => {
  try {
    await res.drug.remove();
    res.json({ message: "Drug deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
