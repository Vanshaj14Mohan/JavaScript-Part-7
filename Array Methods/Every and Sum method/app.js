//Every Method -> Quite similar to logical AND Operator.
//Returns true if every element of array gives true for some function. Else returns false.
//arr.every(some function definition or name)

let arr = [1,2,3,4,5]

check = arr.every((el) =>{
    return el % 2 == 0; //would return false as the array contains some negative numbers too.
});