'use strict';

function grouping_count(collection) {

  //implement here
  // let newCollection = {};
  //
  // for(var i = 0; i < collection.length; i++){
  //   if(collection[i] in newCollection){
  //     newCollection[collection[i]] += 1;
  //   }else{
  //     newCollection[collection[i]] = 1;
  //   }
  // }
  //
  // return newCollection;

  //implement here
  let newCollection = {};
  collection.forEach(n => n in newCollection ? newCollection[n] += 1 : newCollection[n] = 1);
  return newCollection;

}

module.exports = grouping_count;
