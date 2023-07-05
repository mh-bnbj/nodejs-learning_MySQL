const { Sequelize, DataTypes } = require('sequelize')
const db = require('../configs/db')

const User = db.define(
    'user',
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        tableName: 'user',
        timestamps: false,
    }
)

module.exports = User

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User) // true
