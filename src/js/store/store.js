import PubSub from '../lib/pubsub.js';

export default class Store {
  constructor(params) {
    const self = this;

    // Add some default objects to hold our actions, mutations and state
    this.state = {};
    this.mutations = {};
    this.actions = {};

    // Attach PubSub module as an `events` element
    this.events = new PubSub();

    if (params.hasOwnProperty('actions')) {
      this.actions = params.actions;
    }

    if (params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations;
    }

    this.state = new Proxy((params.state || {}), {
      set: function(state, key, value) {
        // Set the value as we would do normally
        state[key] = value;

        console.log(`stateChange ${key}: ${value}`);

        // Publish the change event for components that are listening
        self.events.publish('stateChange', self.state);

        if (self.status !== 'mutations') {
          console.warn(`You should use a mutation to set ${key}`);
        }

        self.status = 'resting';

        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    if (typeof this.actions[actionKey] !== 'function') {
      console.error(`Action ${actionKey} doesn't exist`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);

    this.status = 'action';

    this.actions[actionKey](this, payload);

    console.groupEnd();

    return true;
  }

  commit(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== 'function') {
      console.error(`Action ${mutationKey} doesn't exist`);
      return false;
    }

    this.status = 'mutations';
    const newState = this.mutations[mutationKey](this.state, payload);
    this.state = Object.assign(this.state, newState);

    return true;
  }
}