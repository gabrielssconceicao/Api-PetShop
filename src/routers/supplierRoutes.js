const { Router } = require('express');
const SupplierController = require('../controllers/SupplierController');
const productRoutes = require('./productRoutes');
const validateSupplier = require('../middlewares/validateSupplier');

const router = Router();

router.get('/', async (req, res) => {
  const controller = new SupplierController();
  const { body, status } = await controller.findAll();
  res.status(status).send(body);
});

router.post('/', async (req, res) => {
  const controller = new SupplierController();
  const { body, status } = await controller.create(req.body);
  res.status(status).send(body);
});

router.get('/:id', async (req, res) => {
  const controller = new SupplierController();
  const { body, status } = await controller.findOne(req.params.id);
  res.status(status).send(body);
});

router.put('/:id', async (req, res) => {
  const controller = new SupplierController();
  const { body, status } = await controller.update(req.params.id, req.body);
  res.status(status).send(body);
});

router.delete('/:id', async (req, res) => {
  const controller = new SupplierController();
  const { body, status } = await controller.delete(req.params.id);
  res.status(status).send(body);
});

router.use('/:idSupplier/products', validateSupplier, productRoutes);

module.exports = router;
