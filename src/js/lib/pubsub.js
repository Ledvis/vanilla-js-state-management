export default class PubSub {
  constructor() {
    this._events = {};
  }

  subscribe(event, callback) {
    if (!this._events.hasOwnProperty(event)) {
      this._events[event] = [];
    }

    this._events[event].push(callback);
  }

  publish(event, data = {}) {
    if (!this._events.hasOwnProperty(event)) {
      return [];
    }

    return this._events[event].map(callback => callback(data));
  }
}