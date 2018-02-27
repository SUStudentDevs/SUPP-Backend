/**
 * Database connector
 * @module DB 
 * @author Basile Pesin
 */

import mysql from 'mysql'
import config from './config'

/**
 * Database class, contains all the static methods needeed
 */
class DB {
    /**
     * Connect to the MySQL database
     */
    static connect() {
        DB.connection.connect()
    }

    /**
     * Gets all the roles
     */
    static getRoles() {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `roles`',
            (error, results, fields) =>  resolve(results) )))
    }

    /**
     * Gets a single (or none) role by it's id
     */
    static getRoleById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `roles` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
    }

    /**
     * Gets a single (or none) ue by it's id
     */
    static getUEById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `ues` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
    }

    /**
     * Gets all the time slots for a given UE
     */
    static getSlotsByUE(ue_id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `slots` WHERE `ue_id` =' + ue_id,
            (error, results, fields) => resolve(results) )))
    }

    /**
     * Gets a group using it's ue id and it's number
     */
    static getGroup(ue_id, number) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `groups` WHERE `ue_id` = ' + ue_id + ' AND `number` = ' + number,
            (error, results, fields) => resolve(results[0]) )))
DB    }

    /**
     * Gets a slot type by it's id
     */
    static getSlotTypeById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `slot_types` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
    }

    /**
     * Gets all the time slots for a given UE
     */
    static getGroupsByUE(ue_id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `groups` WHERE `ue_id` =' + ue_id,
            (error, results, fields) => resolve(results) )))
    }
}

DB.connection = mysql.createConnection(config.db)

export default DB;
