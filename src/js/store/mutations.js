export default {
  addItem(state, value) {
    state.items.push(value);
    return state;
  },
  clearItem(state, value) {
    state.items.splice(value, 1);
    return state;
  }
}