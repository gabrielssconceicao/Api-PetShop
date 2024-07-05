const { Router } = require('express');
const supplierRoutes = require('./supplierRoutes');
const productRoutes = require('./products/productRoutes');
const router = Router();

router.use('/api/suppliers', supplierRoutes);
router.use('/api/products', productRoutes);

module.exports = router;
