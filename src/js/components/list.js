import Component from '../components/list.js';

export default class List extends Component {
  constructor() {
    // Pass our store instance and the HTML element up to the parent Component
    super({
      element: document.querySelector('.js-items')
    })
  }
}