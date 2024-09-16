//If there are k elements after removing the duplicates,
//then the first k elements of the array should hold the final result.
//It does not matter what you leave beyond the first k elements.

//Will Use Two Pointers
//Set i to -1 and J to 0
const RemoveDuplicates = (arr) => {
  let i = 0;
  for (let val = 1; val < arr.length; val++) {
    if (arr[val] !== arr[val - 1]) {
      i++;
      arr[i] = arr[val];
    }
  }
  return arr;
};

let arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(RemoveDuplicates(arr))
