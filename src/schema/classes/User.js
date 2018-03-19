/**
 * User class
 * @module schema/classes/User
 * @author Basile Pesin
 */

import Role from './Role'

import RoleDB from '../../DB/Role'


/**
 * User
 */
class User {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.name = data.name
        this.surname = data.surname
        this.roleId = data.roleId
    }

    /**
     * Full name of the user (name and surname)
     * @return the full name
     */
    fullname() { return this.surname + ' ' + this.name; }

    /**
     * Role of the user
     * @return the role of the user
     */
    role() { return RoleDB.findOne({where : {id: this.roleId}}).then(data => new Role(data)) }
}

export default User;
