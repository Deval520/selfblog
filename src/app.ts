import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { router } from './routes'

export const app = new Koa()

// test app.context 挂载 getter setter Object.defineProperty() 定义的
Object.defineProperty(app.context, 'host', {
  get () {
    return '0.0.0.0'
  }
})
// error logger
app.on('error', (err: Error, ctx: any): void => {
  console.error('error occured!', err.message, err, ctx.status)
})

// bodyparser
app.use(bodyParser())

// set X-Response-Time
app.use(async (ctx, next): Promise<any> => {
  console.log('middleware 1')
  const start = Date.now()
  await next()
  console.log('middleware 1-end')
  const ms: number = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async (ctx, next: any): Promise<any> => {
  console.log('middleware 2')
  const start = Date.now()
  await next()
  console.log('middleware 2-end')
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// test
app.use(async (ctx, next: any): Promise<any> => {
  console.log('middleware 3')
  await next()
  console.log('middleware 3-end')
})

app.use(router.routes())
.use(router.allowedMethods())

