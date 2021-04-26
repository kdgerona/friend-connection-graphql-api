"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = exports.userTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.userTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: String\n    first_name: String\n    last_name: String\n  }\n"], ["\n  type User {\n    id: String\n    first_name: String\n    last_name: String\n  }\n"])));
exports.userResolvers = {
    User: {
    // users: () => 'Hello user!',
    },
};
var templateObject_1;
