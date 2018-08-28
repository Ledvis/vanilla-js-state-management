export default {
  addItem(context, value) {
    context.commit('addItem', value);
  },
  clearItem(context, value) {
    context.commit('clearItem', value);
  }
}