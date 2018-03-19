/**
 * Group class
 * @module schema/classes/Group
 * @author Basile Pesin
 */

import DB from '../../DB'
import UE from './UE'

import UEDB from '../../DB/UE'

/**
 * Group of student
 */
class Group {
    constructor(data) {
        this.ueId = data.ueId
        this.number = data.number
        this.size = data.size
    }

    ue() { return UEDB.findById(this.ueId).then(ue => new UE(ue)) }
}

export default Group
