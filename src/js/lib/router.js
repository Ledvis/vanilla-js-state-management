/**
 * @description Creates an instance of Router.
 * @export
 * @class Router
 */
export default class Router {
  /** @type {Array} */
  routes = [];
  mode = '';
  root = '/'
  
  /**
   * @param {Object} [options]
   * @param {string} options.mode
   * @param {string} options.root
   * @memberof Router
   */
  constructor(options) {
    this.mode = window.history.pushState ? 'history' : 'hash';
    if (options?.mode) this.mode = options.mode;
    if (options?.root) this.root = options.root;
  }

  /**
   * @description Add route
   * @param {string} path
   * @param {() => void} cb
   * @memberof Router
   */
  add = (path, cb) => { // ES9 syntax. Will assign prop to each Router instance directly, not in prototype
    this.routes.push({ path, cb });
    
    return this;
  }

  /**
   * @description Remove route
   * @param {string} path
   * @memberof Router
   */
  remove = (path) => {
    for (let index = 0; index < this.routes.length; index++) {
      const route = this.routes[index];
      
      if (route.path === path) {
        this.routes.splice(index, 1);
        break;
      }
    }

    return this;
  }

  flush = () => {
    this.routes.length = 0;
    
    return this;
  }

  clearSlashes = (path) => {
    console.log(path);
  }

  getFragment = () => {
    let fragment;

    if (this.mode === 'history') {

    } else {

    }

    this.clearSlashes(fragment)
  }

  navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, null, path);
    }
  }

  listen = () => {
    
  }
};
