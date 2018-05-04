import request from 'supertest'
import app from '../src/server'

describe('GET /', (): any => {
  it("should return 200 ok", () => {
    return request(app).get('/')
      .expect(200, (err: Error): any=> {
        console.error('message', err.message)
      })
  })
})