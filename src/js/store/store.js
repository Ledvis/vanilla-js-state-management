import PubSub from '../lib/pubsub.js';

/**
 * @description Creates a reactive store instance
 * @export
 * @class Store
 */
export default class Store {
  /**
   * @param {Object} params - store config
   * @param {Object.<string, any>} params.state - store initial state
   * @param {Object.<string, any>} params.actions - store actions methods
   * @param {Object.<string, any>} params.mutations - store mutations methods
   */
  constructor(params) {
    const self = this;
    /**
     * @property {Object} events - PubSub instance
     */
    this.events = new PubSub();

    if (params.hasOwnProperty('actions')) {
      this.actions = params.actions;
    }

    if (params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations;
    }

    /**
     * @property {Object} make state reactive via Proxy API
     */
    this.state = new Proxy((params.state || {}), {
      /**
       * @description Proxy set trap
       * @param {Object} state
       * @param {string} key - state prop
       * @param {*} value - state value
       * @returns {boolean}
       */
      set(state, key, value) {
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

  /**
   * @description fire action from store.actions
   * @param {string} actionKey - action type
   * @param {*} payload
   * @returns {boolean}
   * @memberof Store
   */
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

  /**
   * @description fire mutation from store.mutations
   * @param {string} mutationKey - mutation type
   * @param {*} payload
   * @returns {boolean}
   * @memberof Store
   */
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