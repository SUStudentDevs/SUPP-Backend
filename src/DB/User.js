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
    name: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    surname: {
        type: Sequelize.STRING,
        defaultValue: ''
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
})

User.belongsTo(Role)

export default User
