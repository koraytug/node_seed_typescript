"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRouter = void 0;
const express = __importStar(require("express"));
const customer_controller_1 = require("../controllers/customer.controller");
const customers = new customer_controller_1.CustomerController();
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
exports.customerRouter.delete("/:id", customers.delete);
// Create a new Customer
exports.customerRouter.delete("/", customers.deleteAll);
//# sourceMappingURL=customer.route.js.map