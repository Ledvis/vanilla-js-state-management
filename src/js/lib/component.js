export default class Component {
  constructor(props = {}) {
    if (props.hasOwnProperty('element')) {
      this._element = props.element;
    }
  }
}