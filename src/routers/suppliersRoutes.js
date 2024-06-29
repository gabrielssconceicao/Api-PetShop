const { Router } = require('express');
const SuppliersController = require('../controllers/suppliersController');
const router = Router();

router.get('/', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.findAll();
  res.status(status).send(body);
});

router.get('/:id', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.findOne(req.params.id);
  res.status(status).send(body);
});

router.post('/', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.create(req.body);
  res.status(status).send(body);
});

router.put('/:id', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.update(req.params.id, req.body);
  res.status(status).send(body);
});

module.exports = router;
