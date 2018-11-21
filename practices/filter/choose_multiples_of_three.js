'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  // var newCollection = [];
  // //implement here
  // for(let i = 0; i < collection.length; i++){
  //   if(collection[i] % 3 === 0){
  //     newCollection.push(collection[i]);
  //   }
  // }
  // return newCollection;

  //implement high-order-function
  return collection.filter(n => (n % 3 === 0));
}

module.exports = choose_multiples_of_three;
