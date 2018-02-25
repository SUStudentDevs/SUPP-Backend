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
     * Completfile:///home/vertmo/Documents/UPMC/SUStudentDevs/SUPP-Backend/docs/index.htmle name of the user (name and surname)
     * @return the complete name
     */
    complete_name() { return this.surname + ' ' + this.name; }

    /**
     * Role of the user
     * @return the role of the user
     */
    role() { return DB.getRoleById(this.role_id).then(data => new Role(data)) }
}

export default User;
