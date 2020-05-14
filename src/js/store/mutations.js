export default {
  /**
   * @param {Object.<string, any>} state
   * @param {*} payload
   * @returns {Object}
   */
  addItem(state, payload) {
    state.items.push(payload);
    return state;
  },
  /**
   * @param {Object.<string, any>} state
   * @param {*} payload
   * @returns {Object}
   */
  clearItem(state, payload) {
    state.items.splice(payload.index, 1);
    return state;
  }
}