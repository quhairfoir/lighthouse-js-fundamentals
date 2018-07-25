function merge (array1, array2){
  var result = array1;
  for (var i = array2.length - 1; i >= 0; i--) {
    result.push(array2[i]);
  }
  result.sort();
  return result;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);