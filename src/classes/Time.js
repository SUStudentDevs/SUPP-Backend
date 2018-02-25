/**
 * Time class
 * @module classes/Time
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

    /**
     * Displays the time as HH:mm
     */
    time() { this.hour + ":" + this.minute }
}

export default Time;
