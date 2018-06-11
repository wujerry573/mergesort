function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];

  let midpoint = Math.ceil(wholeArray.length / 2);

  firstHalf = mergeSort(wholeArray.slice(0, midpoint));

  secondHalf = mergeSort(wholeArray.slice(midpoint));

  return [firstHalf, secondHalf];
}

function merge(arrayOne, arrayTwo) {
  let mergedArray = [];

  while (arrayOne.length && arrayTwo.length) {
    if (arrayOne[0] > arrayTwo[0]) {
      mergedArray.push(arrayTwo.shift());
    } else {
      mergedArray.push(arrayOne.shift());
    }
  }

  //console.log(mergedArray.concat(arrayOne.length ? arrayOne : arrayTwo));
  // let mergedArray = arraytoMerge[0].concat(arraytoMerge[1]);

  return mergedArray.concat(arrayOne.length ? arrayOne : arrayTwo);
}



function mergeSort(array) {

  if (array.length < 2) {
    return array;
  }

  let sortingArray = split(array);

  return merge(sortingArray[0], sortingArray[1]);
}
