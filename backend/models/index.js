const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USERNAME, dbConfig.PASSWORD, {
    //additional configurations
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("./user.model.js")(sequelize, Sequelize)
db.employeeData = require("./employeeData.model.js")(sequelize, Sequelize)

module.exports = db

