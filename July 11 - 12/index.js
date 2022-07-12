// Operators in Javascript
//  Arithmetic Operator
var x = 40;
var y = 36;

console.log("Addition of x and y : ", x + y);
console.log("Subtraction of x and y : ", x - y);
console.log("Multiplication of x and y : ", x * y);
console.log("Division of x and y : ", x / y);

// Assignment Operator

var z = x;

console.log("Value of z : ", z + 2);

// Comparison Operator

let a = 4;
let b = 5;

// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a < b);

//Logical Operator

console.log(true && true);
console.log(true && false);           // AND Operator
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || fasle);           // OR Operator
console.log(false || true);
console.log(false || false);

console.log(!true);                  // NOT Operator

// Variables

var g = 007;
var str1 = "Gaurav007";

// null
let n1 = null;
console.log(n1);

// Arrays 
let marks = { ram: 100, shyam: 55, Mohan: 78 };
console.log(marks);
console.log(marks["ram"]);
let arr1 = [2, "Ram", null, 45];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1.length);
arr1.pop();
console.log(arr1);
arr1.push("Roronoa");
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift("Gaurav");
console.log(arr1);

//Conditionals

age = 18;
if (age > 18) {
    console.log("You can Drink Anything");
} else {
    console.log("Go Watch POGO");
}

// Switch Statement

// let day = 5;
// switch (day) {

//     case 1:
//         document.write("Today is Sunday")
//         break;

//     case 2:
//         document.write("Today is Monday")
//         break;

//     case 3:
//         document.write("Today is Tuesday")
//         break;

//     case 4:
//         document.write("Today is Wednesday")
//         break;

//     case 5:
//         document.write("Today is Thursday")
//         break;

//     case 6:
//         document.write("Today is Friday")
//         break;

//     case 7:
//         document.write("Today is Saturday")
//         break;

//     default: document.write("Invalid Input")
// }

// String 

let myString = "Roronoa Zoro is the world Greatest Swordsmen"

console.log(myString.length)
console.log(myString.indexOf("world"))
console.log(myString.slice(0,12))
console.log(myString.replace("world","Universe"))

// Loops in JavaScript

// For Loop 

let arr = [1,2,3,4,5,6,7];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("========================");


// While Loop

let num = 17;
let res = 0;
let count = 1;
while(count<11){
    res = num * count;
    count++;
    console.log(res);
}

console.log("========================");

// Do - while Loop 
// Syntax

//  do{
//     Statements --
//     Statements --
//  }while(Condition);


// Function 

function avg(a,b){
    return ((a+b)/2);
}

let c1 = avg(47,76);
console.log("Average of 47 and 76 : "+c1);

// Date
let myDate = new Date();
console.log(myDate);   // -> Show the date 
console.log(myDate.getDate())
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getHours())

