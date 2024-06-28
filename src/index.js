const { App } = require('./app');
const { sequelize } = require('./db');
const app = App();

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
