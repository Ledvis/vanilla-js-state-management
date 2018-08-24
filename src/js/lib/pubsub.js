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
}