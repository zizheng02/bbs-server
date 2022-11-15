const User = require('../model/user.model')
class UserService{
    // if params too much, choose Object datatype
    async createUser(user_name, password ){
        // todo : crete in database
        const res =await User.create({user_name, password})
        return res.dataValues
    }

    async getUserInfo({id,user_name,password}){
          return "todo"
    }
}

module.exports = new UserService()