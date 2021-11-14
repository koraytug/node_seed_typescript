"use strict";
exports.__esModule = true;
exports.customerRouter = void 0;
var express = require("express");
var customer_controller_1 = require("../controllers/customer.controller");
var customers = new customer_controller_1.CustomerController();
// customers = require('../controllers/customer.controller');
exports.customerRouter = express.Router();
exports.customerRouter.get("/", customers.customerList);
// Create a new Customer
exports.customerRouter.post("/", customers.create);
// Retrieve all Customer
exports.customerRouter.get("/", customers.findAll);
// Retrieve a single Customer with id
exports.customerRouter.get("/:id", customers.findOne);
// Update a Customer with id
exports.customerRouter.put("/:id", customers.update);
// Delete a Customer with id
exports.customerRouter["delete"]("/:id", customers["delete"]);
// Create a new Customer
exports.customerRouter["delete"]("/", customers.deleteAll);
