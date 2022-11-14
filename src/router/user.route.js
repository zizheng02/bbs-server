const Router = require('koa-router')
const { login } = require('../controller/user.controller')
const router = new Router({prefix: '/users'})

router.get('/login',login)

module.exports = router