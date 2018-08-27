import Component from '../lib/component.js';
import store from '../store/index.js';

export default new class status extends Component {
  constructor() {
    super({
      element: document.querySelector('.js-status'),
      store
    })
  }

  render() {
    const suffix = store.state.items !== 1 ? 's' : '';

    this._element.innerHTML = `${store.state.items.length} item${suffix}`;
  }
}