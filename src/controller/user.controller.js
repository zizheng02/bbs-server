const {createUser} = require('../service/user.service')
class UserController{
    async login(ctx,next){
        console.log(ctx.request.body)
        const {user_name, password} = ctx.request.body
        const msg = await createUser(user_name, password)
        console.log(msg)
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()