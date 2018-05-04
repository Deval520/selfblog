"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
exports.router = new koa_router_1.default();
const user = {
    name: 'deval',
    age: 18,
};
exports.router
    .get('/getUserInfo', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = user;
})) // handler get userName
    .post('/login', (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const { name, age } = ctx.request.body;
    console.log(name, age);
    const check = [
        name === user.name,
        age === user.age
    ];
    if (check.every(p => p)) {
        ctx.body = { success: true };
    }
    else {
        ctx.body = { success: false };
    }
}));
//# sourceMappingURL=index.js.map