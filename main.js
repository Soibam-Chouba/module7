// Student Information
document.getElementById("student_info").innerHTML = "<h3>Student Information</h3>";

let student_name = prompt("Student name: ");
let age = prompt("Student age: ");
let course_name = prompt("Course name: ");
let isEnrolled = prompt("Is he enrolled: ");

console.log(student_name);
console.log(age);
console.log(course_name);
console.log(isEnrolled);

document.getElementById("student_name").innerHTML = "Student Name: " + student_name;
document.getElementById("age").innerHTML = "Age: " + age;
document.getElementById("course_name").innerHTML = "Course Name: " + course_name;
document.getElementById("isEnrolled").innerHTML = "Course Enrolled: " + isEnrolled;

// Calculator using operators
document.getElementById("calculator").innerHTML = "<h3>Calculating using Operators</h3>"

let num1 = Number(prompt("Number 1: "));
let num2 = Number(prompt("Number 2: "));

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

document.getElementById("addition").innerHTML = "Addition: " + addition;
document.getElementById("subtraction").innerHTML = "Subtraction: " + subtraction;
document.getElementById("multiplication").innerHTML = "Multiplication: " + multiplication;
document.getElementById("division").innerHTML = "Division: " + division;