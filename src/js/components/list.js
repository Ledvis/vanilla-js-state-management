import Component from '../lib/component.js';
import store from '../store/index.js';

export default new class List extends Component {
  constructor() {
    super({
      element: document.querySelector('.js-items'),
      store
    });
  }

  render() {
    if (store.state.items.length === 0) {
      this._element.innerHTML = `<p class="no-items">You've done nothing yet 😢</p>`
      return;
    }

    this._element.innerHTML = `
      <ul class="app__items">
        ${store.state.items.map(item => {
          return `<li>${item} <button aria-label="Delete this item">×</button></li>`
        }).join('')}
      </ul>
    `

    const buttons = this._element.querySelectorAll(`button`);
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        store.dispatch('clearItem', index);
      });
    })
  }
}