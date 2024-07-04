const { Router } = require('express');
const ProductsController = require('../controllers/productController');

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
  const { body, status } = await controller.findOne(...req.params);
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
  // const { supplierId, productId } = req.params;
  // const data = { ...req.body, req.params };
  const { body, status } = await controller.update({
    ...req.body,
    ...req.params,
  });
  res.status(status).send(body);
});

router.delete('/:productId', async (req, res) => {
  const controller = new ProductsController();
  // data = { id: req.params.productId, supplierId: req.params.idSupplier };
  const { body, status } = await controller.delete(...req.params);
  res.status(status).send(body);
});

router.post('/:productId/reduce-stock', async (req, res) => {
  const controller = new ProductsController();
  // const { idSupplier, productId } = req.params;
  // const data = { ...req.body, supplierId: idSupplier, id: productId };
  const { body, status } = await controller.reduceStock({
    ...req.body,
    ...req.params,
  });
  res.status(status).send(body);
});

module.exports = router;
