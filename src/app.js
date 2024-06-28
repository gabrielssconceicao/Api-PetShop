const express = require('express');
const router = require('./routes');
const App = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  return app;
};

module.exports = {
  App,
};
