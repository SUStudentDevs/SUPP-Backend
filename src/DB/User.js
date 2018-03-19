/**
 * User model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

import Role from './Role'

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
})

User.belongsTo(Role)

export default User
