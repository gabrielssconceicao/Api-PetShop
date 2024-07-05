# PetShop API

**Author**: Gabriel Conceição

You can find the project on GitHub [here](https://github.com/gabrielssconceicao/Api-Rest-Mysql-Sequelize).

## Table of Contents

- [PetShop API](#petshop-api)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Database](#database)
    - [MySQL](#mysql)
    - [Sequelize](#sequelize)
  - [Installation](#installation)
    - [Clone the repository:](#clone-the-repository)
    - [Install Dependences](#install-dependences)
    - [Configuration](#configuration)
    - [Run the project](#run-the-project)
  - [Supported Data Formats](#supported-data-formats)
    - [Header Examples](#header-examples)
  - [Routes](#routes)
    - [Suppliers](#suppliers)
      - [Create Supplier](#create-supplier)
      - [Update Supplier](#update-supplier)
      - [Get All Suppliers](#get-all-suppliers)
      - [Get Supplier by Id](#get-supplier-by-id)
      - [Delete Supplier](#delete-supplier)
    - [Products](#products)
      - [Find All Products](#find-all-products)
      - [Create Product](#create-product)
      - [Find All Products by Supplier](#find-all-products-by-supplier)
      - [Find Product by Supplier and Id](#find-product-by-supplier-and-id)
      - [Update Product](#update-product)
      - [Delete Product](#delete-product)

## Introduction

This API allows the management of suppliers and products for a pet shop, facilitating CRUD operations for both.

## Database

### MySQL
This API uses MySQL as the relational database management system.

### Sequelize
Sequelize is used as the ORM (Object-Relational Mapping) for interacting with the MySQL database.


## Installation

### Clone the repository:

```bash
git clone https://github.com/usuario/repo.git
cd repo
```

### Install Dependences

```bash
npm install
```

### Configuration

- Rename the `.env-example` file to `.env`.
- Update the `.env` file with your database configuration and other necessary environment variables.

### Run the project
```bash
npm start
```

## Supported Data Formats

The API accepts and returns data in JSON format. Make sure to set the appropriate headers for your HTTP requests.

### Header Examples

To send a request with JSON data, use the `Content-Type: application/json` header.

## Routes

### Suppliers

#### Create Supplier

- **Method**: `POST`

- **Route**: `/api/suppliers`
  
- **Description**: Create a new Supplier
  
- **Request Body**:
  
  - `company (string, required)`: Name of the company, between 3 and 255 characters.
  - `email (string, required)`: Email of the company, must be a valid email.
  - `category (string, required)`: Category of the supplier, must be 'food' or 'toys'.
  
#### Update Supplier

- **Method**: `PUT` 

- **Route**: `/api/suppliers/:id`
  
- **Description**:Updates an existing supplier.

- **URL Params**:
  - `id (integer, required)`: ID of the supplier to be updated.
  
- **Request Body**:
  
  - `company (string, optional)`: Name of the company, between 3 and 255 characters.
  - `email (string, optional)`: Email of the company, must be a valid email.
  - `category (string, optional)`: Category of the supplier, must be 'food' or 'toys'.
  
#### Get All Suppliers

- **Method**: `GET`

- **Route**: `/api/suppliers`
  
- **Description**: Returns all suppliers.
  
#### Get Supplier by Id

- **Method**: `GET`

- **Route**: `/api/suppliers/:id`
  
- **Description**: Returns a specific supplier.

- **URL Params**:
  - `id (integer, required)`: ID of the supplier to be returned.
  
#### Delete Supplier

- **Method**: `DELETE`

- **Route**: `/api/suppliers/:id`
  
- **Description**: Returns all suppliers.
  
- **URL Params**:
  - `id (integer, required)`: ID of the supplier to be deleted.

### Products

#### Find All Products

- **Method**: `GET`

- **Route**: `/api/products`

- **Description**: Returns all the products sold by all suppliers.
  

Before the route is called, it will be checked whether the supplier exists.

#### Create Product

- **Method**: `POST`

- **Route**: `/api/suppliers/:supplierId/products`
  
- **Description**: Create a new product to the given supplier.

- **URL Params**:
  - `supplierId` (integer, required): ID of the supplier.

- **Request Body**:
  - `name` (string, required): Name of the product, between 3 and 255 characters.
  - `price`(float, required): Price of the product.
  - `stock` (integer, required): Quantity on stock.
  
#### Find All Products by Supplier

- **Method**: `GET`

- **Route**: `/api/suppliers/:supplierId/products`
  
- **Description**: Returns all the products sold by that supplier.

- **URL Params**:
  - `supplierId` (integer, required): ID of the supplier.

#### Find Product by Supplier and Id

- **Method**: `GET`

- **Route**: `/api/suppliers/:supplierId/products/:productId`
  
- **Description**: Returns the product of a supplier.

- **URL Params**:
  - `supplierId` (integer, required): ID of the supplier.
  - `productId` (integer, required): ID of the product.

#### Update Product

- **Method**: `POST`

- **Route**: `/api/suppliers/:supplierId/products/:productId`
  
- **Description**:Update an existing product.

- **URL Params**:
  - `supplierId` (integer, required): ID of the supplier.
  - `productId` (integer, required): ID of the product.

- **Request Body**:
  - `name` (string, optinal): Name of the product, between 3 and 255 characters.
  - `price`(float, optinal): Price of the product.
  - `stock` (integer, optinal): Quantity on stock.

#### Delete Product

- **Method**: `DELETE`

- **Route**: `/api/suppliers/:supplierId/products/:productId`
  
- **Description**: Delete an existing product.

- **URL Params**:
  - `supplierId` (integer, required): ID of the supplier.
  - `productId` (integer, required): ID of the product.

