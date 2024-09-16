//iterate through each element of array and check if arr[i] < arr[i+1] it is sorted in increasing order else not.

const checkSorted=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]> arr[i+1])
            return false
    }
    return true;
}

let arr=[1,2,3,4,5,6,2]
console.log("Is the array Sorted",checkSorted(arr))