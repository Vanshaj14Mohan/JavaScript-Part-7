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

//3. Create a new array whose elements are in the uppercase of the words present in the original array.
const arr = ["hello", "John", "Adam", "Jack"];

const newArr = arr.map((el)=>{
    return el.toUpperCase();
});

//4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a 
// new array with original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map(num => num * 2)];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5)); // Output: [1, 2, 3, 8, 10]
console.log(doubleAndReturnArgs([2], 10, 20, 30)); // Output: [4, 20, 40, 60]

//5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the
// first object and second object.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // Output: { a: 1, b: 2, c: 3, d: 4 }
