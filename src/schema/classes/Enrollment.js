/**
 * Enrollment class
 * @module schema/classes/Group
 * @author Basile Pesin
 */

import User from './User'
import UE from './UE'

import UserDB from '../../DB/User'
import UEDB from '../../DB/UE'

/**
 * Group of student
 */
class Enrollment {
    constructor(data) {
        this.ueId = data.ueId
        this.userId = data.userId
        this.year = data.year
    }
    
    ue() { return UEDB.findById(this.ueId).then(ue => new UE(ue)) }

    student() { return UserDB.findById(this.userId).then(user => new User(user)) }
}

export default Enrollment
