"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http_1 = __importDefault(require("http"));
exports.default = http_1.default.createServer(app_1.app.callback()).listen(process.env.PORT || 3000);
console.log(`>server start at: http://localhost:3000`);
//# sourceMappingURL=server.js.map