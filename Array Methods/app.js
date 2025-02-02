// using forEach method
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


