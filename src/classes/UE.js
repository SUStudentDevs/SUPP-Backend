/**
 * UE (Course) class
 * @module classes/UE
 * @author Basile Pesin
 */

/**
 * UE (Course)
 */
class UE {
    constructor(data) {
        this.id = data.id
        this.shortname = data.shortname
        this.fullname = data.fullname
        this.credits = data.credits
    }
}

export default UE;
