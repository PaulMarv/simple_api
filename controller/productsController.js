import Product from "../models/product.model.js";

export const getProducts = async (req, res, next) => {
  try {
      const products = await Product.find({});
      res.json(products);
  }catch(error){
      next(error);
  }
};
export const postProduct = async (req, res, next) => {
  try {
    if (
      !req.body.name ||
      !req.body.quantity ||
      !req.body.price 
    ) {
      const error = new Error("All fields are required");
      error.status = 400;
      return next(error);
    }
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
