/**
 * Calculator module - See {@tutorial pubsub}
 * @module pubsub
 */

/**
 * @description Creates a publish subscribe instance
 * @export
 * @class PubSub
 */
export default class PubSub {
  constructor() {
    /**
     * @property {{}} events - collection of key, value subscribed events
     */
    this.events = {};
  }

  /**
   * @description watch for event
   * @param {string | number | symbol} event
   * @param {any} callback
   * @returns {void}
   * @memberof PubSub
   */
  subscribe(event, callback) {
    // If there's not already an event with this name set in our collection
    // go ahead and create a new one and set it with an empty array, so we don't
    // have to type check it later down-the-line
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    // We know we've got an array for this event, so push our callback in there with no fuss
    this.events[event].push(callback);
  }
  
  /**
   * @description fire on event
   * @param {string | number | symbol} event
   * @param {*} [data={}]
   * @returns {void | Array}
   * @memberof PubSub
   */
  publish(event, data = {}) {
    // If there is no event to publish it return empty array
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    // Get each subscription and call its callback with the passed data
    this.events[event].map(callback => callback(data));
  }
}