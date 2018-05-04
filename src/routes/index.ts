import Router from 'koa-router'

export const router = new Router()

const user = {
  name: 'deval',
  age: 18,
}

router
  .get('/getUserInfo', async (ctx: any, next): Promise<any> => {
    ctx.body = user
  }) // handler get userName
  .post('/login', async (ctx: any, next): Promise<any> => {
    const { name, age }: { name: string, age: number } = ctx.request.body
    console.log(name, age)
    const check = [
      name === user.name,
      age === user.age
    ]
    if (check.every(p => p)) {
      ctx.body = { success: true }
    } else {
      ctx.body = { success: false }
    }
  })