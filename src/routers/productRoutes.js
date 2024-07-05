const { Router } = require('express');
const ProductsController = require('../controllers/ProductController');

const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.findAllBySupplier(
    req.params.supplierId
  );
  res.status(status).send(body);
});

router.get('/:productId', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.findOne({ ...req.params });
  res.status(status).send(body);
});

router.post('/', async (req, res) => {
  const controller = new ProductsController();
  const { supplierId } = req.params;
  const { body, status } = await controller.create({ ...req.body, supplierId });
  res.status(status).send(body);
});

router.put('/:productId', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.update({
    ...req.body,
    ...req.params,
  });
  res.status(status).send(body);
});

router.delete('/:productId', async (req, res) => {
  const controller = new ProductsController();
  const { body, status } = await controller.delete({ ...req.params });
  res.status(status).send(body);
});

module.exports = router;
