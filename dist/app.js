"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
// import express from "express";
// import * as path from "path";
const path_1 = __importDefault(require("path"));
// import {bodyParser} from "body-parser";
const bodyParser = require("body-parser");
const customer_route_1 = require("./routes/customer.route");
// require('dotenv').config();
// import * as dotenv from "dotenv";
// import dotenv from "dotenv";
// dotenv.config();
// if (process.env.NODE_ENV !== "production") dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4400;
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "react_seed_client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "react_seed_client/build", "index.html"));
    });
}
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use("/customerlist", customer_route_1.customerRouter);
// app.use('/customers', require('./routes/customer.route'));
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
// // // import express from 'express';
// // // const app = express();
// // // const port = 3000;
// // // app.get('/', (req, res) => {
// // //   res.send('The sedulous hyena ate the antelope!');
// // // });
// // // app.listen(port, ( ) => {
// // // //   if (err) {
// // // //     return console.error(err);
// // // //   }
// // //   return console.log(`server is listening on ${port}`);
// // // });
//# sourceMappingURL=app.js.map