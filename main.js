"use strict";
//      OBJECTS       //
// object is a text based format that is used to store values through keys 
const car = {
    name: "toyota",
    model: "corola",
    year: 2022,
    colour: "black",
};
console.log(car); // if we want to print whole data
console.log(car.colour); // if we want to access only object colour
// syntax of object 
//   let objectName = {
//   key1 : "value1",
//   key2 : "value2",
//   }
// type declaration 
//  (when we first declare the type of each properties then used it in an object then it is known an type declaration)
// syntax of type declaration
// let objectName : {
//  key1 : "type1",
//  key2 : "type2",
//   }
let student;
student = {
    name: "fiza",
    studentId: 1234,
    class: 10,
    age: 19,
};
console.log(student); // if we want to print whole data
console.log(student.age), // if we want to access only age
    console.log(student["class"]); // if we want to access only class
// ANONYMOUS OBJECT
// when there is no separate name for any object and we call it with the name of its data type object
// SYNTAX OF IT 
//  let typename :{
//  key1 : "type",
//  key2 : "type",
//  } =
//  { key1 : "value1",
//  key2 : "value2"
// };
let teacherData = {
    name: "ayesha",
    subject: "chemistry",
    experience: 20,
};
console.log(teacherData.name);
let student1 = {
    marksPhysics: 95,
    marksMath: 98,
    marksChem: 80,
    position: "SECOND",
};
console.log(student1);
let employee1 = {
    name: "hafsa",
    salary: 40000,
    designation: "manager,"
};
console.log(employee1);
let myDetail = {
    name: "sadia",
    age: 23,
    qualification: "graduation",
    address: {
        houseNo: 9,
        city: "karachi",
    }
};
console.log("house no :", myDetail.address.houseNo);
;
;
let companyWorker = {
    age: 22,
    salary: 25000,
    qualification: "inter",
};
let companyManager = {
    age: 30,
    qualification: "MBA",
};
companyManager = companyWorker; // both are compatible because manager mai jin 2 properties ki need hai wo worker mai bhe mojud hai
;
let mobile = {
    name: "OPPO",
    colour: "blue",
    model: "A12",
    battery: "4230mAh",
    camera: "13MP",
    price: 25000,
};
console.log(mobile);
