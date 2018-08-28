import store from './store/index.js';

// Load up components
import list from './components/list.js';
import count from './components/count.js';

// Load up DOM elements
const formElement = document.querySelector('.js-form');
const inputElement = formElement.querySelector('#new-item-field');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  let value = inputElement.value.trim();

  if (value) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

list.render();
count.render();