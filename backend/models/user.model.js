const { DataTypes } = require("sequelize");
const { sequelize, Sequelize } = require(".");
const bcrypt = require('bcryptjs')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user" ,{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                if (typeof user.password === 'string') {
                  const salt = await bcrypt.genSalt(10);
                  user.password = bcrypt.hashSync(user.password, salt);
                } else {
                  throw new Error('Password must be a string');
                }
              },
              
              beforeUpdate: async (user) => {
                if (typeof user.password === 'string') {
                  const salt = await bcrypt.genSalt(10);
                  user.password = bcrypt.hashSync(user.password, salt);
                } else {
                  throw new Error('Password must be a string');
                }
              }
        },
        //instance methods defined
        instanceMethods: {
            validPassword: (password) => {
                if(typeof password === 'string'){
                    return bcrypt.compare(password, this.password)
                }else{
                    throw new Error(`Passwords don't match`)
                }
                
            }
        }
    })
    //validPassword defined for every instance
    User.prototype.validPassword = async (password, hash) => {
        return bcrypt.compareSync(password, hash)
    }
    return User
}