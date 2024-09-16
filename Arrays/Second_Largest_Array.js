const secondLargestElement = (arr) => {
  //Create 2 Variables both initialize to -Infinity
  //Iterate through Each element if Element is larger than largest then set it as largest
  //If element if smaller then largest but larger than second largest set it as second largest.

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest=largest
        largest=arr[i]
    }
    else if (arr[i] > secondLargest) {
        secondLargest = arr[i]
    }
  }
  return secondLargest;
};

let arr = [1, 2, 3, 4, 5];
console.log("Second Largest Is ", secondLargestElement(arr));
