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

//Default parameters -> Used inside a function for giving a default value to the arguments.
//eg
// function func(a, b = 2){
//     //do something
// }
//we can put default parameter in the starting or in the ending of the argument it does'nt matter.
//(a =1, b) -> this syntax and assigning value like this is wrong.
//sum(1) so b would be undefined.as a is already assigned a vlaue.
function sum(a=2,b){
    return a +b;
}

sum(2,3);
//sum(1) would print undefined