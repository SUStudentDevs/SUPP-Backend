/**
 * Slot type class
 * @module classes/Slot
 * @author Basile Pesin
 */

/**
 * Time slot type (activity during the slot)
 */
class SlotType {
    constructor(data) {
        this.id = data.id
        this.name = data.name
    }
}

export default SlotType
