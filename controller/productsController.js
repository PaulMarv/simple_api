import Product from "../models/product.model.js";


//GET /api/products
export const getProducts = async (req, res, next) => {
  try {
      const products = await Product.find({});
      res.status(200).json(products);
  }catch(error){
      next(error);
  }
};

//GET /api/products/:id
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            const error = new Error('The product is not available')
            error.status = 404;
            return next(error)
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:"something went wrong !"})
    }
}


//POST /api/products
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
    res.status(500).json({message:"something went wrong !"})
  }
};

//PUT /api/products/:id
export const updateProduct = async (req, res, next ) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if(!product){
            const error = new Error('Product not found');
            error.status = 404;
            return next(error);
        }
        const updatedProduct = await Product.findById(req.params.id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:"something went wrong !"})
    }
}

//DELETE /api/products/:id
export const deleteProduct = async (req, res, next)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            const error = new Error('Product not found');
            error.status = 404;
            return next(error);
        }
        res.status(204).json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({message:"something went wrong !"})
    }
}
