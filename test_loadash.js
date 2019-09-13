console.log("_.isArrayLike");

console.log(
  _.isArrayLike([1, 2, 3]),               // => true
  _.isArrayLike(document.body.children),  // => true
  _.isArrayLike('abc'),                   // => true
  _.isArrayLike(_.noop),                  // => false
  _.reverse([1,2,3,4,5])
);
