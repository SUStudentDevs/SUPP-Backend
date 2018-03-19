/**
 * Group model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

import UE from './UE'

const Group = sequelize.define('groups', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: Sequelize.INTEGER,
    size: Sequelize.INTEGER,
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
})

Group.belongsTo(UE)

export default Group
