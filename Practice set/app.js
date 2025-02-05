//1: Check if all numbers in the array are a multiple of 10 or not.
let nums = [10,20,30,40,50]

ans = nums.every((el)=>{
    return el % 10 == 0;
});

console.log("Value divisible by 10 is:",ans);

//2: Create a function to find the min number in an array.
// let arr = [10,20,30,40,50]

// check = arr.reduce((min,el)=>{
//     if(min <el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });

// console.log("Minimum value is:", check);
//using functions now

function getMin(arr){
    check = arr.reduce((min,el)=>{
        if(min <el){
            return min;
        }
        else{
            return el;
        }
    });
    return check;
}

let arr = [10,20,30,40,50];