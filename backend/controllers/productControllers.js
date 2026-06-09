import mongoose from "mongoose";

const db = mongoose.connect("../models/db"); // database connection

exports.getProductetails = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await db.findProductById(productId);

    if (!product) {
      return res.status(404).json({ message: "product not fount" });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    return status(500).json({ message: "Server error", error });
  }
};
