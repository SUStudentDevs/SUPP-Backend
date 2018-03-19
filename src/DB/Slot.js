/**
 * Slot model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

import SlotType from './SlotType'
import UE from './UE'
import Group from './Group'

const Slot = sequelize.define('slots', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day: Sequelize.DATE,
    //starttime
    //endtime
    room: Sequelize.STRING
})

Slot.belongsTo(SlotType)
Slot.belongsTo(UE)
Slot.belongsTo(Group)

export default Slot
