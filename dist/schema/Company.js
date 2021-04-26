"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyResolvers = exports.companyTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var data_1 = require("../data");
exports.companyTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Company {\n    id: String!\n    name: String!\n    employees: [User]\n  }\n"], ["\n  type Company {\n    id: String!\n    name: String!\n    employees: [User]\n  }\n"])));
exports.companyResolvers = {
    Company: {
        employees: function (parent) {
            var parent_employees = parent.employees.map(function (user_id) {
                return data_1.users.find(function (user) { return user.id === user_id; });
            });
            return parent_employees;
        },
    },
};
var templateObject_1;
