"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.ProxyFactoryBase__factory = exports.ProxyFactory__factory = exports.ProxyChild__factory = exports.DeterministicAddress__factory = exports.proxy = exports.mocks = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.mocks = __importStar(require("./mocks"));
exports.proxy = __importStar(require("./proxy"));
var DeterministicAddress__factory_1 = require("./DeterministicAddress__factory");
Object.defineProperty(exports, "DeterministicAddress__factory", { enumerable: true, get: function () { return DeterministicAddress__factory_1.DeterministicAddress__factory; } });
var ProxyChild__factory_1 = require("./ProxyChild__factory");
Object.defineProperty(exports, "ProxyChild__factory", { enumerable: true, get: function () { return ProxyChild__factory_1.ProxyChild__factory; } });
var ProxyFactory__factory_1 = require("./ProxyFactory__factory");
Object.defineProperty(exports, "ProxyFactory__factory", { enumerable: true, get: function () { return ProxyFactory__factory_1.ProxyFactory__factory; } });
var ProxyFactoryBase__factory_1 = require("./ProxyFactoryBase__factory");
Object.defineProperty(exports, "ProxyFactoryBase__factory", { enumerable: true, get: function () { return ProxyFactoryBase__factory_1.ProxyFactoryBase__factory; } });
