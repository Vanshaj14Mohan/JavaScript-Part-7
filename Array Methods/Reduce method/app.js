//Reduce method reduces the array to a single value. ie -> if array contains very large value so reduces give a single value in the end.
//Syntax 
//arr.reduce(reducer function with 2 variables for (accumulator, element)); accumulator & element can be named anything.
//eg [1,2,3]
//Cases
// (1) => accum, elem -> return 1
// (2) => accum, elem -> return 2
// (3) => accum, elem -> return 3

let num = [1,2,3]

result = num.reduce((res,el) =>{
    return res+el;
});

//result = num.reduce((res,el) => res + el);
//How the code works
// (0,1) = 1
// (1,2) = 3
// (3,3) = 6

//Q -> Using reduce method find and print the maximum number in an array.
let arr =[1,2,3,4,5,6,7,8,9,10]
let max = -1;
for(i = 0; i<arr.length; i++){
    if(max <arr[i]){
        max = arr[i];
    }
}

console.log("Max number in array is:", max);

//now using reduce method and writing this code again
let ans = arr.reduce((max,el)=>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
});