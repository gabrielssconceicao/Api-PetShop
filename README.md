# PetShop API

**Author**: Gabriel Conceição

The author of this code is Gabriel Conceição. 

You can find the project on GitHub [here](https://github.com/gabrielssconceicao/Api-Rest-Mysql-Sequelize).

## Table of Contents

- [PetShop API](#petshop-api)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Routes](#routes)
    - [Suppliers](#suppliers)
      - [Create Supplier](#create-supplier)
      - [Update Supplier](#update-supplier)
      - [Get All Suppliers](#get-all-suppliers)
      - [Get Supplier by Id](#get-supplier-by-id)
      - [Delete Supplier](#delete-supplier)
  - [Database](#database)
    - [MySQL](#mysql)
    - [Sequelize](#sequelize)

## Introduction

This API allows the management of suppliers and products for a pet shop, facilitating CRUD operations for both.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/usuario/repo.git
cd repo
npm install
```

## Configuration

- Rename the `.env-example` file to `.env`.
- Update the `.env` file with your database configuration and other necessary environment variables.

## Routes

### Suppliers

#### Create Supplier

- **Route**: `POST /api/suppliers`
  
- **Description**: Create a new Supplier
  
- **Request Body**:
  
  - ``company (string, required)``: Name of the company, between 3 and 255 characters.

  - ``email (string, required)``: Email of the company, must be a valid email.
  
  - ``category (string, required)``: Category of the supplier, must be 'food' or 'toys'.
  
#### Update Supplier

- **Route**: `PUT /api/suppliers/:id`
  
- **Description**:Updates an existing supplier.

- **URL Params**:
  - `id` (integer, required): ID of the supplier to be updated.
  
- **Request Body**:
  
  - `company` (string, optional): Name of the company, between 3 and 255 characters.

  - `email` (string, optional): Email of the company, must be a valid email.
  
  - `category` (string, optional): Category of the supplier, must be 'food' or 'toys'.
  
#### Get All Suppliers

- **Route**: `GET /api/suppliers`
  
- **Description**: Returns all suppliers.
  
#### Get Supplier by Id

- **Route**: `GET /api/suppliers/:id`
  
- **Description**: Returns a specific supplier.

- - **URL Params**:
  - `id` (integer, required): ID of the supplier to be returned.
  
#### Delete Supplier

- **Route**: `DELETE /api/suppliers/:id`
  
- **Description**: Returns all suppliers.
  
- **URL Params**:
  - `id` (integer, required): ID of the supplier to be deleted.
  
## Database

### MySQL
This API uses MySQL as the relational database management system.

### Sequelize
Sequelize is used as the ORM (Object-Relational Mapping) for interacting with the MySQL database.


