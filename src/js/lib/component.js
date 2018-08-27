import Store from '../store/store.js';

export default class Component {
  constructor(props = {}) {
    // Store the HTML element to attach the render to it if set
    if (props.hasOwnProperty('element')) {
      this._element = props.element;
    }

    // We're setting a render function as the one set by whatever inherits this base
    // class or setting it to an empty by default. This is so nothing breaks if someone
    // forgets to set it.
    this.render = this.render || function() {};

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => this.render());
    }
  }
}