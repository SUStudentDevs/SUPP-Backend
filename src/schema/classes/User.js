/**
 * User class
 * @module schema/classes/User
 * @author Basile Pesin
 */

import DB from '../../DB'
import Role from './Role'


/**
 * User
 */
class User {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.name = data.name
        this.surname = data.surname
        this.role_id = data.role_id
    }

    /**
     * Full name of the user (name and surname)
     * @return the full name
     */
    full_name() { return this.surname + ' ' + this.name; }

    /**
     * Role of the user
     * @return the role of the user
     */
    role() { return DB.getRoleById(this.role_id).then(data => new Role(data)) }
}

export default User;
