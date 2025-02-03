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