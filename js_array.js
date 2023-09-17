
//Array Methods

//length,toString(),pop(),push(),shift(),unshift(),join(),delete(),concat(),flat(),splice(),slice(),reverse(),sort(),fill(),lastIndexOf(),indexOf(),of(),
//findIndex(),find(),includes(),reduceRight(),isArray(),filter(),map(),forEach(),Array.every(),entries(),keys(),values(),Array.from(),constructor(),
//copyWithin(),Array.toLocaleString(),flatMap(),

//Array 09/17/23

//Array Methods:
//length, toString(), push(), pop(), shift(), unshift(), join(),
//concat(), flat(), splice(), slice()

//How to Recognize an Array
//Array.isArray(fruits);

//const arr1 = ["Cecilie", "Lone"];
//const arr2 = ["Emil", "Tobias", "Linus"];

const fruits = ["Banana", "Orange", "Apple", "Grapes"];
//let type = typeof fruits;
console.log(fruits)
//console.log(fruits instanceof Array)
//console.log(fruits instanceof Object)
//console.log(fruits instanceof Number)
//console.log(fruits instanceof String)

//const newArr = fruits.push("Tomato")
//console.log(fruits)
//console.log(newArr)

//const newArr = fruits.pop()
//console.log(fruits)
//console.log(newArr)

//const newArr = fruits.shift()
//console.log(fruits)
//console.log(newArr)

//const newArr = fruits.unshift("potato")
//console.log(fruits)
//console.log(newArr)

















//Adding Array Elements
/*
 const fruits = ["Banana", "Orange", "Apple"];
// Adds a new element (Grapes) to fruits
fruits.push("Grapes");
*/




//------------ x --------------------------------------




//Array 09/16/23

//An array is a special variable, which can hold more than one value

//Syntax: 
//const array_name = [item1, item2, ...]


//Creating an Array:
//                          0        1       2
//const persons = new Array("Ajay", "Geeta", "Aryan")

//const persons = new Array(100)

//console.log(persons[0])

//OR

//const persons = ["Ajay", "Geeta", "Aryan"]            //Mostly, It is used.
//console.log(persons)

//OR

/*
const persons = [
  "Ajay",
  "Geeta",
  "Aryan",
  "Ram"
];

console.log(persons)
*/



//OR
/*
const persons = [];

persons [0]= "Ajay";
persons [1]= "Geeta";
persons [2]= "Aryan";

console.log(persons)
*/


//Accessing Array Elements

/*
const persons = [
  "Ajay",
  "Geeta",
  "Aryan",
  "Ram"
];

console.log(persons)
console.log("0: " + persons[0])
console.log("1: " + persons[1])
console.log("2: " + persons[2])
*/





//Changing an Array Element

/*
const persons = [
  "Ajay",
  "Geeta",
  "Aryan",
  "Ram"
];

persons[0] = "Ramesh"
persons[2] = "Tom"

console.log(persons)

*/


//Array Elements Can Be Objects
/*
const myFunction = function (){
  console.log("Function")
}

const myCars = [1,2]

const myArray = []

myArray[0] = Date.now        //Date Object
myArray[1] = myFunction      //Function 
myArray[2] = myCars          //Array


console.log(myArray)
*/




//The length Property
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let length = fruits.length;

console.log(length)
*/


//Accessing the First Array Element
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruit = fruits[1];

console.log(fruit)
*/



//Accessing the Last Array Element
//                0         1          2       3
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruit = fruits[fruits.length - 1];                 //4-1 = 3


console.log(fruit)
*/




//--------------------- x ---------------------------------------




//Looping Array Elements

//                0          1         2        3
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;


for (let i = 0; i < fLen; i++) {                  // 0 < 4,     1<4 ,      2<4,        3<4

   console.log(i + "->" + fruits[i])                 //fruites[0],fruites[1],fruites[02],fruites[3], 
   
}
*/                                    




//               0          1         2        3
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(function(v, i){            //Array.forEach()
  //console.log(v)
  //console.log(i)
  console.log(i + ": " + v)
})

console.log(fruits)
*/



//                 0        1          2        3
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for(let i in fruits){
   
   //console.log(i)
   //console.log(fruits[i])   
  console.log(i + "->" + fruits[i])
}
*/


//----------------------- x --------------------------------









//In JavaScript, arrays always use numbered indexes.   
/*
const person = []
person[0] = "Ajay"
person[1] = "Sisaudiya"
person[2] = 46
*/
//console.log(person.length)      // Will return 3
//console.log(person[0])         // Will return "Ajay" 
















