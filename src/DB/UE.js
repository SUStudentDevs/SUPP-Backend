/**
 * UE model
 * @module DB
 * @author Basile Pesin
 */

import Sequelize from 'sequelize'
import sequelize from './index'

export default sequelize.define('ues', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    shortname: Sequelize.STRING,
    fullname: Sequelize.STRING,
    credits: Sequelize.INTEGER,
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type:Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
})
