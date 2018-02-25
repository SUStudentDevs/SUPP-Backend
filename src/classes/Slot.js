/**
 * Slot class
 * @module classes/Slot
 * @author Basile Pesin
 */

import DB from '../DB'
import Group from './Group'
import SlotType from './SlotType'

/**
 * Time slot
 */
class Slot {
    constructor(data) {
        this.id = data.id
        this.ue_id = data.ue_id
        this.type_id = data.type_id
        this.group_number = data.group_number
        this.day = data.day
        //TODO starttime and endtime
        this.room = data.room
    }

    /**
     * Gets the group for this slot
     */
    group() { return DB.getGroup(this.ue_id, this.group_number).then(data => new Group(data)) }

    /**
     * Gets the type of this slot
     */
    type() { return DB.getSlotTypeById(this.type_id).then(data => new SlotType(data)) }
}

export default Slot
