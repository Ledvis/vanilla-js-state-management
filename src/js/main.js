/**
 * @file main.js - this is the root file of the project for this app
 * @author Zhenya Fedyai
 * @see <a href="https://www.linkedin.com/in/zhenya-fedyai-ab5033100">my Linkedin</a>
 */

import store from './store/index.js';
import list from './components/list.js';
import status from './components/status.js';
import count from './components/count.js';
import Router from './lib/router.js';

const router = new Router({
  mode: 'history',
  root: '/'
});

router
  .add('/', () => {
    alert('this is home page');
  })
  .add('/about/', () => {
    alert('welcome to about page');
  })
  .add('/contacts/', () => {
    alert('welcome to contacts page');
  })
  .remove('/about/');

const formElement = document.querySelector('.js-form');
/** @type {HTMLInputElement} */
const inputElement = formElement.querySelector('#new-item-field');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  let value = inputElement.value.trim();

  if (value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
});

list.render();
status.render();
count.render();