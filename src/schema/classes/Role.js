/**
 * Role class
 * @module schema/classes/Role
 * @author Basile Pesin
 */

/**
 * Role (Student, Teacher, ...)
 */
class Role {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }
}

export default Role;
