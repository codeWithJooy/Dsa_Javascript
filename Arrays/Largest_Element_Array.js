const Largest=(arr)=>{
    let max=arr[0]
    for(let i=1;i< arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
    return max
}

let arr=[5,4,3,2,1]
console.log("Largest Elemnt In an Array is ",Largest(arr))