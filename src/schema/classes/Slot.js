/**
 * Slot class
 * @module schema/classes/Slot
 * @author Basile Pesin
 */

import DB from '../../DB'
import Group from './Group'
import SlotType from './SlotType'

import SlotTypeDB from '../../DB/SlotType'

/**
 * Time slot
 */
class Slot {
    constructor(data) {
        this.id = data.id
        this.ueId = data.ueId
        this.slotTypeId = data.slotTypeId
        this.groupNumber = data.groupNumber
        this.day = data.day
        //TODO starttime and endtime
        this.room = data.room
    }

    /**
     * Gets the group for this slot
     */
    group() { return DB.getGroup(this.ueId, this.group_number).then(data => new Group(data)) }

    /**
     * Gets the type of this slot
     */
    type() { return SlotTypeDB.findOne({where: {id: this.slotTypeId}}).then(data => new SlotType(data)) }
}

export default Slot
