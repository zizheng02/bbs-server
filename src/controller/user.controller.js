class UserController{
    async login(ctx,next){
        ctx.body = '登陆成功'
    }
}

module.exports = new UserController()