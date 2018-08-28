import Component from '../lib/component.js';
import store from '../store/index.js';

export default new class Count extends Component {
  constructor() {
    super({
      element: document.querySelector('.js-count'),
      store
    });
  }

  render() {
    const emoji = store.state.items.length > 0 ? '😎' : '😢';
    const suffix = store.state.items.length !== 1 ? 's' : '';

    this._element.innerHTML = `
      <small>You've done</small>
      <span>${store.state.items.length}</span>
      <small>thing${suffix} today ${emoji}</small>
    `
  }
}