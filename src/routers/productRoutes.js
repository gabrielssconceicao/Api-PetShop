const { Router } = require('express');
const ProductsController = require('../controllers/productController');
const ProductController = require('../controllers/productController');

const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.findAll(req.params.idSupplier);
  res.status(status).send(body);
});

router.post('/', async (req, res) => {
  const controller = new ProductsController();
  const { idSupplier } = req.params;

  const data = { ...req.body, supplierId: idSupplier };
  const { body, status } = await controller.create(data);
  res.status(status).send(body);
});

router.delete('/:productId', async (req, res) => {
  const controller = new ProductController();
  data = { id: req.params.productId, supplierId: req.params.idSupplier };
  const { body, status } = await controller.delete(data);
  res.status(status).send(body);
});

module.exports = router;
