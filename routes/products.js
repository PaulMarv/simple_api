import express from 'express';
import { getProducts, postProduct } from '../controller/productsController.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", postProduct);

export default router;