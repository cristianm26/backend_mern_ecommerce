const express = require('express');
const { getAllProducts, getProductById } = require('../controllers/productController');

const router = express.Router();


//obtener todos los productos
router.get('/', getAllProducts)

//obtener un producto en especifico
router.get('/:id', getProductById)


module.exports = router;