/**
 * Group model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

export default sequelize.define('groups', {
    ue_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    number: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    size: Sequelize.INTEGER
})
