/**
 * Slot model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

export default sequelize.define('slots', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ue_id: Sequelize.INTEGER,
    type_id: Sequelize.INTEGER,
    group_number: Sequelize.INTEGER,
    day: Sequelize.DATE,
    //starttime
    //endtime
    room: Sequelize.STRING
})
