/**
 * Group class
 * @module classes/Group
 * @author Basile Pesin
 */

import DB from '../DB'
import UE from './UE'

/**
 * Group of student
 */
class Group {
    constructor(data) {
        this.ue_id = data.ue_id
        this.number = data.number
        this.size = data.size
    }

    ue() { return DB.getUEById(this.ue_id).then(data => new UE(data)) }
}

export default Group
