
const reverse=(arr)=>{
   let rev=[]
   let i=arr.length-1
   while(i>=0){
    rev.push(arr[i])
    i--;
   }
   return rev;
}

let arr=[1,2,3,4,5,6]
console.log("Reverse Array Is ",reverse(arr))