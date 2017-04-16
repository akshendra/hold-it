
/** *********************************************************
 *  A simple container
 ** *********************************************************/

const is = require('is_js');

class Container {
  /**
   * @param {Object} data [intialize with this data]
   */
  constructor(data) {
    this.data = Object.assign({}, data);
    this.IOC = Container;
  }


  /**
   * It won't rewrite if the key already exists, use update
   * @param  {String} key [name of the key]
   * @param  {Mixed} value [Anything]
   */
  add(key, value) {
    if (is.not.undefined(this.data[key])) {
      throw new Error(`Won't add <${key}>, already existing`);
    }
    Object.assign(this.data, {
      [key]: value,
    });
  }


  /**
   * Get value at key property
   * @param  {String} key [property to get]
   * @param  {Boolean} silent [whether to throw error if property not defined]
   * @return {Mixed} [whatever stored at the key property]
   */
  get(key, silent = false) {
    const value = this.data[key];
    if (silent === false && is.undefined(value)) {
      throw new Error(`No key <${key}> found`);
    }
    return value;
  }


  /**
   * Will not check if property already exist, will add or set it anyway
   * @param  {String} key [name of the key]
   * @param  {Mixed} value [Anything]
   */
  set(key, value) {
    this.data = Object.assign(this.data, {
      [key]: value,
    });
  }

  /**
   * Unpack, just expose the data object, so that we can use desctructing
   * @return  {Object} [the whole data]
   * 
   */
  unpack() {
    return this.data;
  }
}

module.exports = new Container();
