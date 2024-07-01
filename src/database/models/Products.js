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
    validate: {
      len: {
        args: [3, 255],
        msg: 'Name must be between 3 and 255 characters',
      },
      notNull: {
        msg: 'Name is required',
      },
    },
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: 'Price must be greater than 0',
      },
      notNull: {
        msg: 'Price is required',
      },
      isFloat: {
        msg: 'Price must be a number',
      },
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isInt: {
        msg: 'Stock must be an integer',
      },
    },
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
