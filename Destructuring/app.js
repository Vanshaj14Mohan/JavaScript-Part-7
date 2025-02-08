//Storing Values of Array and Objects in multiple variables
let names = ["John", "Adam", "Mark", "Jack", "Damian"];
// let winner = names[0];
// let runnerup = names[1]; now using destructuring here

let [winner, runnerup, ...others] = names; //storing starting values of array in a variable, ...others here we used rest concept
//we can combine rest and destructuring concept together 
console.log(winner, runnerup); //John, Adam