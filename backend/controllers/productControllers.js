import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// read all product
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update products
export const upateProducts = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// delete product
export const deleteProduct = async(req,res) =>{
 try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

