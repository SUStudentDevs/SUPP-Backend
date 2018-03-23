/**
 * UE (Course) class
 * @module schema/classes/UE
 * @author Basile Pesin
 */

import DB from '../../DB'
import Slot from './Slot'
import Group from './Group'

import SlotDB from '../../DB/Slot'
import GroupDB from '../../DB/Group'

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

    groups() { return GroupDB.findAll({where: {ueId: this.id}}).then(groups => groups.map(g => new Group(g))) }

    slots() { return SlotDB.findAll({where: {ueId: this.id}}).then(slots=> slots.map(s => new Slot(s))) }
}

export default UE;
