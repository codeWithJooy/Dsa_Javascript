//Given an array of N integers, left rotate the array by one place.
//Eg-[1,2,3,4,5] -> [2,3,4,5]

//create a variable and store the value of arr[0]
//iterate from 0 to length-2
//move arr[i+1] to arr[i]
//Set value of variable to arr[length-1]

const LeftRotateByOne=(arr)=>{
    let val=arr[0]

    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }

    arr[arr.length-1]=val
    
    return arr;
}

const arr=[1,2,3,4,5]
console.log(LeftRotateByOne(arr))