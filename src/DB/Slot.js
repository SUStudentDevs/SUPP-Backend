/**
 * Slot model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

import UE from './UE'
import SlotType from './SlotType'

const Slot = sequelize.define('slots', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    groupNumber: Sequelize.INTEGER,
    day: Sequelize.DATE,
    //starttime
    //endtime
    room: Sequelize.STRING
})

Slot.belongsTo(UE)
Slot.belongsTo(SlotType)

export default Slot
