const { DataTypes } = require("sequelize");
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const EmployeeData = sequelize.define("employeeData", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        }, 
        national_identity: {
            type: DataTypes.STRING
        },
        telephone: {
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        position: {
            type: DataTypes.STRING
        }, 
        laptop: {
            type: DataTypes.STRING
        },
        model:{
            type: DataTypes.STRING
        },
        serialNumber:{
            type: DataTypes.STRING
        }
    })
    return EmployeeData
}