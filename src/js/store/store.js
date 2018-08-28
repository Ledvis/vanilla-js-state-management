import PubSub from '../lib/pubsub.js'

export default class Store {
  constructor(params) {
    const self = this;
    this.events = new PubSub();

    if (params.hasOwnProperty('actions')) {
      this.actions = params.actions;
    }

    if (params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations;
    }

    this.state = new Proxy(params.state || {}, {
      set: function(state, key, value) {
        state[key] = value;
        self.events.publish('stateChange', self.state);
        console.log(`Updated state: ${state[key]}`);

        return true;
      }
    });
  }

  dispatch(key, payload) {
    if (!this.actions.hasOwnProperty(key)) {
      console.error(`There is no such ${key} method in ACTIONS`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${key}`);

    this.actions[key](this, payload);

    console.groupEnd();
  }

  commit(key, payload) {
    if (!this.mutations.hasOwnProperty(key)) {
      console.error(`There is no such ${key} method in MUTATIONS`);
      return false;
    }

    const newState = this.mutations[key](this.state, payload);
    this.state = Object.assign(this.state, newState);
  }
}