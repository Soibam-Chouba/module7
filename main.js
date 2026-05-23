// Student Information
document.getElementById("student_info").innerHTML = "<h3>Student Information";

let student_name = prompt("Student name: ");
let age = prompt("Student age: ");
let course_name = prompt("Course name: ");
let isEnrolled = prompt("Is he enrolled: ");

console.log(student_name);
console.log(age);
console.log(course_name);
console.log(isEnrolled);

document.getElementById("student_name").innerHTML = student_name;
document.getElementById("age").innerHTML = age;
document.getElementById("course_name").innerHTML = course_name;
document.getElementById("isEnrolled").innerHTML = isEnrolled;