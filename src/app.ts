// const express = require('express');
import express from "express";
// import express from "express";
// import * as path from "path";
import path from "path";
// import {bodyParser} from "body-parser";
const bodyParser = require("body-parser");
import {customerRouter} from "./routes/customer.route";
// require('dotenv').config();
// import * as dotenv from "dotenv";
// import dotenv from "dotenv";

// dotenv.config();
// if (process.env.NODE_ENV !== "production") dotenv.config();

const app: express.Application = express();

const PORT = process.env.PORT || 4400;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "react_seed_client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "react_seed_client/build", "index.html"));
    });
}

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/customerlist", customerRouter);
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