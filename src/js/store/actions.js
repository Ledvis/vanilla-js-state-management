export default {
  /**
   * @description Add to-do item to the list
   * @param {Object} context - store instance
   * @param {*} payload
   * @returns {void}
   */
  addItem(context, payload) {
    context.commit('addItem', payload);
  },
  /**
   * @description Remove to-do item from the list
   * @param {Object} context - store instance
   * @param {*} payload
   * @returns {void}
   */
  clearItem(context, payload) {
    context.commit('clearItem', payload);
  }
}