//In-built String Methods

//String Methods to be done
// length,slice(),substring(),substr(),replace(), replaceAll(),toUpperCase(),toLowerCase(),concat(),trim(),trimStart(),trimEnd(),padStart(),
//padEnd(),charAt(),charCodeAt(),split(),indexOf(),lastIndexOf(),search(),match(),matchAll(),includes(),startsWith(),endsWith()
//-----------------------x---------------------------------------------



//Data: 09.17.23
//Object
console.log("--> Js Tutorial (Object) <--")

/*
const num = new Number()
const str = new String()
const obj = new Object()
const arr = new Array()
const fun = new Function()
const date = new Date()
*/

//Creating a JavaScript Object
//There are different ways to create new objects:

//1. Create a single object, using an object literal. -  ( {} )
//2. Create a single object, with the keyword new. - ( new Object )
//3. Define an object constructor, and then create objects of the constructed type.
//4. Create an object using Object.create().     - (  Object.create()  )

//A JavaScript object is a collection of named values

//1.            --- Property ---
//const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};   //Property-> name:value

//const fname = person.firstName
//const fname = person['firstName']

//const fname = person.firstName = "Sohan"
//console.log(person)


//OR
/*
const person = {
  firstName: "John",              //Property-> name:value
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  fullName: function() {                               //Method
    return this.firstName + " " + this.lastName
  }
};
*/
//console.log(person.fullName())

//OR
/*
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
*/
//console.log(person)



//2. const Obj = new Object()
/*
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
*/
//console.log(person)





//3. JavaScript Object Constructors

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

const person1 = new Person("ajay","sisaudiya",73,"black")
console.log(person1.name())


//4. const Obj = Object.create({})




//----------x--------------------------------------

