/**
 * Database connector
 * @module DB 
 * @author Basile Pesin
 */

import mysql from 'mysql'

export default class DB {
    
    static connect() {
        DB.connection.connect()
    }

    static getUserById(id) {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `users` WHERE `id` =' + id,
            (error, results, fields) => resolve(results[0]) )))
    }

    static getRoles() {
        return (new Promise((resolve, reject) => DB.connection.query('SELECT * FROM `roles`',
            (error, results, fields) =>  resolve(results) )))
    }

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
