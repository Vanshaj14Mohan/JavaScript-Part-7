//Check if all numbers in the array are a multiple of 10 or not.
let nums = [10,20,30,40,50]

ans = nums.every((el)=>{
    return el % 10 == 0;
});

console.log(ans);
