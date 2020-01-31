var emitter = (function () {
    /**
     * Checks if object is a function
     * @param {Object} obj 
     */
    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };

    /**
     * Stores all the events
     */
    var events = {}

    /**
     * Reacting to an event
     * @param {String} event 
     * @param {Function} cb 
     */
    function on(event, cb) {
        // Step 1: Check if cb is a function
        if (!isFunction(cb)) {
            return false
        }

        // Step 2: Check if event already has already been
        if (events.hasOwnProperty(event)) {
            // Step i: Take the call back array
            var cbArray = events[event]

            // Step ii: Insert callback at the end of the array
            cbArray.push(cb)
        } else {
            // Step i: Create a new array with the callback
            events[event] = [cb]
        }

        // Step 3: Return the current added index
        return events[event].length - 1
    }

    /**
     * Call all the callbacks that were given
     * @param {String} event 
     */
    function emit(event) {
        // Step 1: Check if event exists
        if (!events.hasOwnProperty(event)) {
            return 'NO_EVENT'
        }

        // Step 2: Generate the correct argument
        var args = Array.prototype.slice.call(arguments, 1)

        // Step 2: Get the array and loop throug all the call backs
        for (var i = 0; i < events[event].length; i++) {
            // Step i: Call the callback with all the arguments
            events[event][i].apply(null, args)
        }
    }

    /**
     * Remove the specified callback at the given index of the given event
     * @param {String} event 
     * @param {Number} index 
     */
    function removeCallback(event, index) {
        // Step 1: Check if event and index exists
        if (!events.hasOwnProperty(event) || index >= events[event].length) {
            return false
        }

        // Step 2: Remove the specified index
        events[event].splice(index, 1)
    }

    /**
     * Remove the whole event
     * @param {String} event 
     */
    function removeEvent(event) {
        // Step 1: Check if event and index exists
        if (!events.hasOwnProperty(event)) {
            return "NO_EVENT"
        }

        // Step 2: Remove the event
        delete events[event]
    }

    /**
     * Return the required object
     */
    return {
        on: on,
        emit: emit,
        removeCallback: removeCallback,
        removeEvent: removeEvent
    }
})()