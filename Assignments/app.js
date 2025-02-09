//1. Square and sum of the array elements using the arrow function and then fund the average of the array.
const numbers = [1, 2, 3, 4, 5];
// const squareAndSum = numbers.map(num => num ** 2).reduce((a, b)

let double = numbers.map((el)=>{ //for square
    return el *2;
});

let result = numbers.reduce((res,el)=>{ //for sum
    return res + el;
});

//2. Create a new array using the map function whose each element is equal to the original element plus 5.
const numbers2 = [1, 2, 3, 4, 5];

let addFive = numbers2.map((el)=>{
    return el + 5;
});