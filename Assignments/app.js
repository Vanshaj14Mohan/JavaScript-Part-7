//Square and sum of the array elements using the arrow function and then fund the average of the array.
const numbers = [1, 2, 3, 4, 5];
// const squareAndSum = numbers.map(num => num ** 2).reduce((a, b)

let double = numbers.map((el)=>{ //for square
    return el *2;
});

let result = numbers.reduce((res,el)=>{ //for sum
    return res + el;
});