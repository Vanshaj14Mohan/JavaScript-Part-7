//Storing Values of Array and Objects in multiple variables
let names = ["John", "Adam", "Mark", "Jack", "Damian"];
// let winner = names[0];
// let runnerup = names[1]; now using destructuring here

let [winner, runnerup, ...others] = names; //storing starting values of array in a variable, ...others here we used rest concept
//we can combine rest and destructuring concept together 
console.log(winner, runnerup); //John, Adam

//Now how we can do Destructuring in objects.
const student = {
    name: "John",
    age: 20,
    class: "UG",
    subjects: ["English", "Computer", "Maths"],
    username: "John@1234",
    password: "abcd@1234"
};// now let's start picking specific information from the student
// let username = student.username;
// let password = student.password; //2nd way using destructuring here
let {username, password} = student; //1st way using destructuring here
// let {username: user, password: secret, city = "Pune"} = student; //putting values into another variable and creating new variable here
