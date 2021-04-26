"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
// Schemas
var User_1 = require("./User");
exports.default = apollo_server_express_1.makeExecutableSchema({
    typeDefs: [User_1.userTypeDefs],
    resolvers: [User_1.userResolvers],
});
