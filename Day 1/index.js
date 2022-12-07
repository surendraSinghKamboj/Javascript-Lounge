// define variables

// Var method
var variableName = "Hello"; // here "var" is a keyword to define variable "variableName" and "hello" is Stirng Datatype

// let method
let letAge = 24; // here "let" is keyword and "letAge" is variable Name and 24 is Number Datatype

// const Method or Constatnt
const constData = {
  name: "Rusi",
  age: 1,
}; // here "const" is a keyword datatype is Object

// const is constant which can't be changed after init

{
  var a = 5;
  let b = 7;
  const c = 4;
}
console.log(a); //it will give output =>  5
// console.log(b) // Error
// console.log(c) // error

// Line 18 to Line 22 is Block Scope

//------------------------------
//  Data types in Javascript

// String data types

const string = "This is a Stirng"; // Everythying in quotes is String

// Number Data types
const number = 5; // All no. 0-9 or NaN is also a number Datatype

// Boolean data Type
const yes = true;
const no = false; // both are boolean Datatypes

// null Data type
const nothing = null; // the null type is inhabited by exactly one value : null

// undefined
let breakup; // here breakup will return undefind becase there is no value inside

// Symbol Data type
const sym = Symbol("foo"); // this is the syntex for writing a symbol data type
console.warn(typeof sym);
// for more information about symbol please goto "mdn web docs"

// Array data type
const list=["Car","Bike","Bus"];
// Array can create a list of data which writen in [] squre Brackets 
// Array can store any kind of Data

// Object datatype
const user={
  name:"Sunnu",
  age:2,
  color:"fawn"
}
// in {} a block we can write objects , 
// Object can store any kind of data in key & value Pair 