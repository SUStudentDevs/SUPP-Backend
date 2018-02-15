/**
 * UE (Course) class
 * @module classes/UE
 * @author Basile Pesin
 */

import DB from '../DB'
import Slot from './Slot'
import Group from './Group'

/**
 * UE (Course)
 */
class UE {
    constructor(data) {
        this.id = data.id
        this.shortname = data.shortname
        this.fullname = data.fullname
        this.credits = data.credits
        this.room = data.room
    }

    /**
     * Gets all the time slots for the UE
     */
    slots() { return DB.getSlotsByUE(this.id).then(data => data.map(d => new Slot(d))) }

    /**
     * Gets all the groups for this UE
     */
    groups() { return DB.getGroupsByUE(this.id).then(data => data.map(d => new Group(d))) }
}

export default UE;
