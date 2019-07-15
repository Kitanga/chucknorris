import { observable, action, computed, decorate } from "mobx";

// Imported actions. I felt that I should move them into their own files, since I'm using JSDOC (which can lead to things getting messy real quick)
import changeQuote from "./../actions/changeQuote";
import addCategories from "./../actions/addCategories";

class CategoryStore {
  // Observables
  /**
   * On startup, we get all categories from API and store them here
   *
   * @type {String[]}
   * */
  categories = [];
  quote = "This might be a store!";

  // Actions
  changeQuote = changeQuote;
  addCategories = addCategories;
}

let store = new (decorate(CategoryStore, {
  categories: observable,
  quote: observable,

  changeQuote: action,
  addCategories: action
}))();

export default store;
