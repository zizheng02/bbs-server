const {createUser} = require('../service/user.service')
class UserController{
    async register(ctx,next){
        const {user_name_regis, password_regis} = ctx.request.body
        const res = await createUser(user_name_regis, password_regis)
        ctx.body = {
            code:0,
            message:'用户注册成功',
            user_name: res.user_name
        }
    }

    async login(ctx,next){
        const {user_name, password} = ctx.request.body
        console.log(ctx.request.body)
        const res = await createUser(user_name, password)
        ctx.body = {
            code:0,
            message:'用户登录成功',
            user_name: res.user_name
        }
    }
}

module.exports = new UserController()