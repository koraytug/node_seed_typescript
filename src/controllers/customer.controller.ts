// const data = require('../models/customer.data');
// import {CustomerData} from "../models/customer.data";
import {MongoClient} from "mongodb";
// import {ICustomer} from "../models/icustomer";
import {ICustomerController} from "./icustomer.controller";
// const db = require('../models');
// const Customer = db.customers;
// exports.customerList = (req, res) => {
//   res.send('Hello this will return customer list');
// };
export class CustomerController implements ICustomerController {
    private uri: string = process.env.uri || "";
    private dbName = "TESTAPP";
    private collectionName = "customers";

    public async customerList() {
        console.log("req geldi");

        return new Promise((resolve, reject) => {
            const client = new MongoClient(this.uri);
            try {
                client.connect();
                const db = client.db(this.dbName);

                const items = db.collection(this.collectionName).find();
                resolve(items.toArray());
                client.close();
            } catch (error) {
                reject(error);
            }
        });

    }

    // Create and Save a new Tutorial
    public async create(req, res) {
    // Validate request
        if (!req.body.name) {
            res.status(400).send({message: "Content can not be empty!"});
            return;
        }

        return new Promise((resolve, reject) => {
            const client = new MongoClient(this.uri);
            try {
                client.connect();
                const db = client.db(this.dbName);
                const addedItem = db.collection("customers").insertOne(req.body.customer);

                resolve(addedItem);
                client.close();
            } catch (error) {
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
    }

    // Retrieve all Customers from the database.
    public findAll() {
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
    public findOne() {
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
    public update() {
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
    public delete() {
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
    public deleteAll() {
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
// function As(arg0: import("bson").Document[], As: any, ICustomer: any) {
//     throw new Error("Function not implemented.");
// }

