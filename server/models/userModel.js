const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // database instance

const User = sequelize.define('users', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
