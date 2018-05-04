import { app } from './app'
import http from 'http'

export default http.createServer(app.callback()).listen(process.env.PORT || 3000)
console.log(`>server start at: http://localhost:3000`)