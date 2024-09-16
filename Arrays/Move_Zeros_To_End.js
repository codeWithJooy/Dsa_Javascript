//You are given an array of integers, 
//your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

//

const MoveZerosToEnd=(arr)=>{
    let i=-1;
    for(let j=0;j<arr.length;j++){
        if(arr[j] !== 0){
            i++;
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    return arr
}

let arr=[1, 0, 2, 3, 2, 0, 0, 4, 5, 1]
console.log(MoveZerosToEnd(arr))