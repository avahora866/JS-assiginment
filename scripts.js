//Exersize 2
// let arr = [1, 2, 3, 4];
// let product = 1;
// let sum = 0;
// arr.forEach(element => {
//     product *= element;
//     sum += element;
// });

// console.log(`Array: ${arr}`);
// console.log(`the sum of the array is: ${sum}`);
// console.log(`the product of the array is: ${product}`);

//Exersize 3
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let merge = array1.concat(array2);

// let result = [];
// merge.forEach((c) => {
//     if (!result.includes(c)) {
//         result.push(c);
//     }
// });

// console.log(`Merged array: ${merge}`);

// console.log(`Final Result: ${result}`);

//Exersize 4 - Pattern Matching 
// let patternMatch = /[a - z][0-9][s ! # $ % & ' * + - / = ? ^ _ ` { | } ~] .*[^.]$ *[^.]^ .(?!.*.)/i

// console.log(patternMatch.test('testemail1@hotmail.com'))

//Exersize 5
// function myValues() {
//     let fname = document.getElementById("form1").childNodes[1].value;
//     let lname = document.getElementById("form1").childNodes[4].value;
//     console.log(fname);
//     console.log(lname);
// }

// myValues();

//Exersize 6
// function removecolor() {
//     let selectBox = document.getElementById("colorSelect");
//     let color = selectBox.value;
//     let arr = selectBox.options
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if (element.value == color) {
//             selectBox.options.remove(index)
//         }

//     }
// }

//Exersize 8
// function getFullMonth(x) {
//     let num = x.getMonth() + 1;
//     console.log(num);
//     switch (num) {
//         case 1:
//             console.log("January")
//             break;
//         case 2:
//             console.log("Feburary")
//             break;
//         case 3:
//             console.log("March")
//             break;
//         case 4:
//             console.log("April")
//             break;
//         case 5:
//             console.log("May")
//             break;
//         case 6:
//             console.log("June")
//             break;
//         case 7:
//             console.log("July")
//             break;
//         case 8:
//             console.log("Auguest")
//             break;
//         case 9:
//             console.log("September")
//             break;
//         case 10:
//             console.log("October")
//             break;
//         case 11:
//             console.log("November")
//             break;
//         case 12:
//             console.log("December")
//             break;
//         default:
//             break;
//     }
// }

// getFullMonth(new Date("10/11/2009"));

//Exersize 9
// function isWeekend(x) {
//     if (x.getDay() == 6 || x.getDay() == 0) {
//         console.log("Weekend")
//     } else {
//         console.log("Weekday");
//     }
// }

// isWeekend(new Date('Nov 15, 2014'));
// isWeekend(new Date('Nov 16, 2014'));
// isWeekend(new Date('Nov 17, 2014'));

//Exersize 10
// var library = [{
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// library.forEach(item => console.log(`Book Name: ${item.title} - Author: ${item.author} - Reading Status: ${item.readingStatus}`))

//Exersize 11
// setInterval(function() { var today = new Date();
//     console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "\n"); }, 1000);

//Exersize 12
// var library = [{
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }
// ];

// function compare(a, b) {
//     if (a.libraryID < b.libraryID) {
//         return -1;
//     }
//     if (a.title > b.title) {
//         return 1;
//     }
//     if (a.author > b.author) {
//         return 1;
//     }
//     return 0;
// }

// library.sort(compare);
// console.log(library);