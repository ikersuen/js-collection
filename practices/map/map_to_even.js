'use strict';
function map_to_even(collection){
  for(var i = 0; i < collection.length; i++){
    collection[i] = collection[i] * 2;
  }
  return collection;
  //implement High-order-function
  //return collection.map(n => n * 2);
}
module.exports = map_to_even;
