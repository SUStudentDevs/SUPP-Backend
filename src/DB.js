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
     * Gets a slot type by it's id
     */
    static getSlotTypeById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `slot_types` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
    }

}

DB.connection = mysql.createConnection(config.db)

export default DB;
