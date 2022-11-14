class UserService{
    // if params too much, choose Object datatype
    async createUser(user_name, password ){
        // todo : crete in database
        return '写入数据库成功'
    }
}

module.exports = new UserService()