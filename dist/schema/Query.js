"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolvers = exports.queryTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var data_1 = require("../data");
exports.queryTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    user(id: String): User\n    users: [User]\n    company(id: String): Company\n    companies: [Company]\n  }\n\n  type Mutation {\n    addUser(first_name: String!, last_name: String!): String\n    addFriendToUser(user_id: String!, friend_id: String!): Boolean\n  }\n"], ["\n  type Query {\n    user(id: String): User\n    users: [User]\n    company(id: String): Company\n    companies: [Company]\n  }\n\n  type Mutation {\n    addUser(first_name: String!, last_name: String!): String\n    addFriendToUser(user_id: String!, friend_id: String!): Boolean\n  }\n"])));
exports.queryResolvers = {
    Query: {
        user: function (_, args) {
            return data_1.users.find(function (user) { return user.id === args.id; });
        },
        users: function () {
            return data_1.users;
        },
        companies: function () {
            return data_1.companies;
        },
    },
    Mutation: {
        addUser: function (_, args) {
            var id = data_1.users.length + 1 + '';
            data_1.users.push(__assign(__assign({}, args), { id: id, friends: [], companies: [] }));
            return id;
        },
        addFriendToUser: function (_, args) {
            var user_id = args.user_id, friend_id = args.friend_id;
            var user = data_1.users.find(function (user) { return user.id === user_id; });
            if (!user)
                return false;
            user.friends = __spreadArray(__spreadArray([], user.friends), [friend_id]);
            return true;
        },
    },
};
var templateObject_1;
