import Store from '../store/store.js';

/**
 * @description Creates an instance of Component.
 * @export
 * @class Component
 */
export default class Component {
  /**
   * @param {*} [props={}]
   * @memberof Component
   */
  constructor(props = {}) {
    // Store the HTML element to attach the render to it if set
    if (props.hasOwnProperty('element')) {
      this._element = props.element;
    }

    this.render = this.render || function() {};

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => this.render());
    }
  }
}