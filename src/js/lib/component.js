import Store from '../store/store.js';

export default class Component {
  constructor(params) {
    if (params.hasOwnProperty('element')) {
      this._element = params.element;
    }

    if (params.store instanceof Store) {
      params.store.events.subscribe('stateChange', () => {
        this.render();
      });
    }
  }

  render() {
    console.error('Set module\'s own render method');
  }
}