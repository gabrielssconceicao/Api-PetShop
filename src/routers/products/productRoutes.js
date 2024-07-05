const { Router } = require('express');
const ProductController = require('../../controllers/ProductController');
const router = Router();

router.get('/', async (req, res) => {
  const controller = new ProductController();
  const { body, status } = await controller.findAll();
  res.status(status).send(body);
});

module.exports = router;
