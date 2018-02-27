/**
 * User model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

export default sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    role_id: Sequelize.INTEGER
})
