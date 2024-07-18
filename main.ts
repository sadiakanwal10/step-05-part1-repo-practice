//      OBJECTS       //
// object is a text based format that is used to store values through keys 

const car = {
    name : "toyota",
    model : "corola",
    year : 2022,
    colour : "black",
}
console.log(car);    // if we want to print whole data

console.log(car.colour);    // if we want to access only object colour


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


let student : {
    name : string,
    studentId : number,
    class : number,
    age : number,
};

student = {
    name : "fiza",
    studentId : 1234,
    class : 10,
    age : 19,
}

console.log(student);                // if we want to print whole data

console.log(student.age),            // if we want to access only age
console.log(student["class"]);        // if we want to access only class

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

let teacherData : {
    name : string,
    subject : string,
    experience : number
} = {
    name : "ayesha",
    subject : "chemistry",
    experience : 20,
}
console.log(teacherData.name);


// TYPE ALIASED OBJECTS
// WE CAN DEFINE CUSTOM TYPE THROUGH IT AND AGAIN AGAIN USED IT EASILY

// SYNTAX
// type datatypeName = {
//  key1 : "type1",
//  key2 : "type2",
// } 

type subject ={
 marksPhysics : number,
 marksMath : number,
marksChem : number,
position : string
}
let student1 : subject={
    marksPhysics : 95,
    marksMath : 98,
    marksChem : 80,
    position : "SECOND",
}
console.log(student1);


// TYPE INTERFACE 
// WE CAN DEFINE CUSTOM DATA TYPE THROUGH IT AND USED IT AGAIN AND AGAIN EASILY
// THERE IS NO MAJOR DIFFERENCE BETWEEN TYPE ALIASED AND TYPE INTERFACE . JUST IN TYPE INTERFACE WE USE INTERFACE WORD AND 
// IN TYPE ALIASED WE USED TYPE  
// there is also a little difference in there syntax

// SYNTAX
// interface datatypeName {
// key1 : "type1",
// key2 : "type2",
//  }

interface employeeData {
    name : string,
    salary : number,
    designation : string
}

let employee1 : employeeData = {
    name : "hafsa",
    salary : 40000,
    designation : "manager,"
}
console.log(employee1);



// nested objects 
// when we create object itself in an object then it is known as nested objects

// SYNTAX 

// type datatypename = {
// key1 : type1,
// key2 : type2,
// key3 : {
// keya : typea,
// keyb : typeb,
// }
// }


type Detail = {
    name : string,
    age : number,
    qualification : string,
    address : {
        houseNo: number,
        city : string,
    }
}

let myDetail : Detail = {
    name : "sadia",
    age : 23,
    qualification : "graduation",
    address : {
        houseNo : 9,
        city : "karachi",
    }
}

console.log("house no :", myDetail.address.houseNo);

// STRUCTURAL TYPING OBJECTS LITERALS
// (WHEN TWO OBJECTS ARE COMPATIBLE AND THEIR PROPERTIES ARE SAME )

interface worker {
    age : number,
    salary : number,
    qualification : string,
};

interface manager {
    age:number,
    qualification: string,
};

let companyWorker : worker = {
    age : 22,
    salary : 25000,
    qualification : "inter",
};

let companyManager : manager = {
    age : 30,
    qualification : "MBA",
};

companyManager = companyWorker;  // both are compatible because manager mai jin 2 properties ki need hai wo worker mai bhe mojud hai
// companyWorker = companyManager;    //both are not compatible because manager mai jin 3 properties ki need hai wo worker mai mojud nae

// intersection 
// (IT MEANS FOR EXAMPLE WE HAVE 3 DATATYPES OBJECTS AND WE COMBINE THESE 3 TYPES AND MAKE 1 ORIGINAL TYPE FORM THESE .& SIGN 
// IS USED TO MAKE ONE ORIGINAL TYPE )

//WE USE TYPE KEYWORD TO MAKE 1 ORIGINAL AND MAIN OBJECTS BY COMBINING THESE.

interface mobileFeatues1 {
    name : string,
    colour: string,
    model : any,

};


interface mobileFeatures2 {
    battery : any,
    camera : any,
    price : number,
}

type mobileFeatures = mobileFeatues1 & mobileFeatures2;

let mobile : mobileFeatures = {
    name : "OPPO",
    colour : "blue",
    model : "A12",
    battery : "4230mAh",
    camera : "13MP",
    price : 25000,
};

console.log(mobile);






