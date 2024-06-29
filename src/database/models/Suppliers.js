const Sequelize = require('sequelize');

const database = require('..');

const { DataTypes } = Sequelize;

const columns = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'Company must be between 3 and 255 characters',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Invalid email',
      },
    },
  },
  category: {
    type: DataTypes.ENUM('food', 'toys'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['food', 'toys']],
        msg: 'Category must be food or toys',
      },
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
  tableName: 'suppliers',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  freezeTableName: true,
  underscored: true,
};

module.exports = database.define('Suppliers', columns, options);
