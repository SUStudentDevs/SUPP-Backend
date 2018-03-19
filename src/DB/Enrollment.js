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
    year: Sequelize.INTEGER
})

Enrollment.belongsTo(User)
Enrollment.belongsTo(UE)

export default Enrollment
