"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = exports.userTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var data_1 = require("../data");
exports.userTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: String\n    first_name: String\n    last_name: String\n    friends: [User]\n    companies: [Company]\n  }\n"], ["\n  type User {\n    id: String\n    first_name: String\n    last_name: String\n    friends: [User]\n    companies: [Company]\n  }\n"])));
exports.userResolvers = {
    User: {
        friends: function (parent) {
            var _a;
            var parent_friends = (_a = parent.friends) === null || _a === void 0 ? void 0 : _a.map(function (user_id) {
                return data_1.users.find(function (user) { return user.id === user_id; });
            });
            return parent_friends;
        },
        companies: function (parent) {
            var _a;
            var parent_companies = (_a = parent.companies) === null || _a === void 0 ? void 0 : _a.map(function (company_id) {
                return data_1.companies.find(function (company) { return company.id === company_id; });
            });
            return parent_companies;
        },
    },
};
var templateObject_1;
