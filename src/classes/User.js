/**
 * User class
 * @module classes/User
 * @author Basile Pesin
 */

import DB from '../DB'
import Role from './Role'

export default class User {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.name = data.name
        this.surname = data.surname
        this.role_id = data.role_id
    }

    complete_name() { return this.surname + ' ' + this.name; }

    role() { return DB.getRoleById(this.role_id).then(data => new Role(data)) }
}
