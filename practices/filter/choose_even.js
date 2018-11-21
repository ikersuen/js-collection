'use strict';

function choose_even(collection) {
  // var newCollection = [];
  // //implement here
  // for(let i = 0; i < collection.length; i++){
  //   if(collection[i] % 2 === 0){
  //     newCollection.push(collection[i]);
  //   }
  // }
  // return newCollection;

  //implement high-order function
  return collection.filter(n => (n % 2 === 0));
}

module.exports = choose_even;
