"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
// Schemas
var Query_1 = require("./Query");
var User_1 = require("./User");
var Company_1 = require("./Company");
exports.default = apollo_server_express_1.makeExecutableSchema({
    typeDefs: [Query_1.queryTypeDefs, User_1.userTypeDefs, Company_1.companyTypeDefs],
    resolvers: [Query_1.queryResolvers, User_1.userResolvers, Company_1.companyResolvers],
});
