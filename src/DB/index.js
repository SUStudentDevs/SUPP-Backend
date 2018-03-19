/**
 * Sequelize database
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import config from '../config.js'

export default new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})
