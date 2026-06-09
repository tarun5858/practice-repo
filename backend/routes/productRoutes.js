import express from 'express';
import productController from '../controllers/productControllers.js'

const router = express.Router();
const prouctController = require('../controllers/productController');

router.get('/product/:id',prouctController.getProductDetails);

export default router;