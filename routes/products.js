import express from 'express';
import { getProductById, getProducts, postProduct, updateProduct } from '../controller/productsController.js';

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById)
router.post("/", postProduct);
router.put("/:id", updateProduct);

export default router;