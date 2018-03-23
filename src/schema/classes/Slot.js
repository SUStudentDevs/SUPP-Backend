/**
 * Slot class
 * @module schema/classes/Slot
 * @author Basile Pesin
 */

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

    group() { return DB.getGroup(this.ueId, this.group_number).then(data => new Group(data)) }

    type() { return SlotTypeDB.findOne({where: {id: this.slotTypeId}}).then(data => new SlotType(data)) }
}

export default Slot
