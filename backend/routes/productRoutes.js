import express from "express";
import {
  createProduct,
  getProducts,
  upateProducts,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.post('/add',createProduct) // create
router.get('/all',getProducts);  // read
router.put('/update/:id',upateProducts) // update
router.delete('/delete/:id',deleteProduct) // delete


export default router;
