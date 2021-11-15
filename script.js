// //JS Variables
// //Exercise 1
// var carName = "Volvo";
// console.log(`Exercise 1 - ${carName}`);
// //Exercise 2
// var x = 50;
// console.log(`Exercise 2 - ${x}`);
// //Exercise 3
// var x = 5;
// var y = 10;
// console.log(`Exercise 3 - ${x + y}`);
// //Exercise 4
// var x = 5;
// var y = 10;
// var z = x + y;
// alert(`Exercise 4 - ${z}`);
// //Exercise 5
// var firstName = "Jhon",
//     lastName = "Doe",
//     age = 35;
// console.log(`Exercise 5 - firstName: ${firstName} lastName: ${lastName} age: ${age}`);

// //JS Operators
// //Exercise 1
// alert(10 * 5);
// //Exercise 2
// alert(10 / 2);
// //Exercise 3
// alert(15 % 9);
// //Exercise 4
// x = 10;
// y = 5;
// x += y;
// console.log(`Exercise 4 - ${x}`);
// //Exercise 5
// x = 10;
// y = 5;
// x *= y;
// console.log(`Exercise 5 - ${x}`);

// //JS Data Types
// //Exercise 1
// let length = 16; // number

// let lastName = "Johnson"; // string

// const x = {
//     firstName: "John",
//     lastName: "Doe"
// }; // object

//JS Functions 
// //Exercise 1
// function myFunction() {
//     alert("Hello World!");
// }
// myFunction();
// //Exercise 2
// function myFunction() {
//     alert("Hello World!");
// }
// //Exercise 3 ---------------------------------------------------------------------------
// function myFunction() {
//     console.log("Hello");
// }
// document.getElementById("demo").innerHTML = myFunction();
// //Exercise 4 ------------------------------------------------------------------------------------
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello";
// }

// //JS Objects
// //Exercise 1
// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };
// alert(person.firstName)
//     //Exercise 2
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     country: "Norway"
// };
// //Exercise 3
// const person = {
//     name: "John",
//     age: 50
// };
// alert(person.name + " is " + person.age);

//JS Events - HTML Page
//Exercise 1
//Exercise 2
//Exercise 3

// //JS Strings
// //Exercise 1
// let txt = "Hello World!";
// let x = txt.length;
// alert(`Exercise 1 - ${x}`);
// //Exercise 2 
// let txt = "We are \"Vikings\"";
// alert(txt);
// //Exercise 3
// let str1 = "Hello ";
// let str2 = "World!";
// alert(`Exercise 3 - ${str1 + str2}`);

// //JS String Methods
// //Exercise 1
// let txt = "Hello World!";
// txt = txt.toUpperCase();
// console.log(`Exercise 1 - ${txt}`);
// //Exercise 2
// let txt = "I can eat bananas all day";
// let x = txt.slice(10, 17);
// console.log(`Exercise 2 - ${x}`);
// //Exercise 3
// let txt = "Hello World";
// txt = txt.replace("Hello", "Welcome");
// console.log(`Exercise 3 - ${txt}`);
// //Exercise 4
// let txt = "Hello World";
// txt = txt.toUpperCase();
// console.log(`Exercise 4 - ${txt}`);
// //Exercise 5
// let txt = "Hello World";
// txt = txt.toLowerCase();
// console.log(`Exercise 5 - ${txt}`);


// //JS Arrays
// //Exercise 1
// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1];
// console.log(`Exercise 1 - ${x}`);
// //Exercise 2
// const cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";
// console.log(`Exercise 2 - ${cars[0]}`);
// //Exercise 3
// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(`Exercise 3 - ${cars.length}`);

// //JS Array Methods
// //Exercise 1
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// console.log(`Exercise 1 - ${fruits}`);
// //Exercise 2
// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi");
// console.log(`Exercise 2 - ${fruits}`);
// //Exercise 3
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2);
// console.log(`Exercise 3 - ${fruits}`);



// //JS Array Sort
// //Exercise 1
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort();
// console.log(`Exercise 1 - ${fruits}`);

// //JS Dates
// //Exercise 1
// const d = new Date();
// console.log(`Exercise 1 - ${d}`);
// //Exercise 2
// const d = new Date();
// const year = d.getFullYear()
// console.log(`Exercise 2 - ${year}`);
// //Exercise 3
// const d = new Date();
// const month = d.getMonth()
// console.log(`Exercise 3 - ${month}`);
// //Exercise 4
// const d = new Date();
// d.setFullYear(2020)
// console.log(`Exercise 4 - ${d}`);

// //JS Math
// //Exercise 1
// let r = Math.random();
// console.log(`Exercise 1 - ${r}`);
// //Exercise 2
// let x = Math.max(10, 20);
// console.log(`Exercise 2 - ${x}`);
// //Exercise 3
// let x = Math.round(5.3);
// console.log(`Exercise 3 - ${x}`);
// //Exercise 4
// let x = Math.sqrt(9);
// console.log(`Exercise 4 - ${x}`);

// //JS Comparisons
// //Exercise 1
// x = 10;
// y = 5;
// alert(`Exercise 1 - ${x > y}`);
// //Exercise 2
// x = 10;
// y = 10;
// alert(`Exercise 2 - ${x == y}`);
// //Exercise 3
// x = 10;
// y = 5;
// alert(`Exercise 3 - ${x !== y}`);
// //Exercise 4
// var age = 15;
// var voteable = (age < 18) ? "Too young" : "Old enough";
// alert(`Exercise 4 - ${voteable}`);

// //JS Conditions
// //Exercise 1
// let x = 5;
// let y = 2;
// if (x > y) {
//     alert("Hello World");
// }
// //Exercise 2
// if (x > y) {
//     alert("Hello World");
// } else {
//     alert("Goodbye");
// }

// //JS Switch
// //Exercise 1
// switch (fruits) {
//     case "Banana":
//         alert("Hello")
//         break;
//     case "Apple":
//         alert("Welcome")
//         break;
// }
// //Exercise 2
// switch (fruits) {
//     case "Banana":
//         alert("Hello")
//         break;
//     case "Apple":
//         alert("Welcome")
//         break;
//     default:
//         alert("Neither");
// }

// //JS For Loops
// //Exercise 1
// let i;
// for (i = 0; i < 10; i++) {
//     console.log(`Exercise 1 - ${i}`)
// }
// //Exercise 2
// const fruits = ["Apple", "Banana", "Orange"];
// for (let x in fruits) {
//     console.log(`Exercise 2 - ${fruits[x]}`)
// }

// //JS While Loops
// //Exercise 1
// let i = 0;
// while (i < 10) {
//     console.log(`Exercise 1 - ${i}`);
//     i++;
// }
// //Exercise 2
// let i = 0;
// while (i < 10) {
//     console.log(`Exercise 2 - ${i}`);
//     i += 2;
// }

// //JS Break Loops
// //Exercise 1
// let i;
// for (i = 0; i < 10; i++) {
//     console.log(`Exercise 1 - ${i}`);
//     if (i == 5) {
//         break;
//     }
// }
// //Exercise 2 
// let i;
// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(`Exercise 2 - ${i}`);
// }

//JS HTML DOM ---------------------------------------------------------
//Exercise 1
//Exercise 2
//Exercise 3
//Exercise 4
//Exercise 5
//Exercise 6
//Exercise 7
//Exercise 8
//Exercise 9