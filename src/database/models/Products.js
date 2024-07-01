const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const database = require('..');
const Supplier = require('./Suppliers');

const columns = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  supplierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Supplier,
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

const options = {
  tableName: 'products',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  freezeTableName: true,
  underscored: false,
};

const Product = database.define('Products', columns, options);
Product.belongsTo(Supplier);
Supplier.hasMany(Product, {
  foreignKey: 'supplierId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
module.exports = Product;
