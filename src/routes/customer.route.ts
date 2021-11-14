import * as express from "express";
import {CustomerController} from "../controllers/customer.controller";
import {ICustomerController} from "../controllers/icustomer.controller";

const customers: ICustomerController = new CustomerController();
// customers = require('../controllers/customer.controller');
export const customerRouter = express.Router();

customerRouter.get("/", customers.customerList);

// Create a new Customer
customerRouter.post("/", customers.create);

// Retrieve all Customer
customerRouter.get("/", customers.findAll);

// Retrieve a single Customer with id
customerRouter.get("/:id", customers.findOne);

// Update a Customer with id
customerRouter.put("/:id", customers.update);

// Delete a Customer with id
customerRouter.delete("/:id", customers.delete);

// Create a new Customer
customerRouter.delete("/", customers.deleteAll);


