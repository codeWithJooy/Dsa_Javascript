const MaximumOne=(arr)=>{
    let max=0;
    let temp=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            temp++
        }
        if(arr[i]!==1 || i===arr.length-1){
            if(temp > max)
                max=temp
            temp=0
        }
        
    }
    return max
}

let arr=[1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1]
console.log(MaximumOne(arr))