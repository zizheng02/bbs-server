const Koa = require('koa')
const app = new Koa()

const userRouter = require('../router/user.route')
// use注册中间件
app.use(userRouter.routes())

module.exports = app