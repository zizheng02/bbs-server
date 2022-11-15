const {DataTypes } = require('sequelize')

const seq = require('../db/seq')

// create Model
const User = seq.define('bbs_user',{
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        comment:'用户名，唯一'
    },
    password:{
        type: DataTypes.CHAR(64),
        allowNull: false
    },
    // is_admin:{
    //     type:DataTypes.BOOLEAN,
    //     allowNull: true,
    //     defaultValue: 0
    // }
})

// User.sync({force: true})

module.exports = User