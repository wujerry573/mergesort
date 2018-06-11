describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4]
    ]);
    expect(split([1, 2, 3])).toEqual([
      [1, 2],
      [3]
    ]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge(
      [1, 2], [3, 4]
    )).toEqual(
      [1, 2, 3, 4]
    );
    expect(merge(
      [1, 2, 3], [4, 5]
    )).toEqual(
      [1, 2, 3, 4, 5]
    );
  });
});


describe('Merge Sort function', function () {
  it('is able to merge sort an array', function () {
    expect(mergeSort(
      [4, 3, 6, 8, 3, 6, 9, 1]
    )).toEqual(
      [1, 3, 3, 4, 6, 6, 8, 9]
    );

  });
});
