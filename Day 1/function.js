// there are many types of functions

// 1. Normal Function
//      declearation

function greet() {
  console.log("Hello world");
}

// Calling a function
greet();

// 2. Anonymous Functions
//  An Anonymous function is that of the function that have no Name
// We can store it in a varrable

const anony = function () {
  console.log("Anonumous function");
};

// Calling an anonymous function
anony();

//  3. Arrow Function
// it also stores in a Variable
const arrow = () => {
  console.log("hello from Arrow Function");
};

// calling an Arrow Function
// use variable name
arrow();

// 4. IIFE
// Immidietly Invoked Function Expression in Javascript
(() => {
  console.log("Hello Form IIFE");
})();
// cant't be call again

// 5. generator Function
// define Generator function
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
// Store it in an variable first
const result = generator();

// then call it show below
console.log(result.next());
console.log(result.next());

// 6. Construction function
// A constructor is a special function that creates
// and initializes an object instance of a class.
// In JavaScript, a constructor gets called when
// an object is created using the new keyword.

function UserAccount(name, age, email) {
  (this.name = name), (this.age = age), (this.email = email);
}

const sunnu = new UserAccount("Sunnu", 24, "surendra.singh.kamboj@hotmail.com");
console.log(sunnu)

/*
_________ All Outputs _________ 
    Hello world
    Anonumous function
    hello from Arrow Function
    Hello Form IIFE
    { value: 1, done: false }
    { value: 2, done: false }
    UserAccount {
    name: 'Sunnu',
    age: 24,
    email: 'surendra.singh.kamboj@hotmail.com'
}

*/