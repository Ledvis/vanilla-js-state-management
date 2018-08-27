import store from './store/index.js';

// Load up components
import list from './components/list.js';
import status from './components/status.js';
import count from './components/count.js';

// Load up some DOM components
const formElement = document.querySelector('.js-form');
const inputElement = formElement.querySelector('#new-item-field');

// Add submit event listener to the form and prevent it from default behavior
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // Grab value from the input field
  let value = inputElement.value.trim();

  // If there is some content in value, trigger the action and clear the field, ready for the next input
  if (value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

list.render();
status.render();
count.render();