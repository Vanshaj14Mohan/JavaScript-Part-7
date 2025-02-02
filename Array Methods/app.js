//1. using forEach method
//syntax
//arr.forEach(some function definition or name);
let arr = [1,2,3,4,5,6]

function print(el){
    console.log(el);
}

//or
// print = function(el){
//     console.log(el);
// }

arr.forEach(print);

//another approach
// arr.forEach(function(el){
//     console.log(el);
// });

console.log("------------------------------------")

//using arrow function 
arr.forEach((el) =>{
    console.log(el);
});

//We can use forEach for objects too.
console.log("Activity");
let data = [{
    name: "John",
    marks:95
},
{
  name: "David",
  marks: 90  
},
{
    name: "Jack",
    marks:91
}];

data.forEach((student)=>{
    console.log(student.marks);
});


//2. Filter method, same format
//let newArr = arr.filter(some function definition or name);
//eg if it gives true value in the output the new value is added in the new variable otherwise it's not added.
//Depends on the filter/condition we have given

let nums = [1,2,3,4,5,6,7,8,9,10];

newNum = nums.filter((el)=>{
    return el % 2 == 0; //will give only even number values
});