//Spread -> Means to expand an iterable into multiple values. eg, array, strings
//Syntax
// function func(...arr){
 //do something
//}

let arr = [1,2,3,4,5,6,7]
console.log(...arr) //it will spread the array elements

data = "Codeandsleep"
console.log(...data) //it will spread the string elements

//We can use spread with array literals too.
let newArr = [1,2,3,4,5]
dataTwo = [...newArr]
console.log(dataTwo);

char = [..."hello"]
console.log(char);

let odd = [1,3,5,7,9]
let even = [2,4,6,8,10]
result = [...odd, ...even]
console.log(result);

//Now how we can use Spread with Object Literals
const dataStudent = {
    email: "Student12345@gmail.com",
    password: "abcd",
};

dataCopy = {...dataStudent, id:123};
console.log(dataCopy);
//Now we can even spread arrays or strings in objects
let dataArr = [1,2,3,4] //but array only has values
let obj1 = {...dataArr}; //obje -> key:val pair to execute 
console.log(obj1); //now it will display the value with the indexes 

let obj2 = {..."HelloGuys"}
console.log(obj2); //It will print too with the indexed values