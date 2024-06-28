const { Router } = require('express');
const { fornecedoresRoutes } = require('./fornecedores');
const router = Router();

router.use('/api/fornecedores', fornecedoresRoutes);

module.exports = router;
