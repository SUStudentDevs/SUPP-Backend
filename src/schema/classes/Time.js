/**
 * Time class
 * @module schema/classes/Time
 * @author Basile Pesin
 */

/**
 * Time (hour and minute)
 */
class Time {
    constructor(hour, minute) {
        this.hour = hour
        this.minute = minute
    }

    time() { this.hour + ":" + this.minute }
}

export default Time;
