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
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const routes_1 = require("./routes");
exports.app = new koa_1.default();
// test app.context 挂载 getter setter Object.defineProperty() 定义的
Object.defineProperty(exports.app.context, 'host', {
    get() {
        return '0.0.0.0';
    }
});
// error logger
exports.app.on('error', (err, ctx) => {
    console.error('error occured!', err.message, err, ctx.status);
});
// bodyparser
exports.app.use(koa_bodyparser_1.default());
// set X-Response-Time
exports.app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('middleware 1');
    const start = Date.now();
    yield next();
    console.log('middleware 1-end');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
}));
// logger
exports.app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('middleware 2');
    const start = Date.now();
    yield next();
    console.log('middleware 2-end');
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));
// test
exports.app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log('middleware 3');
    yield next();
    console.log('middleware 3-end');
}));
exports.app.use(routes_1.router.routes())
    .use(routes_1.router.allowedMethods());
//# sourceMappingURL=app.js.map