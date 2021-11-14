"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
// const data = require('../models/customer.data');
// import {CustomerData} from "../models/customer.data";
const mongodb_1 = require("mongodb");
// const db = require('../models');
// const Customer = db.customers;
// exports.customerList = (req, res) => {
//   res.send('Hello this will return customer list');
// };
class CustomerController {
    constructor() {
        this.uri = process.env.uri || "";
        this.dbName = "TESTAPP";
        this.collectionName = "customers";
    }
    customerList() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("req geldi");
            return new Promise((resolve, reject) => {
                const client = new mongodb_1.MongoClient(this.uri);
                try {
                    client.connect();
                    const db = client.db(this.dbName);
                    const items = db.collection(this.collectionName).find();
                    resolve(items.toArray());
                    client.close();
                }
                catch (error) {
                    reject(error);
                }
            });
        });
    }
    // Create and Save a new Tutorial
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate request
            if (!req.body.name) {
                res.status(400).send({ message: "Content can not be empty!" });
                return;
            }
            return new Promise((resolve, reject) => {
                const client = new mongodb_1.MongoClient(this.uri);
                try {
                    client.connect();
                    const db = client.db(this.dbName);
                    const addedItem = db.collection("customers").insertOne(req.body.customer);
                    resolve(addedItem);
                    client.close();
                }
                catch (error) {
                    reject(error);
                }
            });
            // // Create a Customer
            // const customer: ICustomer = {
            //     id:  req.body.id,
            //     name: req.body.name,
            //     surname: req.body.surname,
            //     phone:  req.body.phone,
            //     birthdate:  req.body.birthdate,
            //     birthmonth:  req.body.birthmonth,
            //     birthyear:  req.body.birthyear,
            //     birthreminder:  req.body.birthreminder
            // };
            // // Save Customer in the database
            // customer
            //     .save(customer)
            //     .then(data => {
            //         res.send(data);
            //     })
            //     .catch(err => {
            //         res.status(500).send({
            //             message:
            //     err.message || "Some error occurred while creating the Customer."
            //         });
            //     });
        });
    }
    // Retrieve all Customers from the database.
    findAll() {
        // const name = req.query.name;
        // var condition = name
        //     ? { name: { $regex: new RegExp(name), $options: 'i' } }
        //     : {};
        // Customer.find(condition)
        //     .then((data) => {
        //     res.send(data);
        //     })
        //     .catch((err) => {
        //     res.status(500).send({
        //         message:
        //         err.message || 'Some error occurred while retrieving customers.',
        //     });
        //     });
    }
    // Find a single Customer with an id
    findOne() {
        // const id = req.params.id;
        // Customer.findById(id)
        //     .then((data) => {
        //     if (!data)
        //         res.status(404).send({ message: 'Not found Customer with id ' + id });
        //     else res.send(data);
        //     })
        //     .catch((err) => {
        //     res
        //         .status(500)
        //         .send({ message: 'Error retrieving Customer with id=' + id });
        //     });
    }
    // Update a Customer by the id in the request
    update() {
        // if (!req.body) {
        //     return res.status(400).send({
        //     message: 'Data to update can not be empty!',
        //     });
        // }
        // const id = req.params.id;
        // Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        //     .then((data) => {
        //     if (!data) {
        //         res.status(404).send({
        //         message: `Cannot update Customer with id=${id}. Maybe Customer was not found!`,
        //         });
        //     } else res.send({ message: 'Customer was updated successfully.' });
        //     })
        //     .catch((err) => {
        //     res.status(500).send({
        //         message: 'Error updating Customer with id=' + id,
        //     });
        //     });
    }
    // Delete a Customer with the specified id in the request
    delete() {
        // const id = req.params.id;
        // Customer.findByIdAndRemove(id)
        //     .then((data) => {
        //     if (!data) {
        //         res.status(404).send({
        //         message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
        //         });
        //     } else {
        //         res.send({
        //         message: 'Customer was deleted successfully!',
        //         });
        //     }
        //     })
        //     .catch((err) => {
        //     res.status(500).send({
        //         message: 'Could not delete Customer with id=' + id,
        //     });
        //     });
    }
    // Delete all Customers from the database.
    deleteAll() {
        // Customer.deleteMany({})
        //     .then((data) => {
        //     res.send({
        //         message: `${data.deletedCount} Customers were deleted successfully!`,
        //     });
        //     })
        //     .catch((err) => {
        //     res.status(500).send({
        //         message:
        //         err.message || 'Some error occurred while removing all customers.',
        //     });
        //     });
    }
}
exports.CustomerController = CustomerController;
// function As(arg0: import("bson").Document[], As: any, ICustomer: any) {
//     throw new Error("Function not implemented.");
// }
//# sourceMappingURL=customer.controller.js.map