/**
 * Group model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

import User from './User'
import UE from './UE'

const Enrollment = sequelize.define('enrollments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    year: Sequelize.INTEGER,
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
})

Enrollment.belongsTo(User)
Enrollment.belongsTo(UE)

export default Enrollment
