// Map Function is a lot similar to forEach nut it creates a newArr that has the same size as original array.
// arr.map(some function definition or name);
let num = [1,2,3,4,5]
//we will double the values in this
let double = num.map((el)=>{
    return el*2;
});

//for square
let square = num.map((el)=>{
    return el*el;
});

//From previous code
let student = [{
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

gpa = student.map((el)=>{
    return el.marks/10;
});