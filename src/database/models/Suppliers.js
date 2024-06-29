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
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('food', 'toys'),
    allowNull: false,
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
  timestamps: false,
  freezeTableName: true,
  underscored: true,
};

module.exports = database.define('Suppliers', columns, options);
