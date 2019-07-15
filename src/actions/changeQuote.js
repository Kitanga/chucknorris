/**
 * Change the current quote
 *
 * @param {String} quote The new quote from api
 */
const changeQuote = function(quote) {
  console.log("This is", this);
  this.quote = quote;
};

export default changeQuote;
