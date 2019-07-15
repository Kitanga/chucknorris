import { observable } from "mobx";
/**
 * Add categories from server
 *
 * @param {String[]} categories List of available categories
 */
const addCategories = function(categories) {
  this.categories = observable(categories);
};

export default addCategories;
