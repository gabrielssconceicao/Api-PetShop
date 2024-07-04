const { Router } = require('express');
const supplierRoutes = require('./supplierRoutes');

const router = Router();

router.use('/api/suppliers', supplierRoutes);

module.exports = router;
