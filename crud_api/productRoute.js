const express = require('express')
// const Product=require('./product.model.js')
const router = express.Router()
const { getProduct, getProducts, updateProduct, deleteProduct, createProduct } = require('./productControl.js')

console.log(typeof(getProduct));


router.get('/:id', getProduct);

router.get('/', getProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router