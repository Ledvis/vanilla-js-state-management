export default class Store {
  constructor(params) {
    // Add some default objects to hold our actions, mutations and state
    this.state = {};
    this.mutations = {};
    this.actions = {};
  }
}