function myFunction(arr){
     return arr*10;
}
let arr = [1,2,3,4,5,6,7,8,9];
const result = arr.map(myFunction);
console.log(result);

// ===========================XXX=======================

function stringFunction(arr1){
     return arr1.toUpperCase();
}
let arr1=["siva","prakash"];
const result1 = arr1.map(stringFunction);
console.log(result1);