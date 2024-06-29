const { Router } = require('express');
const suppliersRoutes = require('./suppliersRoutes');

const router = Router();

router.use('/api/suppliers', suppliersRoutes);

module.exports = router;
