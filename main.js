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

document.getElementById("student_name").innerHTML = "Student Name: " + student_name;
document.getElementById("age").innerHTML = "Age: " + age;
document.getElementById("course_name").innerHTML = "Course Name: " + course_name;
document.getElementById("isEnrolled").innerHTML = "Course Enroll: " isEnrolled;