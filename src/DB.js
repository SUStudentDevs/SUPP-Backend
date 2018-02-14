/**
 * Database connector
 * @module DB 
 * @author Basile Pesin
 */

import mysql from 'mysql'

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
     * Gets a single (or none) user by it's id
     */
    static getUserById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `users` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
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
}

DB.connection = mysql.createConnection({
    host: 'localhost',
    user: 'supp-user',
    password: 'supp',
    database: 'supp'
})

export default DB;
