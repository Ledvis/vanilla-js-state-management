export default class PubSub {
  constructor() {
    this.events = {};
  }

  /**
   * Either create a new event instance for passed `event` name
   * or push a new callback into the existing collection
   *
   * @param {string} event
   * @param {function} callback
   * @returns {number} A count of callbacks for this event
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
    return this.events[event].push(callback);
  }

  /**
   * If the passed event has callbacks attached to it, loop through each one
   * and call it 
   *
   * @param {string} event
   * @param {object} [data={}]
   * @returns {array} New array with processed data by each callback or empty array if no events exist
   * @memberof PubSub
   */

  publish(event, data = {}) {
    // If there is no event to publish it return empty array
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    // Get each subscription and call its callback with the passed data
    return this.events[event].map(callback => callback(data));
  }
}