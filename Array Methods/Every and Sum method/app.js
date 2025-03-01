//Every Method -> Quite similar to logical AND Operator.
//Returns true if every element of array gives true for some function. Else returns false.
//arr.every(some function definition or name)

let arr = [1,2,3,4,5]

check = arr.every((el) =>{
    return el % 2 == 0; //would return false as the array contains some negative numbers too.
});

//Some Method -> Quite similar to logical OR Operator.
//Returns true if some element of array gives true for some function. Else returns false.
//arr.some(some function definition or name)

let data = [1,2,3,4,5]

result = data.some((el) =>{
    return el % 2 == 0; //would return true as the array contains mix up of positive and negative numbers.
});

