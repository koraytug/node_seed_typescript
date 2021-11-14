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
exports.getDb = exports.connectClient = exports.client = void 0;
// const dbConfig = require("./db.config.js");
const db_config_1 = require("./db.config");
const mongodb_1 = require("mongodb");
// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// const db = {};
// db.mongoose = mongoose;
// db.url = url;
// db.customers = require("./customer.model.js")(mongoose);
// module.exports = db;
exports.client = new mongodb_1.MongoClient(db_config_1.url);
function connectClient() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.client.connect();
    });
}
exports.connectClient = connectClient;
function getDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbName = "TESTAPP";
        return exports.client.db(dbName);
    });
}
exports.getDb = getDb;
//# sourceMappingURL=index.js.map