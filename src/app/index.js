const Koa = require('koa')
const {koaBody} = require('koa-body')

const userRouter = require('../router/user.route')
const app = new Koa()

// use注册中间件(function)
app.use(koaBody())
app.use(userRouter.routes())

module.exports = app