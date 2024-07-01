const { Router } = require('express');
const ProductsController = require('../controllers/productController');

const router = Router({ mergeParams: true });
router.get('/', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.findAll(req.params.idSupplier);
  res.status(status).send(body);
});

module.exports = router;
